import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Mainpage from "./pages/Mainpage";
import Dashboard from "./pages/Dashboard";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import User from "./pages/User";
import ForgotModal from "./components/Modal/ForgotModel";
import ResetModal from "./components/Modal/ResetModel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/signin",
        element: <Sign />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot",
        element: <ForgotModal />,
      },
      {
        path: "/reset/:otp",
        element: <ResetModal />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
