import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <div class="fixed inset-0 h-full w-full z-[-1] bg-slate-950">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <div>
        <div className="min-h-screen container mx-auto">
          <Header/>
          <Outlet/>
        </div>
        <footer>
          <div className="p-10 text-center items-center bg-slate-700">
            Made with curiosity!
          </div>
        </footer>
      </div>
    </>
  );
}

export default AppLayout;
