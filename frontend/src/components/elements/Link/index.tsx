import NextLink from 'next/link';
import { LinkWithProps } from './types';
import useIsClient from 'src/hooks/useIsClient';

/**
 * use this component rather than next/link
 */
const Link = ({
  obfuscate,
  isLoading = false,
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  target,
  className = '',
  ...props
}: LinkWithProps) => {
  const isClient = useIsClient();

  return !obfuscate || isClient ? (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
      tabIndex={0}
      target={target}
      role='link'
      className={className}
      {...props}
    >
      {children}
    </NextLink>
  ) : (
    <span {...props} className={className}>
      {children}
    </span>
  );
};
export default Link;
