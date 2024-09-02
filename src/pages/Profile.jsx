const Profile = () => {
  return (
    // <div>
    //   <ul>
    //     Profile
    //     <li>Contiene nombre</li>
    //     <li>Contiene CORREO</li>
    //     <li>Contiene DATOS ADICIONALES</li>
    //     <button className="btn btn-danger">Cerrar sesion</button>
    //   </ul>
    // </div>

    <section
      className="container-lg mt-5 bg-success p-5 rounded-circle"
      style={{ width: "22rem" }}
    >
      <div className="row">
        <div className="col-lg-4">
          <div>
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle img-fluid"
                style={{ width: "150px" }}
              />
              <h5 className="my-3">Juan Soto</h5>
              <p className="fw-bold text-warning mb-3">
                juan.soto@burnmail.com
              </p>
              <button type="button" className="btn btn-outline-warning">
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
