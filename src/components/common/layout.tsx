import React from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
    children?: React.ReactElement;
}

export default function Layout(props:LayoutProps) {
  return (
    <main>
      <Header />
      {props?.children}
      <Footer />
    </main>
  );
}