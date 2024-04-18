import GoToTop from "../../Components/Common/GoToTop";
import HomePage from "../../Components/Home/HomePage";
import LayoutChildren from "../../Components/Layout/LayoutChildren";
const home = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <GoToTop />
      <LayoutChildren title="Fashion Shop | Home">
        <HomePage />
      </LayoutChildren>
    </div>
  );
};

export default home;
