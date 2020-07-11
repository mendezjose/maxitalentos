import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadJobs } from "../store/jobs";
import Results from "./results";
import PaginationAndFooter from "./paginationAndFooter";

const JobsContent = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    props.loadJobs(props.query);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="jobs mt-2">
      <div className="jobs-content">
        {props.jobs.length > 0 && (
          <React.Fragment>
            <Results
              query={props.query}
              jobs={props.jobs}
              pageSize={pageSize}
              currentPage={currentPage}
              itemsCount={props.jobs.length}
            />

            <PaginationAndFooter
              itemsCount={props.jobs.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.entities.jobs.list,
});

const mapDispatchToProps = (dispatch) => ({
  loadJobs: (query) => dispatch(loadJobs(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobsContent);
