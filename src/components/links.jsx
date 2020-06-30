import React, { Component } from "react";

class Links extends Component {
  state = {};
  render() {
    return (
      <div className="links">
        <div className="cta text-center py-5 py1-mob">
          <h5>
            <a className="link text-primary-custom" href="/usuario">
              Crea tu CV en línea
            </a>{" "}
            -
            <small className="block-mob">
              {" "}
              postulate a miles de vacantes con un 1 solo clic.
            </small>
          </h5>

          <h5>
            <a className="link text-primary-custom" href="/empresas">
              Publica una vacante
            </a>{" "}
            -
            <small className="block-mob">
              {" "}
              la opción mas efectiva para reclutar personal.
            </small>
          </h5>
        </div>

        <div className="trending border-top text-center py-5">
          <h5 className="mb-3">Los más buscados:</h5>
          <button type="button" className="btn btn-md btn-light m-1">
            Ingeniero industrial
          </button>
          <button type="button" className="btn btn-md btn-light m-1">
            Auxiliar administrativo
          </button>
          <button type="button" className="btn btn-md btn-light m-1">
            Psicología
          </button>
          <button type="button" className="btn btn-md btn-light m-1">
            Recepcionista
          </button>
          <button type="button" className="btn btn-md btn-light m-1">
            Arquitecto
          </button>
          <button type="button" className="btn btn-md btn-light m-1">
            Chofer
          </button>
          <button type="button" className="btn btn-md btn-light m-1">
            Ingeniero civil
          </button>
          <button type="button" className="btn btn-md btn-light m-1">
            Almacenista
          </button>
          <button type="button" className="btn btn-md btn-light m-1">
            Abogado
          </button>
          <button type="button" className="btn btn-md btn-light m-1">
            Capturista
          </button>
        </div>
      </div>
    );
  }
}

export default Links;
