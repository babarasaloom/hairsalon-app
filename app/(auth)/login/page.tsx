import LoginHero from "@/components/(auth)/login/hero";
import LoginSheet from "@/components/(auth)/login/sheet";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="relative w-full md:w-[390px] h-screen md:h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl overflow-hidden">
        {/* Hero Background */}
        <LoginHero />

        {/* Login Form Sheet */}
        <LoginSheet />
      </div>
    </div>
  );
}
