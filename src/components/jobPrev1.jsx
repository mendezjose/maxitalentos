import React from "react";
import { convertFromRaw, EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";

const JobPrev = (props) => {
  const editorState =
    props.currentJob.description &&
    EditorState.createWithContent(
      convertFromRaw(JSON.parse(props.currentJob.description))
    );

  return (
    <div className="stick">
      <div className="inner">
        {props.currentJob.description && (
          <div>
            {ReactHtmlParser(
              draftToHtml(convertToRaw(editorState.getCurrentContent()))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPrev;
