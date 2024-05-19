import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Header from "./components/HomePage/Header.jsx";
import MainBody from "./components/HomePage/MainBody.jsx";
import Footer from "./components/HomePage/Footer.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import Quotes from "./components/HomePage/Quotes.jsx";
import ResApp from "./components/HomePage/ResApp.jsx";
import { Quotes } from "./components/HomePage/Quotes.jsx";
import Foods from "./components/HomePage/Foods.jsx";
import { FoodDetails } from "./components/HomePage/FoodDetails.jsx";
import Contacts from "./components/HomePage/Contacts.jsx";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainBody />,
      },
      {
        path: "quotes",
        element: <Quotes />,
      },
      {
        path: "restaurants",
        element: <ResApp />,
      },
      {
        path: "foods",
        element: <Foods />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "fooddetails/:id",
        element: <FoodDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
