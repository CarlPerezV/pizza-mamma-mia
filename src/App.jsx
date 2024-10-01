import "./App.css";

import NavbarContainer from "./components/NavbarContainer";
import Footer from "./components/Footer";

import { PizzaProvider } from "./context/PizzaContext";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <app className="bg-warning">
      <PizzaProvider>
        <NavbarContainer />
        <AppRoutes />
      </PizzaProvider>

      <Footer />
    </app>
  );
}

export default App;
