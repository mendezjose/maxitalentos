import React from "react";
import { convertFromRaw, EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-jam/close";

const emptyJob = {};

const JobPrev = (props) => {
  const editorState =
    props.currentJob.description &&
    EditorState.createWithContent(
      convertFromRaw(JSON.parse(props.currentJob.description))
    );

  return (
    <div className="jobprev col-md-7 pr-0" id="jobprev">
      <div className="jobprev-card-wrapper rounded col-md-12">
        {props.currentJob.description && (
          <div className="jobprev-card border rounded">
            <div className="jobprev-header p-3 rounded">
              <div className="job-title">
                <h3>{props.currentJob.title}</h3>
              </div>
              <div className="job-x">
                <Icon
                  className="close-icon clickable"
                  icon={closeIcon}
                  onClick={() => props.handleJobSelected(emptyJob)}
                />
              </div>
            </div>
            <div className="jobprev-card-content p-3">
              {ReactHtmlParser(
                draftToHtml(convertToRaw(editorState.getCurrentContent()))
              )}
            </div>
          </div>
        )}

        {!props.currentJob.description && (
          <div className="jobprev-card">
            <div className="col-md-7 border rounded p-2">
              <p className="px-2 pt-1">
                <small>
                  Recibe gratis en tu email nuevos empleos para esta búsqueda
                </small>
              </p>
              <div className="form-group px-2">
                <label htmlFor="">
                  <small>Correo electrónico</small>
                </label>
                <input className="form-control" placeholder="" type="text" />
                <button className="btn btn-primary btn-sm my-3">Activar</button>
                <p>
                  <small>
                    Al crear una alerta de empleo o al recibir empleos
                    recomendados, aceptas nuestros términos. Puedes modificar la
                    configuración de tu consentimiento en cualquier momento
                    cancelando tu suscripción o según se indica en las
                    condiciones.
                  </small>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPrev;
