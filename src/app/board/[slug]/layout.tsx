import Sidebar from "@/components/Sidebar";
import React from "react";

export default async function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-height flex">
      <Sidebar />
      {children}
    </div>
  );
}
