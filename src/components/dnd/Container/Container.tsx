import React, { forwardRef } from "react";

import classNames from "classnames";

import { Handle, Remove } from "../Item";
import { Item } from "../MultipleContainers";

import styles from "./Container.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
  columns?: number;
  color?: string;
  items?: Item[];
  label?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  hover?: boolean;
  handleProps?: React.HTMLAttributes<any>;
  scrollable?: boolean;
  shadow?: boolean;
  placeholder?: boolean;
  unstyled?: boolean;
  onClick?(): void;
  onRemove?(): void;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      color,
      columns = 1,
      items = [],
      handleProps,
      horizontal,
      hover,
      onClick,
      onRemove,
      label,
      placeholder,
      style,
      scrollable,
      shadow,
      unstyled,
      ...props
    }: ContainerProps,
    ref
  ) => {
    const Component: any = onClick ? "button" : "div";

    return (
      <Component
        {...props}
        ref={ref}
        style={
          {
            ...style,
            "--columns": columns,
          } as React.CSSProperties
        }
        className={classNames(
          styles.Container,
          unstyled && styles.unstyled,
          horizontal && styles.horizontal,
          hover && "bg-grey-slight dark:bg-grey-sdark",
          placeholder && styles.placeholder,
          placeholder &&
            "column-gradiant dark:column-gradiant-dark border border-lines-light dark:border-lines-dark",
          scrollable && styles.scrollable,
          shadow && styles.shadow,
          "gap-8 rounded-lg p-2"
        )}
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
      >
        {label ? (
          <div className={styles.Header}>
            <div
              className={`flex items-center gap-2 before:aspect-square before:w-4 before:rounded-full before:bg-red-200 before:content-[''] ${color}`}
            >
              <span className="text-head-md uppercase text-grey-medium">{`${label} (${items.length})`}</span>
            </div>

            <div className={styles.Actions}>
              {onRemove ? <Remove onClick={onRemove} /> : undefined}
              <Handle {...handleProps} />
            </div>
          </div>
        ) : null}
        {placeholder ? children : <ul>{children}</ul>}
      </Component>
    );
  }
);

Container.displayName = "Container";
