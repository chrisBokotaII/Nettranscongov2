import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseStyles = "px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm";
  
  const variants = {
    primary: "bg-blue-700 hover:bg-blue-800 text-white border border-transparent",
    secondary: "bg-yellow-500 hover:bg-yellow-600 text-slate-900 border border-transparent",
    outline: "bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-blue-300",
    danger: "bg-red-600 hover:bg-red-700 text-white border border-transparent"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};