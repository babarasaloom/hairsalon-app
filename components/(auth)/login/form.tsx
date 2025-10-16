"use client";

import { useRef, startTransition, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { loginUser } from "@/actions/auth";
import { loginFormData } from "@/constants/auth";
import { LoginUserForm, loginUserFormSchema } from "@/validations/auth";
import InputValidated from "@/components/ui/input-validated";
import { SubmitButton } from "@/components/ui/buttons";

export default function LoginForm() {
  const initialState = { message: "", errors: {} };
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/dashboard";

  const loginUserWithRedirect = loginUser.bind(null, redirectPath);
  const [state, formAction, isPending] = useActionState(
    loginUserWithRedirect,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserForm>({
    resolver: zodResolver(loginUserFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      ref={formRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmit(() => {
          const formData = new FormData(formRef.current!);
          startTransition(() => formAction(formData));
        })(evt);
      }}
      className="flex flex-col items-center"
    >
      <div className="w-full mb-4">
        {loginFormData.map((data) => (
          <motion.div key={data.name} variants={inputVariants}>
            <InputValidated
              {...data}
              register={register}
              errors={errors}
              isPending={isPending}
              stateError={
                state?.errors
                  ? Object.fromEntries(
                      Object.entries(state.errors).map(([key, value]) => [
                        key,
                        Array.isArray(value) ? value[0] : value,
                      ])
                    )
                  : undefined
              }
            />
          </motion.div>
        ))}
      </div>

      <motion.div variants={inputVariants} className="w-full">
        <SubmitButton name="Login" isPending={isPending} />
      </motion.div>

      {/* Forgot Password */}
      <motion.div variants={inputVariants} className="text-center mb-4 mt-3">
        <button className="text-sm text-gray-500 underline">
          Forgot Password?
        </button>
      </motion.div>

      {/* Register link */}
      <motion.p
        variants={inputVariants}
        className="mt-2 text-sm text-gray-600 text-center"
      >
        Don’t have an account?{" "}
        <Link
          href={`/register?redirect=${redirectPath}`}
          className="text-yellow-500 font-medium hover:underline"
        >
          Sign Up
        </Link>
      </motion.p>
    </motion.form>
  );
}
