import React from "react";
import Navbar from "./navbar";
import SearchNavbar from "./searchNavbar";
import { useEffect } from "react";
import { getJob } from "../services/jobService";
import { useState } from "react";
import { convertFromRaw, EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";

const JobPost = (props) => {
  const [job, setJob] = useState();
  const [editorState, setEditorState] = useState();

  useEffect(() => {
    async function populate() {
      const { data } = await getJob(props.match.params.id);
      setJob(data);
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(data.description))
        )
      );
    }
    populate();
  }, []);

  return (
    <>
      <Navbar {...props} />
      <SearchNavbar />
      <div className="jobpost">
        <h3>{job && job.title}</h3>
        <ul className="jobdata">
          <li>{job && job.company}</li>
          <li>
            {job && job.location.state}, {job && job.location.state}
          </li>
          <li>
            {job && job.salary.mini} - {job && job.salary.maxi}
          </li>
          <li>{job && job.jobType}</li>
          {editorState && (
            <div>
              {ReactHtmlParser(
                draftToHtml(convertToRaw(editorState.getCurrentContent()))
              )}
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default JobPost;
