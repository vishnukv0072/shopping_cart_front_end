import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx"
import Home, {loader as interestsLoader} from "./features/home/Home.jsx";
import Cart from "./features/cart/Cart.jsx";
import Products from "./features/product/Products.jsx";
import Error from "./ui/Error.jsx";
import UserProfile from "./features/user/UserProfile.jsx";
import Checkout from "./features/order/Checkout.jsx";
import AddressList from "./features/address/AddressList.jsx";
import PriceBreakup from "./features/payment/PriceBreakup.jsx";
import PaymentDetails from "./features/payment/PaymentDetails.jsx";

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
        // loader: productsLoader
      },
      {
        path: "/checkout",
        element: <Checkout/>,
        children: [
          {
            index: true,
            element: <Navigate to="address" replace/>
          },
          {
            path: "address",
            element: <AddressList/>
          },
          {
            path: "price-breakup",
            element: <PriceBreakup/>
          },
          {
            path: "payment-details",
            element: <PaymentDetails/>
          }
        ]
      }
    ]
  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
