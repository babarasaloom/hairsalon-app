"use client";

import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  isPhoneNumber?: boolean;
  isPassword?: boolean;
  register: UseFormRegister<any>;
  Icon?: React.ComponentType<any>;
  errors?: Record<string, any>;
  stateError?: Record<string, string>;
  bgColour?: string;
  isPending?: boolean;
  isRequired?: boolean;
  min?: string;
  max?: string;
}

const InputValidated = ({
  type,
  label,
  name,
  placeholder,
  isPhoneNumber,
  isPassword,
  register,
  Icon,
  errors,
  stateError,
  bgColour = "bg-gray-50",
  isPending,
  isRequired,
  min,
  max,
}: InputProps) => {
  const disabledBgColour = "bg-gray-100";
  const [isShow, setIsShow] = useState(false);
  const [typeName, setTypeName] = useState(type);

  return (
    <div className="flex flex-col my-3 w-full">
      <div className="flex gap-1 items-center mb-1">
        <label className="font-mono text-gray-900 text-sm" htmlFor={name}>
          {label}
        </label>
        {isRequired && <span className="text-red-500">*</span>}
      </div>

      <div
        className={`flex items-center gap-2 px-4 rounded-xl ${
          isPending ? disabledBgColour : bgColour
        } overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-200`}
      >
        {Icon && <Icon size={18} className="text-gray-400" />}
        {isPhoneNumber && <div className="text-gray-500 text-sm">+27</div>}

        <input
          id={name}
          placeholder={placeholder}
          className="w-full h-10 bg-transparent border-none focus:outline-none text-gray-800 placeholder:text-gray-400"
          type={
            isPassword ? (isShow ? "text" : "password") : typeName || "text"
          }
          disabled={isPending}
          {...register(name)}
          min={min}
          max={max}
        />

        {isPassword &&
          (isShow ? (
            <EyeOff
              className="text-gray-400 cursor-pointer"
              onClick={() => setIsShow(false)}
            />
          ) : (
            <Eye
              className="text-gray-400 cursor-pointer"
              onClick={() => setIsShow(true)}
            />
          ))}
      </div>

      {/* Validation feedback */}
      {errors?.[name]?.message && (
        <span className="text-red-500 text-xs mt-1">
          {errors[name]?.message}
        </span>
      )}
      {stateError?.[name] && (
        <span className="text-red-500 text-xs mt-1">{stateError[name]}</span>
      )}
    </div>
  );
};

export default InputValidated;
