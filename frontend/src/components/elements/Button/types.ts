import { PropsWithChildren, HTMLProps } from 'react';

export interface ButtonProps
  extends PropsWithChildren,
    Omit<HTMLProps<HTMLButtonElement>, 'ref'> {
  border?: boolean;
  headless?: boolean;
  onDisabledClick?: HTMLProps<HTMLButtonElement>['onClick'];
}
