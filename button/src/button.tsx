import * as React from 'react';
import { type VariantProps, cva } from 'cva';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import styles from './button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva({
  base: styles.button,
  variants: {
    variant: {
      default: styles.primary,
      outline: styles.outline,
      secondary: styles.secondary,
    },
    size: {
      default: styles.sizeDefault,
      sm: styles.sizeSm,
      lg: styles.sizeLg,
      icon: styles.sizeIcon,
    },
    isDisabled: {
      true: styles.disabled,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
