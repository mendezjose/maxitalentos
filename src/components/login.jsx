import React, { useState } from "react";
import Joi from "joi";
import auth from "../services/authService";

const Login = (props) => {
  let [user, setUser] = useState({});
  let [error, setError] = useState();
  let [option, setOption] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const err = validate();
      setError(err);
      if (err) return;

      await auth.login(user.email, user.password, option);

      const { state } = props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      setError(ex.response.data);
    }
  };

  const schema = {
    email: Joi.string()
      .max(255)
      .required()
      .email()
      .label("Correo electrónico")
      .error(new Error("Correo demasiado largo")),
    password: Joi.string()
      .max(255)
      .required()
      .error(new Error("Contraseña demasiado larga")),
  };

  const validate = () => {
    const options = { abortEarly: true };
    const { error: err } = Joi.validate(user, schema, options);

    if (!err) return null;

    // const errs = {};
    // for (let item of err.details) errs[item.path[0]] = item.message;
    return err.message;
  };

  const handleChange = (e) => {
    setError(null);
    const u = { ...user };
    u[e.currentTarget.name] = e.currentTarget.value;
    setUser(u);
  };

  const handleChangeOption = () => {
    const op = option;
    setOption(!op);
  };

  return (
    <div className="login">
      <form class="form-signin signin" onSubmit={(e) => handleSubmit(e)}>
        <a class="navbar-brand logo" href="/">
          MaxiTalentos
        </a>
        <h1 class="h3 mb-3 font-weight-normal">Iniciar sesión</h1>
        <label for="inputEmail" class="sr-only">
          Correo electrónico
        </label>
        <input
          type="email"
          name="email"
          id="inputEmail"
          className="form-control"
          placeholder="Correo electrónico"
          required
          onChange={(e) => handleChange(e)}
        ></input>
        <label for="inputPassword" class="sr-only">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="inputPassword"
          class="form-control"
          placeholder="Contraseña"
          required
          onChange={(e) => handleChange(e)}
        ></input>
        {error && <div className="alert alert-danger">{error}</div>}
        <div class="checkbox mb-3">
          <label>
            <input
              onChange={handleChangeOption}
              type="checkbox"
              value="remember-me"
            ></input>{" "}
            Mantener la sesión abierta
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Entrar
        </button>
        <p class="mt-5 mb-3 text-muted">© 2020</p>
      </form>
    </div>
  );
};

export default Login;
