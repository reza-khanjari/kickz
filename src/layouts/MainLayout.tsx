import {  Outlet } from "react-router";
import Header from "./Header";
import BackToTop from "@/ui/BackToTop";

function MainLayout() {
  return (
    <>
      <BackToTop />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
