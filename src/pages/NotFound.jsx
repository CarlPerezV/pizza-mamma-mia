const NotFound = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center mt-0"
        style={{
          backgroundImage: "url(src/assets/error.png)",
          margin: "auto",
          width: "50vh",
          height: "45vh",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="text-dark">
        <p className="fs-1 fw-bold">Not Found</p>
        <span className="fs-4 fw-semibold">
          La pagina que intenta entrar no existe
        </span>
      </div>
      <div>
        <span className="fs-4 fw-semibold">
          <a href="/">Volver al Inicio</a>
        </span>
      </div>
    </>
  );
};

export default NotFound;
