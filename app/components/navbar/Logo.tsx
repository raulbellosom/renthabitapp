"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center gap-2 cursor-pointer"
    >
      <Image alt="logo" height="40" width="40" src="/images/icon.png" />
      <p className="hidden md:block text-lg font-bold text-rha_primary_dark">
        Renthabitapp
      </p>
    </div>
  );
};

export default Logo;
