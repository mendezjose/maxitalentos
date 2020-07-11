import React, { Component } from "react";
import ReactDOM from "react-dom";
import Moment from "moment";
import _ from "lodash";
import JobPrev from "./jobPrev";
import { convertFromRaw, EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";

class Results extends Component {
  state = {
    currentJob: {},
  };

  comp = () => {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();

    console.log(rect);
  };

  excerpt = (description) => {
    let prev = draftToHtml(
      convertToRaw(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(description))
        ).getCurrentContent()
      )
    )
      .split(/\s+/)
      .slice(0, 50);

    const len = prev.length;
    prev = prev.join(" ");
    prev += len < 50 ? "" : "...";

    return ReactHtmlParser(prev);
  };

  handleJobSelected = (currentJob) => {
    this.setState({ currentJob });
  };

  publishDate = (date) => {
    const x = Moment().diff(Moment(date), "days");
    return x;
  };

  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
  };

  getCardClass = (job) => {
    return job._id === this.state.currentJob._id
      ? "job-card col-md-12 p-4 mb-3 border border-primary rounded"
      : "job-card col-md-12 p-4 mb-3 border rounded";
  };

  render() {
    const { currentPage, pageSize } = this.props;
    // const pagesCount = Math.ceil(itemsCount / pageSize);
    const jobs = this.paginate(this.props.jobs, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="container-fluid ">
          <div className="row">
            <div className="jobs-list col-md-5 p-0">
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className={this.getCardClass(job)}
                  onClick={() => this.handleJobSelected(job)}
                >
                  <h5>
                    <a href={`/empleos/${job._id}`}>{job.title}</a>
                    <small className=" ml-1">
                      {"("}
                      {job.location.city}
                      {job.location.state && ", " + job.location.state}
                      {")"}
                    </small>
                  </h5>
                  <h6 className="mb-0 text-secondary font-weight-normal">
                    {job.company.name}
                    <span className="m-2">-</span>
                    {job.jobType}
                    <span className="m-2">-</span>
                    $12,000 - $15,000
                  </h6>
                  <div className="card-text mt-3">
                    {this.excerpt(job.description)}
                  </div>
                </div>
              ))}
            </div>

            <JobPrev
              currentJob={this.state.currentJob}
              handleJobSelected={this.handleJobSelected}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Results;
