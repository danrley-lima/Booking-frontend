import { ReactNode } from "react";

interface SearchBarFieldProps {
  name: string;
  className?: string;
  icon?: ReactNode;
  type?: "text" | "date";
}

function SearchBarField({
  name,
  className,
  icon,
  type = "text",
}: SearchBarFieldProps) {
  return (
    <>
      <div className="flex flex-grow p-2">
        <label className="ml-3 flex items-center  font-medium text-gray-700">
          <span className="text-verde">{icon}</span>
          <p className="ml-1 text-gray-500">{name}</p>
        </label>
        <input
          type={type}
          className={
            `focus:ring-verde-500 ml-1 mt-1 block w-full rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-verde-hover` +
            ` ${className}`
          }
        />
      </div>
    </>
  );
}

export default SearchBarField;
