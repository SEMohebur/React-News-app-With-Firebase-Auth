import React from "react";
import { Outlet } from "react-router";
import Header from "../Component/Header";
import LatestNews from "../Component/LatestNews";
import Navbar from "../Component/Navbar";
import LeftAside from "../Component/LeftAside";
import RightAside from "../Component/RightAside";

const HomeLayouts = () => {
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
      <main className=" w-11/12 mx-auto my-3  grid grid-cols-12">
        <aside className=" col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className=" col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
