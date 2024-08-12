const Header = () => {
  return (
    <div
      className="text-center "
      style={{
        backgroundImage: "url(./public/Header.jpg)",
        height: "30vh",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: "30vh",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white ">
            <h1>¡Pizzeria Mamma Mia!</h1>
            <span>¡Tenemos las mejores pizzas que podrás encontrar!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
