import Header from "./Header";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
type LayoutPageProps = {
  children?: React.ReactNode;
  title?: any;
};
const LayoutChildren = ({ children, title }: LayoutPageProps) => {
  return (
    <>
      <HeaderTop />
      <Header />
      <title>{title || "Fashion Shop "}</title>
      {children}
      <Footer />
    </>
  );
};

export default LayoutChildren;
