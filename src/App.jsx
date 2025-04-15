import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx"
import Home, {loader as interestsLoader} from "./features/home/Home.jsx";
import Cart from "./features/cart/Cart.jsx";
import Products, {loader as productsLoader} from "./features/product/Products.jsx";
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
        loader: interestsLoader
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
        path: "/products/:productType",
        element: <Products/>,
        loader: productsLoader
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
