import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx"
import Home, {loader as categoryLoader} from "./features/home/Home.jsx";
import Cart from "./features/cart/Cart.jsx";
import Products from "./features/product/Products.jsx";
import Error from "./ui/Error.jsx";
import UserProfile from "./features/user/UserProfile.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: categoryLoader
      },
      {
        path: "/profile",
        element: <UserProfile/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/products/:productName",
        element: <Products/>
      }
    ]
  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
