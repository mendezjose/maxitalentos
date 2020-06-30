import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MyEditor from "./myEditor";
import { saveJob } from "../store/jobs";
import Footer from "./footer";

const Companies = () => {
  let [job, setJob] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(saveJob(job));
  };

  const updateCompany = (e) => {
    const j = job;
    j.company = e.currentTarget.value;
    setJob(j);
    console.log(job);
  };
  const updateTitle = (e) => {
    const j = job;
    j.title = e.currentTarget.value;
    setJob(j);
    console.log(job);
  };
  const updateType = (e) => {
    const j = job;
    j.jobType = e.currentTarget.value;
    setJob(j);
    console.log(job);
  };
  const updateCity = (e) => {
    const j = job;
    j.location = job.location || {};
    j.location.city = e.currentTarget.value;
    setJob(j);
    console.log(job);
  };
  const updateState = (e) => {
    const j = job;
    j.location = job.location || {};
    j.location.state = e.currentTarget.value;
    setJob(j);
    console.log(job);
  };
  const updateMin = (e) => {
    const j = job;
    j.salary = job.salary || {};
    j.salary.mini = e.currentTarget.value;
    setJob(j);
    console.log(job);
  };
  const updateMax = (e) => {
    const j = job;
    j.salary = job.salary || {};
    j.salary.maxi = e.currentTarget.value;
    setJob(j);
    console.log(job);
  };

  const updateDescription = (editorState) => {
    const j = job;
    j.description = editorState;
    setJob(j);
    console.log(job);
  };

  return (
    <React.Fragment>
      <div className="container my-5">
        <div className="text-center">
          <a class="navbar-brand logo" href="/">
            MaxiTalentos
          </a>
          <h4 class="mb-3">Publicar vacante</h4>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Nombre de la empresa</label>
          <input
            name="company"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=""
            onChange={(e) => updateCompany(e)}
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Título del empleo</label>
          <input
            name="title"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder=""
            onChange={(e) => updateTitle(e)}
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Tipo de empleo</label>
          <input
            name="type"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder=""
            onChange={(e) => updateType(e)}
          ></input>
        </div>
        <div class="form-group form-inline">
          <label for="exampleInputPassword1">Ciudad</label>
          <input
            name="city"
            type="text"
            class="form-control mx-3"
            id="exampleInputPassword1"
            placeholder=""
            onChange={(e) => updateCity(e)}
          ></input>
          <label for="exampleInputPassword1">Estado</label>
          <input
            type="text"
            class="form-control mx-3"
            id="exampleInputPassword1"
            placeholder=""
            onChange={(e) => updateState(e)}
          ></input>
        </div>
        <div class="form-group form-inline">
          <label for="exampleInputPassword1">Salario mínimo</label>
          <input
            type="text"
            class="form-control mx-3"
            id="exampleInputPassword1"
            placeholder=""
            onChange={(e) => updateMin(e)}
          ></input>
          <label for="exampleInputPassword1">Salario máximo</label>
          <input
            type="text"
            class="form-control mx-3"
            id="exampleInputPassword1"
            placeholder=""
            onChange={(e) => updateMax(e)}
          ></input>
        </div>
        <div id="my-editor" className="form-group">
          <MyEditor onChange={updateDescription} />
        </div>
        <div class="form-check mb-3">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            Acepto los téminos y condiciones
          </label>
        </div>
        <button onClick={handleSubmit} class="btn btn-primary">
          Publicar
        </button>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Companies;
