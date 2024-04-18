import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopFooter from "./TopFooter";
import Logo from "../../assets/Logo.png";
type LayoutPageProps = {
  children?: React.ReactNode;
  title?: any;
  image?: any;
};
const LayoutPage = ({ children, title, image }: LayoutPageProps) => {
  return (
    <>
      <Header />
      <title>{title || "Fashion Shop "}</title>
      <link rel="icon" href="../../assets/Logo.png" />
      {children}
      <TopFooter />
      <Footer />
    </>
  );
};

export default LayoutPage;
