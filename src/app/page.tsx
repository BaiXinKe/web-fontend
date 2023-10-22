"use client";

import NavBar from "@/components/page/navbar";
import Search from "@/components/page/search";
import TeamSwitcher from "@/components/page/team-switcher";
import UserCard from "@/components/page/user-card";
import UserNav from "@/components/page/user-nav";
import { cn } from "@/lib/utils";
import React from "react";

const CardContainer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
};

export default function Home() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <NavBar className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
          <div className="col-span-1 grid items-start gap-6 lg:col-span-1 fixed">
            <UserCard />
          </div>
        </div>
      </div>
    </>
  );
}
