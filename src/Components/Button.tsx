// import { FC, ReactNode, MouseEventHandler } from 'react';

// interface ButtonProps {
//   onClick: MouseEventHandler<HTMLButtonElement>;
//   children: ReactNode;
//   className?: string;
// }

// const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`w-full h-12 ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;


// Button.tsx

// import  { FC, ReactNode, MouseEventHandler } from 'react';

// interface ButtonProps {
//   onClick: MouseEventHandler<HTMLButtonElement>;
//   children: ReactNode;
//   className?: string;
// }

// const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`w-full md:w-auto h-12 md:h-auto ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;



// Button.tsx

import  { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary'; // Add more variants as needed
}

const Button: FC<ButtonProps> = ({ variant = 'default', children, ...props }) => {
  const getButtonStyle = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white rounded-sm border border-blue-500';
      case 'secondary':
        return 'focus:bg-gray-400 text-black rounded-sm border border-gray-300';
      default:
        return 'bg-green-300 hover:bg-green-400 focus:bg-green-400 text-black rounded-sm border border-green-400';
    }
  };

  return (
    <button {...props} className={`block py-[6px] 2xl:py-3 w-full ${getButtonStyle()}`}>
      {children}
    </button>
  );
};

export default Button;
