"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import lightLogo from "@public/yc-directory-logo.png";
import darkLogo from "@public/yc-directory-logo-dark.png";

function ResponsiveLogo() {
  const { resolvedTheme } = useTheme();

  return (
    <Link href="/">
      <Image
        src={resolvedTheme === "dark" ? darkLogo : lightLogo}
        alt="YC Directory logo"
        priority={true}
        className="w-36"
      />
    </Link>
  );
}

export default ResponsiveLogo;
