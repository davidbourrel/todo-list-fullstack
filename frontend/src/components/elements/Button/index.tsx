import { forwardRef, ForwardRefRenderFunction, MouseEvent } from 'react';
import { ButtonProps } from './types';

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    className = '',
    border,
    disabled,
    headless,
    onClick,
    onDisabledClick,
    type,
    ...rest
  },
  ref
) => {
  const trueType = type as 'button' | 'submit' | 'reset' | undefined;

  const definitelyDisabled = disabled && !onDisabledClick ? true : false;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled && onDisabledClick) {
      onDisabledClick(e);
    } else if (!definitelyDisabled && onClick) {
      onClick(e);
    }
  };

  const buttonClassName = headless
    ? className
    : `relative rounded px-2 py-1 font-semibold transition border-2 ${
        border
          ? 'bg-transparent border-primary-400 text-primary-400 hover:bg-primary-700 hover:border-primary-700 hover:text-white'
          : 'bg-primary-700 border-transparent text-white hover:bg-primary-900'
      } ${
        definitelyDisabled ? 'pointer-events-none opacity-50' : 'cursor-pointer'
      } ${className}`;

  return (
    <button
      className={buttonClassName}
      onClick={handleClick}
      type={trueType}
      disabled={definitelyDisabled}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
};
export default forwardRef(Button);
