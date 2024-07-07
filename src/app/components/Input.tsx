import React from "react";
import InputMask from "react-input-mask";

type InputProps = {
  id: string;
  name: string;
  label: string;
  type: "text" | "date" | "select" | "masked" | "email" | "number" | "text-area" | "password";
  value: string | number;
  onChange: (id: string, value: string) => void;
  options?: string[];
  mask?: string;
  style?: string;
};

function Input({
  id,
  name,
  label,
  type,
  value,
  onChange,
  options,
  mask,
  style,
}: InputProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    onChange(id, e.target.value);
  };

  const inputStyle =
    "pl-3 h-9 w-full rounded-lg border border-gray-700 text-base font-medium focus:border-azul focus:outline-none sm:text-sm";

  if (type === "masked" && mask) {
    return (
      <div className="mb-1">
        <label
          htmlFor={id}
          className="text mb-1 block font-semibold text-preto"
        >
          {label}
        </label>
        <InputMask
          mask={mask}
          value={value}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>
    );
  }

  if (type == "text-area"){
    return(
      <div className="mb-1">
        <label htmlFor={id} className="text mb-1 block font-semibold text-preto">
          {label}
        </label>
        <textarea
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            className={style ?? inputStyle}
          />
      </div>
    )
  }

  return (
    <div className="mb-1">
      <label htmlFor={id} className="text mb-1 block font-semibold text-preto">
        {label}
      </label>
      {type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-700 py-2 pl-3 pr-10 text-base font-medium focus:outline-none"
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          className={style ?? inputStyle}
        />
      )}
    </div>
  );
}

export default Input;
