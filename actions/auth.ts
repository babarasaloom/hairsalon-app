"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import {
  AcccountState,
  loginUserFormSchema,
  LoginUserState,
  registerUserFormSchema,
  updateAccountformSchema,
} from "@/validations/auth";
import { getUser, isUserExists } from "@/data/user"; // You can adjust based on your actual helper locations.
import { createSession, deleteSession } from "@/lib/session";
import { createUser, updateUser } from "@/services/user";
import { revalidatePath } from "next/cache";

export interface RegisterUserState {
  message?: string;
  errors?: Record<string, string[]>;
}

export async function registerUser(
  pathname: string,
  prevState: RegisterUserState | undefined,
  formData: FormData
): Promise<RegisterUserState> {
  const validatedFields = registerUserFormSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Oops, there’s an issue with your inputs.",
    };
  }

  const { name, email, password, contactNumber } = validatedFields.data;

  // Check if user exists by email
  try {
    const emailExists = await isUserExists({ email });
    if (emailExists) {
      return {
        errors: { email: ["Email already exists."] },
      };
    }
  } catch (err) {
    throw new Error("Error checking email: " + err);
  }

  // Check if user exists by contact number
  try {
    const numberExists = await isUserExists({ contactNumber });
    if (numberExists) {
      return {
        errors: { contactNumber: ["Contact number already exists."] },
      };
    }
  } catch (err) {
    throw new Error("Error checking contact number: " + err);
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await createUser(name, email, hashedPassword, contactNumber);
    await createSession(user.id);
  } catch (err) {
    throw new Error("Error creating user: " + err);
  }

  redirect(pathname);
}

export async function loginUser(
  pathname: string,
  prevState: LoginUserState | undefined,
  formData: FormData
) {
  const validatedFields = loginUserFormSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    const state: LoginUserState = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Oops, I think there's a mistake with your inputs.",
    };
    return state;
  }

  const { email, password } = validatedFields.data;

  try {
    const user = await getUser({ email });
    if (!user) {
      const state: LoginUserState = {
        errors: { email: ["User does not exists"] },
      };
      return state;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const state: LoginUserState = {
        errors: { password: ["Incorrect password"] },
      };
      return state;
    }

    await createSession(user.id);
  } catch (error) {
    console.error("Error: fetching Something went Wrong:", error);
  }

  redirect(pathname);
}

export async function logoutSessionUser() {
  await deleteSession();
  redirect("/services");
}

export async function updateAccountDetails(
  prevState: AcccountState | undefined,
  formData: FormData
) {
  const validatedFields = updateAccountformSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    const state: AcccountState = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Oops, I think there's a mistake with your inputs.",
    };
    return state;
  }

  const { name, email, contactNumber } = validatedFields.data;

  try {
    await updateUser({ name, email, contactNumber });
  } catch (error) {
    throw new Error("Error creating user:" + error);
  }

  revalidatePath("/profile/account");
}

export async function updateProfile(data: {
  name: string;
  email: string;
  contactNumber?: string | undefined;
}) {
  try {
    await updateUser(data);
  } catch (error) {
    throw new Error("Error creating user:" + error);
  }
}
