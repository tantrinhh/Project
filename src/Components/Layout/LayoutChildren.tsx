import Header from "./Header";
import Footer from "./Footer";
type LayoutPageProps = {
  children?: React.ReactNode;
  title?: any;
};
const LayoutChildren = ({ children, title }: LayoutPageProps) => {
  return (
    <>
      <Header />
      <title>{title || "Fashion Shop "}</title>
      {children}
      <Footer />
    </>
  );
};

export default LayoutChildren;
