import React, { useEffect, useRef, useState, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  onClose?: (e) => void;
}

const Portal = ({ children, onClose }: PropsWithChildren<PortalProps>) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#myportal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
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
        </div>,
        ref.current
      )
    : null;
};

export default Portal;
