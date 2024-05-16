import React from "react";
import LayoutPage from "../../Components/Layout/Layout_Page";
import Blog from "../../Components/Blog/blog";
import Subblog from "../../Components/Blog/subBlog";

const blog = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <LayoutPage title="Fashion Shop | Blog">
        <Subblog />
        <Blog />
      </LayoutPage>
    </div>
  );
};

export default blog;
