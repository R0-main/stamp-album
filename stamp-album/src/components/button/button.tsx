import React from "react";

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="btn btn-primary text-xl items-center p-5 h-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
