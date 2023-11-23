import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body/body";

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
