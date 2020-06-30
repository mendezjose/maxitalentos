import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Blog = (props) => {
  return (
    <React.Fragment>
      <Navbar {...props} />
      <div className="container">Blog</div>;
      <Footer />
    </React.Fragment>
  );
};

export default Blog;
