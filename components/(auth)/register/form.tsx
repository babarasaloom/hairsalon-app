"use client";

import { registerUser } from "@/actions/auth";
import { SubmitButton } from "@/components/ui/buttons";
import InputValidated from "@/components/ui/input-validated";
import { registerFormData } from "@/constants/auth";
import { RegisterUserForm, registerUserFormSchema } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { startTransition, useActionState, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function RegisterForm() {
  const initialState = { message: "", errors: {} };
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/services";
  const registerUserWithPathname = registerUser.bind(null, redirectPath);
  const [state, formAction, isPending] = useActionState(
    registerUserWithPathname,
    initialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserForm>({
    resolver: zodResolver(registerUserFormSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  // Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
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
        {registerFormData.map((data) => (
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
        <SubmitButton name="Sign Up" isPending={isPending} />
      </motion.div>

      <motion.p variants={inputVariants} className="mt-5 text-sm text-gray-700">
        Already have an account?{" "}
        <Link
          className="text-yellow-500 decoration-2 hover:underline focus:outline-none font-medium"
          href={`/login?redirect=${redirectPath}`}
        >
          Log in here
        </Link>
      </motion.p>
    </motion.form>
  );
}
