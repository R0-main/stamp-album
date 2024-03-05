import React, { useState } from "react";
import Button from "../button/button";
import { copyToClipboard } from "../../utils/copy-to-clipboard";

function TextInput({
  icon,
  placeHolder,
  width,
  type,
  label,
  defaultValue,
  copyButton,
  onChange,
}: {
  icon?: React.ReactNode;
  placeHolder?: string;
  type?: React.HTMLInputTypeAttribute;
  width?: string;
  label?: string;
  defaultValue?: string;
  copyButton?: boolean;
  onChange: (value: string) => void;
}) {
  const [text, setText] = useState(defaultValue || "");

  return (
    <>
      {label && (
        <>
          <div className={`label w-[${width || "55rem"}]`}>
            <span className="label-text text-primary text-2xl font-bold">
              {label}
            </span>
            {copyButton && (
              <Button onClick={() => copyToClipboard(text)}>Copier</Button>
            )}
          </div>
        </>
      )}

      <label
        className={`input input-primary input-lg input-bordered -mt-7 flex ${
          icon ? "justify-between" : "justify-start"
        } items-center gap-2 border-2 w-[${width || "55rem"}]`}
      >
        <input
          onChange={(e) => {
            onChange(e.target.value);
            setText(e.target.value);
          }}
          type={type || "text"}
          defaultValue={defaultValue}
          className=" placeholder:font-bold placeholder:text-primary placeholder:text-xl  text-primary  font-bold text-xl w-full"
          placeholder={placeHolder}
        />
        {icon}
      </label>
    </>
  );
}

export default TextInput;
