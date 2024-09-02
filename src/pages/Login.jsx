import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateData = (e) => {
    e.preventDefault();

    //Esta parte del código la deje separada, ya que después prefiero incorporar una librería para tener mejor control de el formulario

    if (!email.trim()) {
      setErrors(true);
      setErrorMessage("Ingrese Correo");
      return;
    }

    if (!password.trim()) {
      setErrors(true);
      setErrorMessage("Ingrese Contraseña");
      return;
    }

    if (password.length < 6) {
      setErrors(true);
      setErrorMessage("Mínimo 6 caracteres");

      return;
    }

    setErrors(false);

    alert("Bienvenido");
  };

  return (
    <div className="container-lg mt-5" style={{ width: "22rem" }}>
      <p className="fs-1 text-center fw-bold text-uppercase">Login</p>
      <form onSubmit={validateData}>
        {errors && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

        <div className="mb-2">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Ingrese correo"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Ingrese contraseña"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-dark">
            Ingresa
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
