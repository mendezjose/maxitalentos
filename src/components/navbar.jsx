import React, { Component } from "react";
import auth from "../services/authService";

class Navbar extends Component {
  state = {
    toggle: false,
  };

  activeLink = (link) => {
    return link.includes(this.props.location.pathname)
      ? "nav-item active"
      : "nav-item";
  };

  toggleMenu = () => {
    const t = this.state.toggle;
    this.setState({ toggle: !t });
  };

  toggleClass = () => {
    return this.state.toggle
      ? "navbar-collapse offcanvas-collapse open"
      : "navbar-collapse offcanvas-collapse";
  };

  render() {
    const currentUser = auth.getCurrentUser();

    return (
      <nav className="navbar navbar-expand-md fixd navbar-light">
        <a className="navbar-brand logo" href="/">
          MaxiTalentos
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="offcanvas"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={this.toggleClass()} id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className={this.activeLink(["/", "/empleos"])}>
              <a className="nav-link" href="/">
                Buscar empleo <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/empresas">
                Publicar vacante
              </a>
            </li>
            <li className={this.activeLink(["/blog"])}>
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
          </ul>
          <div className="navbar-nav">
            {!currentUser && (
              <a className="nav-link text-secondary outline" href="/usuario">
                Crea un CV
              </a>
            )}
            {!currentUser && (
              <a className="btn btn-outline-primary mt1-mob" href="/login">
                Iniciar sesión
              </a>
            )}
            {currentUser && (
              <div className="nav-item dropdown">
                <a
                  className="nav-link text-primary dropdown-toggle"
                  href="/usuario"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Cuenta de usuario
                </a>
                <div
                  className="dropdown-menu bg-light"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    className="dropdown-item border-bottom pb-2"
                    href="/usuario"
                  >
                    Mi cuenta
                  </a>
                  <a className="dropdown-item pt-2" href="/logout">
                    Cerrar sesión
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
