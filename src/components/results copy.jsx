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

  render() {
    const { currentPage, itemsCount, pageSize, query } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const jobs = this.paginate(this.props.jobs, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="results-bar" onClick={this.comp}>
          <p>
            {this.props.jobs.length} Empleos de {query.q}
            <span className="m-2 font-weight-normal">-</span> Página{" "}
            {currentPage} de {pagesCount}
          </p>
        </div>
        <div>
          <div className="results">
            {jobs.map((job) => (
              <div
                class="card jobcard border-gray mb-3"
                onClick={() => this.handleJobSelected(job)}
              >
                <div class="card-body">
                  <p className="mb-1">
                    <h5 class="card-title text-primary-custom mb-1">
                      {job.title}{" "}
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
                  </p>

                  <p class="card-text">{this.excerpt(job.description)}</p>
                  <p className="text-secondary mb-0">
                    <small>
                      Publicada hace {this.publishDate(job.date)} día(s)
                    </small>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <JobPrev currentJob={this.state.currentJob} />
          <div style={{ clear: "both" }}></div>
        </div>
      </React.Fragment>
    );
  }
}
export default Results;
