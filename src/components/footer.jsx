import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="text-secondary">
        © 2020 MaxiTalentos <br></br>
        <a className="link-custom" href="/aviso-de-privacidad">
          Aviso de Privacidad
        </a>
        {" - "}
        <a className="link-custom" href="/ayuda">
          Ayuda
        </a>
      </p>
    </footer>
  );
};

export default Footer;
