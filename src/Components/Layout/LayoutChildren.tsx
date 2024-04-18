import Header from "./Header";
import Footer from "./Footer";
type LayoutPageProps = {
  children?: React.ReactNode;
  title?: any;
  image?: any;
};
const LayoutChildren = ({ children, title, image }: LayoutPageProps) => {
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
