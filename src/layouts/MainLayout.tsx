import {  Outlet, ScrollRestoration } from "react-router";
import Header from "./Header";
import BackToTop from "@/ui/BackToTop";


function MainLayout() {
  return (
    <>
      <BackToTop />
      <ScrollRestoration />
      <Header />
      <main>
       
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
