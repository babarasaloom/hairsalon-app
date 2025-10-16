import RegisterHero from "@/components/(auth)/register/hero";
import RegisterSheet from "@/components/(auth)/register/sheet";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="relative w-full md:w-[390px] h-screen md:h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl overflow-hidden">
        {/* Hero Section */}
        <RegisterHero />

        {/* Register Sheet (form area) */}
        <RegisterSheet />
      </div>
    </div>
  );
}
