import React, { Component } from "react";

class SearchForm extends Component {
  state = {};
  render() {
    return (
      <div className="search-form form-group mt-4">
        <form method="get" action="/empleos">
          <div className="row pt-4 pb-2 pt0-mob">
            <div className="col-md-5">
              <label
                className="col-form-label-lg font-weight-bold main-label"
                htmlFor="what"
              >
                Empleo{" "}
                <small className="text-secondary">
                  {" "}
                  ( Ej. Diseñador gráfico. )
                </small>
              </label>
              <input
                type="text"
                name="q"
                className="form-control form-control-lg search-input"
                id="what"
                placeholder="Puesto o palabra clave"
              ></input>
            </div>
            <div className="col-md-5 mb-4 mt1-mob">
              <label
                className="col-form-label-lg font-weight-bold main-label"
                htmlFor="where"
              >
                Lugar{" "}
                <small className="text-secondary ">
                  {" "}
                  ( Ej. Guadalajara, Jal. )
                </small>
              </label>

              <input
                type="text"
                name="l"
                className="form-control form-control-lg search-input"
                id="where"
                placeholder="Ciudad o estado"
              ></input>
            </div>

            <div className="col-md-2 mb-4 d-flex">
              <button className="btn btn-primary btn-primary-custom btn-lg btn-block align-self-end">
                Buscar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
