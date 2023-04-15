import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
  DOMAttributes,
  SyntheticEvent,
  MutableRefObject,
  MouseEvent,
} from "react";
import { createPortal, findDOMNode } from "react-dom";
import useSSR from "use-ssr";

type HTMLElRef = MutableRefObject<HTMLElement>;
type CustomEvent = {
  event?: SyntheticEvent<any, Event>;
  portal: HTMLElRef;
  targetEl: HTMLElRef;
} & SyntheticEvent<any, Event>;

type CustomEventHandler = (customEvent: CustomEvent) => void;
type CustomEventHandlers = {
  [K in keyof DOMAttributes<K>]?: CustomEventHandler;
};

export type UsePortalOptions = {
  closeOnOutsideClick?: boolean;
  closeOnEsc?: boolean;
  bindTo?: HTMLElement; // attach the portal to this node in the DOM
  isOpen?: boolean;
  onOpen?: CustomEventHandler;
  onClose?: CustomEventHandler;
  onPortalClick?: CustomEventHandler;
} & CustomEventHandlers;

const errorMessage =
  "You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).";

const PortalWrapper = ({ children, onClose }) => {
  return (
    <div
      className="fixed inset-0 grid place-content-center bg-black/50 mix-blend-normal"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-lg bg-white p-8 dark:bg-grey-dark"
      >
        {children}
      </div>
    </div>
  );
};

export default function usePortal({
  closeOnOutsideClick = true,
  closeOnEsc = true,
  bindTo, // attach the portal to this node in the DOM
  isOpen: defaultIsOpen = false,
  onOpen,
  onClose,
  onPortalClick,
  ...eventHandlers
}: UsePortalOptions = {}): any {
  const { isServer, isBrowser } = useSSR();
  const [isOpen, makeOpen] = useState(defaultIsOpen);
  // we use this ref because `isOpen` is stale for handleOutsideMouseClick
  const open = useRef(isOpen);

  const setOpen = useCallback((v: boolean) => {
    // workaround to not have stale `isOpen` in the handleOutsideMouseClick
    open.current = v;
    makeOpen(v);
  }, []);

  const targetEl = useRef() as HTMLElRef; // this is the element you are clicking/hovering/whatever, to trigger opening the portal
  const portal = useRef(
    isBrowser ? document.createElement("div") : null
  ) as HTMLElRef;

  useEffect(() => {
    if (isBrowser && !portal.current)
      portal.current = document.createElement("div");
  }, [isBrowser, portal]);

  const elToMountTo = useMemo(() => {
    if (isServer) return;
    return (bindTo && findDOMNode(bindTo)) || document.body;
  }, [isServer, bindTo]);

  const createCustomEvent = (e: any) => {
    if (!e) return { portal, targetEl, event: e };
    const event = e || {};
    if (event.persist) event.persist();
    event.portal = portal;
    event.targetEl = targetEl;
    event.event = e;
    const { currentTarget } = e;
    if (!targetEl.current && currentTarget && currentTarget !== document)
      targetEl.current = event.currentTarget;
    return event;
  };

  // this should handle all eventHandlers like onClick, onMouseOver, etc. passed into the config
  const customEventHandlers: CustomEventHandlers = Object.entries(
    eventHandlers
  ).reduce<any>((acc, [handlerName, eventHandler]) => {
    acc[handlerName] = (event?: SyntheticEvent<any, Event>) => {
      if (isServer) return;
      eventHandler(createCustomEvent(event));
    };
    return acc;
  }, {});

  const openPortal = useCallback(
    (e: any) => {
      if (isServer) return;
      const customEvent = createCustomEvent(e);
      // for some reason, when we don't have the event argument, there
      // is a weird race condition. Would like to see if we can remove
      // setTimeout, but for now this works
      if (targetEl.current == null) {
        setTimeout(() => setOpen(true), 0);
        throw Error(errorMessage);
      }
      if (onOpen) onOpen(customEvent);
      setOpen(true);
    },
    [isServer, portal, setOpen, targetEl, onOpen]
  );

  const closePortal = useCallback(
    (e: any) => {
      if (isServer) return;
      const customEvent = createCustomEvent(e);
      if (onClose && open.current) onClose(customEvent);
      if (open.current) setOpen(false);
    },
    [isServer, onClose, setOpen]
  );

  const togglePortal = useCallback(
    (e: SyntheticEvent<any, Event>): void =>
      open.current ? closePortal(e) : openPortal(e),
    [closePortal, openPortal]
  );

  const handleKeydown = useCallback(
    (e: KeyboardEvent): void =>
      e.key === "Escape" && closeOnEsc ? closePortal(e) : undefined,
    [closeOnEsc, closePortal]
  );

  const handleOutsideMouseClick = useCallback(
    (e: MouseEvent): void => {
      if (isServer || !(portal.current instanceof HTMLElement)) return;

      const customEvent = createCustomEvent(e);
      if (onPortalClick) onPortalClick(customEvent);

      if (closeOnOutsideClick) closePortal(e);
    },
    [isServer, closePortal, closeOnOutsideClick, portal]
  );

  useEffect(() => {
    if (isServer) return;
    if (
      !(elToMountTo instanceof HTMLElement) ||
      !(portal.current instanceof HTMLElement)
    )
      return;

    const node = portal.current;
    elToMountTo.appendChild(portal.current);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      elToMountTo.removeChild(node);
    };
  }, [isServer, handleOutsideMouseClick, handleKeydown, elToMountTo, portal]);

  const Portal = useCallback(
    ({ children }: { children: ReactNode }) => {
      if (isOpen && portal.current != null)
        return createPortal(
          <PortalWrapper onClose={handleOutsideMouseClick}>
            {children}
          </PortalWrapper>,
          portal.current
        );
      return null;
    },
    [portal, isOpen]
  );

  return Object.assign(
    [
      openPortal,
      closePortal,
      open.current,
      Portal,
      togglePortal,
      targetEl,
      portal,
    ],
    {
      isOpen: open.current,
      openPortal,
      ref: targetEl,
      closePortal,
      togglePortal,
      Portal,
      portalRef: portal,
      ...customEventHandlers,
      bind: {
        // used if you want to spread all html attributes onto the target element
        ref: targetEl,
        ...customEventHandlers,
      },
    }
  );
}
