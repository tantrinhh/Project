import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopFooter from "./TopFooter";
type LayoutPageProps = {
  children?: React.ReactNode;
  title?: any;
};
const LayoutPage = ({ children, title }: LayoutPageProps) => {
  return (
    <>
      <Header />
      <title>{title || "Fashion Shop "}</title>

      {children}
      <TopFooter />
      <Footer />
    </>
  );
};

export default LayoutPage;
