import React from "react";

function TextInput({
  icon,
  placeHolder,
  width,
  type,
  label,
  onChange,
}: {
  icon?: React.ReactNode;
  placeHolder?: string;
  type?: React.HTMLInputTypeAttribute;
  width?: string;
  label?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <>
      <div className="label ">
        <span className="label-text text-primary text-2xl font-bold">
          {label}
        </span>
      </div>
      <label
        className={`input input-primary input-lg input-bordered -mt-7 flex ${
          icon ? "justify-between" : "justify-start"
        } items-center gap-2 border-2 w-[${width || "55rem"}]`}
      >
        <input
          onChange={(e) => (onChange ? onChange(e.target.value) : null)}
          type={type || "text"}
          className=" placeholder:font-bold placeholder:text-primary placeholder:text-xl  text-primary  font-bold text-xl w-full"
          placeholder={placeHolder}
        />
        {icon}
      </label>
    </>
  );
}

export default TextInput;
