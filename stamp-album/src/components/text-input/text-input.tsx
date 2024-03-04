import React from "react";

function TextInput({
  icon,
  placeHolder,
  width,
  type,
  onChange,
}: {
  icon?: React.ReactNode;
  placeHolder?: string;
  type ?: React.HTMLInputTypeAttribute,
  width ?: string
  onChange?: (value: string) => void;
}) {
  return (
    <label
      className={`input input-primary input-lg input-bordered flex ${
        icon ? "justify-between" : "justify-start"
      } items-center gap-2 border-2 w-[${width || '55rem'}]`}
    >
      <input
        onChange={(e) => (onChange ? onChange(e.target.value) : null)}
        type={type || "text"}
        className=" placeholder:font-bold placeholder:text-primary placeholder:text-xl  text-primary  font-bold text-lg w-full"
        placeholder={placeHolder}
      />
      {icon}
    </label>
  );
}

export default TextInput;
