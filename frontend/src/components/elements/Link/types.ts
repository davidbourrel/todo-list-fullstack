import { HTMLProps, PropsWithChildren } from 'react';
import { LinkProps } from 'next/link';

export interface LinkWithProps
  extends PropsWithChildren,
    Omit<
      HTMLProps<HTMLAnchorElement>,
      'href' | 'as' | 'onClick' | 'onMouseEnter' | 'onTouchStart' | 'ref'
    >,
    LinkProps {
  obfuscate?: boolean;
  isLoading?: boolean;
}
