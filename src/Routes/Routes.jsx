import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Carrer from "../Pages/Carrer/Carrer";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import NewsDetails from "../Pages/News/NewsDetails/NewsDetails";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Terms from "../Pages/Login/Terms/Terms";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/categoris/0"></Navigate>
      }
      ,
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "terms",
        element: <Terms></Terms>
      }
    ]
  },
  {
    path: "categoris",
    element: <Main></Main>,
    children: [

      {
        path: "about",
        element: <About></About>
      },
      {
        path: "carrer",
        element: <Carrer></Carrer>
      },
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
      }

    ]
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);

export default router;