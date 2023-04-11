import React, { useEffect } from "react";

import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import type { Transform } from "@dnd-kit/utilities";
import classNames from "classnames";

import { Item } from "../MultipleContainers";

import { Handle, Remove } from "./components";

import styles from "./Item.module.scss";

export interface TaskItemProps {
  dragOverlay?: boolean;
  color?: string;
  disabled?: boolean;
  dragging?: boolean;
  handle?: boolean;
  handleProps?: any;
  index?: number;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  transition?: string | null;
  value: Item;
  onRemove?(): void;
}

export const TaskItem = React.memo(
  React.forwardRef<HTMLLIElement, TaskItemProps>(
    (
      {
        color,
        dragOverlay,
        dragging,
        disabled,
        fadeIn,
        handle,
        handleProps,
        index,
        listeners,
        onRemove,
        sorting,
        transition,
        transform,
        value,
        ...props
      },
      ref
    ) => {
      useEffect(() => {
        if (!dragOverlay) {
          return;
        }

        document.body.style.cursor = "grabbing";

        return () => {
          document.body.style.cursor = "";
        };
      }, [dragOverlay]);

      const completeSubstasks = value.subtasks.reduce(
        (acc: number, current) => {
          if (current.isCompleted) return acc + 1;
          else return acc;
        },
        0
      );

      return (
        <li
          className={classNames(
            styles.Wrapper,
            fadeIn && styles.fadeIn,
            sorting && styles.sorting,
            dragOverlay && styles.dragOverlay
          )}
          style={
            {
              transition: [transition].filter(Boolean).join(", "),
              "--translate-x": transform
                ? `${Math.round(transform.x)}px`
                : undefined,
              "--translate-y": transform
                ? `${Math.round(transform.y)}px`
                : undefined,
              "--scale-x": transform?.scaleX
                ? `${transform.scaleX}`
                : undefined,
              "--scale-y": transform?.scaleY
                ? `${transform.scaleY}`
                : undefined,
              "--index": index,
            } as React.CSSProperties
          }
          ref={ref}
        >
          <div
            className={classNames(
              styles.Item,
              dragging && styles.dragging,
              handle && styles.withHandle,
              dragOverlay && styles.dragOverlay,
              disabled && styles.disabled,
              color &&
                `before:absolute before:inset-0 before:w-[3px] before:rounded-l-lg before:content-[''] ${color}`,
              "bg-white dark:bg-grey-dark",
              "group"
            )}
            data-cypress="draggable-item"
            {...(!handle ? listeners : undefined)}
            {...props}
            tabIndex={!handle ? 0 : undefined}
          >
            <div className="grid gap-1">
              <span className="text-head-md text-black group-hover:text-purple dark:text-white">
                {`${value.title}`}
              </span>
              <span className="text-grey-medium">{`${completeSubstasks} of ${value.subtasks.length} subtasks`}</span>
            </div>

            <span className="-mb-[15px] -mr-[10px] -mt-[12px] flex self-start">
              {onRemove ? (
                <Remove
                  className="invisible group-hover:visible"
                  onClick={onRemove}
                />
              ) : null}
              {handle ? <Handle {...handleProps} {...listeners} /> : null}
            </span>
          </div>
        </li>
      );
    }
  )
);
