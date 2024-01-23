import { cn } from '@/utils/style';
import { ComponentPropsWithoutRef, FC } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={cn(
        'w-full rounded-md text-md px-5 py-3 bg-gray-800 text-white transition-all hover:bg-gray-900',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
