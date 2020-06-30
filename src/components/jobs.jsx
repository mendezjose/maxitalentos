import React from "react";
import queryString from "query-string";
import JobsContent from "./jobsContent";
import SearchNavbar from "./searchNavbar";
import Navbar from "./navbar";
import Footer from "./footer";

const Jobs = (props) => {
  const query = queryString.parse(props.location.search);

  return (
    <React.Fragment>
      <Navbar {...props} />
      <SearchNavbar query={query} />
      <JobsContent query={query} />
    </React.Fragment>
  );
};

export default Jobs;
