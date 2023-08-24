import React from "react";

const TextInput = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  required,
  error,
  loading,
  disabled,
  autoComplete = "off",
}) => {
  const inputClassNames = `font-Poppins_regular mt-1 p-2 border rounded w-full ${
    error ? "border-red-500" : "border-gray-300"
  } ${disabled ? "opacity-50" : ""}`;

  return (
    <div className="mb-4">
      <label
        className="uppercase block text-sm font-Poppins_semiBold"
        htmlFor={name}
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClassNames}
        required={required}
        disabled={disabled || loading}
        name={name}
        id={name}
        aria-autocomplete="none"
        autoComplete={autoComplete}
        autoFocus="false"
      />
      {error && <p className="text-red-500 mt-1">{error}</p>}
      {loading && <p className="text-gray-500 mt-1">Loading...</p>}
    </div>
  );
};

export default TextInput;
