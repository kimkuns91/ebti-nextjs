import { cn } from '@/utils/style';
import { ComponentPropsWithoutRef, ElementType, createElement } from 'react';
import { IconType } from 'react-icons';

type IconButtonProps<Component extends ElementType> =
  ComponentPropsWithoutRef<Component> & {
    icon: IconType;
    component?: Component;
    className?: string;
    iconClassName?: string;
  };

const IconButton = <Component extends ElementType = 'button'>({
  icon,
  component,
  className,
  iconClassName,
  ...props
}: IconButtonProps<Component>) => {
  return createElement(
    component ?? 'button',
    {
      className: cn('p-1.5 lg:p-2', className),
      ...props,
    },
    createElement(icon, {
      className: cn('size-5 transition-all lg:size-6', iconClassName),
    }),
  );
};

export default IconButton;
