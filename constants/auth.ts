import { Key, User } from "lucide-react";

export const CLIENT = "client";
export const CREDENTIALS = "credentials";
export const registerFormData = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "E.g John Doe",
    Icon: User,
    bgColour: "bg-gray-50",
    isRequired: true,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "E.g johndoe@gmail.com",
    Icon: User,
    bgColour: "bg-gray-50",
    isRequired: true,
  },
  {
    name: "contactNumber",
    label: "Phone Number (WhatsApp)",
    placeholder: "E.g 0677123123123",
    bgColour: "bg-gray-50",
    isPhoneNumber: true,
    isRequired: true,
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
    Icon: Key,
    bgColour: "bg-gray-50",
    isRequired: true,
    isPassword: true,
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirm Password",
    Icon: Key,
    bgColour: "bg-gray-50",
    isRequired: true,
    isPassword: true,
  },
];

export const accountFormData = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "E.g John Doe",
    Icon: User,
    bgColour: "bg-gray-50",
    isRequired: true,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "E.g johndoe@gmail.com",
    Icon: User,
    bgColour: "bg-gray-50",
    isRequired: true,
  },
  {
    name: "contactNumber",
    label: "Phone Number (WhatsApp)",
    placeholder: "E.g 0677123123123",
    bgColour: "bg-gray-50",
    isPhoneNumber: true,
    isRequired: true,
  },
];

export const loginFormData = [
  {
    name: "email",
    label: "Email",
    placeholder: "E.g johndoe@gmail.com",
    Icon: User,
    bgColour: "bg-gray-50",
    isRequired: true,
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
    Icon: Key,
    bgColour: "bg-gray-50",
    isRequired: true,
    isPassword: true,
  },
];

export const passwordResetFormData = [
  {
    name: "currentPassword",
    label: "Current Password",
    placeholder: "Enter your current password",
    type: "password",
    Icon: User,
    bgColour: "bg-white",
    isPassword: true,
    isRequired: true,
  },
  {
    name: "newPassword",
    label: "New Password",
    placeholder: "Enter your new password",
    type: "password",
    Icon: User,
    bgColour: "bg-white",
    isPassword: true,
    isRequired: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm your new password",
    type: "password",
    Icon: User,
    bgColour: "bg-white",
    isPassword: true,
    isRequired: true,
  },
];

export const editProfileFormData = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "E.g John Doe",
    Icon: User,
    bgColour: "bg-gray-50",
    isRequired: true,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "E.g johndoe@gmail.com",
    Icon: User,
    bgColour: "bg-gray-50",
    isRequired: true,
  },
  {
    name: "contactNumber",
    label: "Phone Number (WhatsApp)",
    placeholder: "E.g 0677123123123",
    bgColour: "bg-gray-50",
    isPhoneNumber: true,
    isRequired: true,
  },
];
