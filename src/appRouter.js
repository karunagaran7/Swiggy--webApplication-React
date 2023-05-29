
import { createBrowserRouter } from "react-router-dom";
import Header from "./headerComponent/header";
import Body from "./body/bodyComponent";
import App from "./App";
import Cart from "./cart";
import Help from "./help";
import ErrorComponent from "./errorComponent";
import Restaurant from "./restaurant";
import Contact from "./contact";
import ItemCards from "./body/itemCards";

export const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorComponent/>,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
            path: "/cart",
            element: <Cart />,

          },

          {
            path: "/help",
            element: <Help />
          },
          {
            path:"/restaurant/:id",
            element:<Restaurant/>
          },{
            path:"/contact",
            element:<Contact/>
          },{
            path:"/cart",
            element:<ItemCards/>
          }
      ],
    },
  ]);