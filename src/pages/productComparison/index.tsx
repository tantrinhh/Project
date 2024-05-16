import ProductComparison from "../../Components/ProductComparison/ProductComparison";
import LayoutPage from "../../Components/Layout/Layout_Page";

const productComparison = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <LayoutPage title="Fashion Shop | Comparison">
        <ProductComparison />
      </LayoutPage>
    </div>
  );
};

export default productComparison;
