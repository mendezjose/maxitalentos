import React, { Component } from "react";
import SearchForm from "./searchForm";
import Results from "./results";
import Pagination from "./pagination";
import { loadJobs } from "../store/jobs";
import { connect } from "react-redux";

class SearchTool extends Component {
  state = {
    currentPage: 1,
    pageSize: 10,
  };

  componentDidMount() {
    this.props.loadJobs();
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <React.Fragment>
        <SearchForm onSearch={this.handleSearch} />
        {this.props.jobs.length > 1 && (
          <React.Fragment>
            <Results
              jobs={this.props.jobs}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              itemsCount={this.props.jobs.length}
            />
            <Pagination
              itemsCount={this.props.jobs.length}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  jobs: state.entities.jobs.list,
});

const mapDispatchToProps = (dispatch) => ({
  loadJobs: () => dispatch(loadJobs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchTool);
