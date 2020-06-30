import React from "react";

const SearchNavbar = () => {
  return (
    <nav className="search-navbar navbar navbar-light">
      <form className="form-inline mb-2">
        <div className="row m-0">
          <div className="form-group col-sm-5 p-0">
            <label
              className="col-form-label-md  mr-2 font-weight-bold"
              htmlFor="what"
            >
              ¿Qué?
            </label>
            <input
              id="what"
              className="form-control mr-sm-2"
              type="search"
              placeholder="Puesto o palabra clave"
              aria-label="Search"
            ></input>
          </div>
          <div className="form-group col-sm-5 p-0">
            <label
              className="col-form-label-md  mr-2 font-weight-bold"
              htmlFor="where"
            >
              ¿Dónde?
            </label>
            <input
              id="where"
              className="form-control mr-sm-2"
              type="search"
              placeholder="Ciudad o estado"
              aria-label="Search"
            ></input>
          </div>
          <div className="form-group col-sm-2 p-0 d-flex">
            <button
              className="btn btn-outline-light bg-primary align-self-end btn-block"
              type="submit"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </nav>
  );
};

export default SearchNavbar;
