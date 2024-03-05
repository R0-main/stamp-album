import React from "react";

function Button({
  children,
  onClick,
  color,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  color ?: string
}) {
  return (
    <button
      className={`btn ${color ? color : 'btn-primary'} text-xl items-center p-5 h-full font-bold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
