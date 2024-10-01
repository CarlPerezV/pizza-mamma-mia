const Profile = () => {
  return (
    <section
      className="container mt-5 bg-success p-5 rounded-circle"
      style={{ width: "20rem" }}
    >
      <div className="row">
        <div className="card-body text-center ">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="rounded-circle img-fluid"
            style={{ width: "150px" }}
          />
          <h5 className="my-3">Juan Soto</h5>
          <p className="fw-bold text-warning mb-3">juan.soto@burnmail.com</p>
          <button type="button" className="btn btn-outline-warning">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
