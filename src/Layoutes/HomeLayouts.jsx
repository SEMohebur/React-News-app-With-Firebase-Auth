import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Component/Header";
import LatestNews from "../Component/LatestNews";
import Navbar from "../Component/Navbar";
import LeftAside from "../Component/LeftAside";
import RightAside from "../Component/RightAside";
import LoadingPage from "../Pages/LoadingPage";
import Footer from "../Component/Footer";

const HomeLayouts = () => {
  const { state } = useNavigation();
  return (
    <div>
      {/*header/Nav*/}
      <header>
        <Header></Header>
        <section className=" w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className=" w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>
      {/*main section*/}
      <main className="w-11/12 mx-auto my-3 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left Sidebar */}
        <aside className="md:col-span-3 md:sticky md:top-0 md:h-fit order-1 md:order-1">
          <LeftAside />
        </aside>

        {/* Main Content */}
        <section className="md:col-span-6 order-2 md:order-2">
          {state === "loading" ? <LoadingPage /> : <Outlet />}
        </section>

        {/* Right Sidebar */}
        <aside className="md:col-span-3 md:sticky md:top-0 md:h-fit order-3">
          <RightAside />
        </aside>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayouts;
