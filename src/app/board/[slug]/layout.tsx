import React from "react";

import Sidebar from "@/components/sidebar/Sidebar";

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
