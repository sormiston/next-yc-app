import Image from "next/image";
import React from "react";
import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import logo from "@public/yc-directory-logo.png";

async function Navbar() {
  const authUser = await auth();

  return (
    <header className="p-1 md:px-3 md:py-2 lg:px-5 lg:py-3 shadow-sm">
      <nav className="flex justify-between items-center font-semibold text-base md:text-xl select-none tracking-tight">
        <Link href="/">
          <Image
            src={logo}
            alt="YC Directory logo"
            priority={true}
            className="w-36"
          />
        </Link>

        {authUser?.user ? (
          <div className="flex items-center h-9 gap-3 md:gap-5 lg:gap-8">
            <Link href="/startup/create">Create</Link>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button className="text-primary" type="submit">
                Logout
              </button>
            </form>
            {/* TODO: this avatar must serve as link to /users/[userId] */}
            <Image
              src={authUser.user.image || ""}
              width={460}
              height={460}
              alt={`${authUser.user.name}'s Avatar`}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8og0AAbkA8QNU2M4AAAAASUVORK5CYII="
              className="w-8 h-8 lg:w-9 lg:h-9 rounded-full"
            />
          </div>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button type="submit">Login</button>
          </form>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
