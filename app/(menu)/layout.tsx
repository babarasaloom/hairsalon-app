import BottomNav from "@/components/ui/bottom-nav";
import { getSessionUser } from "@/data/user";
import { IUser } from "@/definitions/user";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = (await getSessionUser()) as IUser;

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        {children}
        <BottomNav user={user} />
      </div>
    </div>
  );
}
