import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const Profile = () => {
  const { user, signOut } = useContext(PizzaContext);
  return (
    <div>
      {user ? (
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
              <p className="fw-bold text-warning mb-3">{user.email}</p>
              <button
                onClick={signOut}
                type="button"
                className="btn btn-outline-danger"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </section>
      ) : (
        <p>Ingrese a la aplicación</p>
      )}
    </div>
  );
};

export default Profile;
