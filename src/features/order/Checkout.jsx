import {Alert, Step, StepLabel, Stepper} from "@mui/material";
import Button from "../../ui/Button.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useSelector} from "react-redux";
import {getCartItems} from "../cart/cartSlice.js";
import {getSelectedAddress} from "../address/addressSlice.js";

function Checkout() {
  const [progress, setProgress] = useState(0);
  const [alert, setAlert] = useState(null);
  const cartItems = useSelector(getCartItems);
  const steps = ["Address", "Price breakup", "Payment details"];
  const navigate = useNavigate();
  const selectedAddress = useSelector(getSelectedAddress);

  function handlePageSwitch(current) {
    let valid = true;
    if (progress === 0 && !selectedAddress) {
      setAlert("Please select an address to proceed.");
      valid = false;
    }
    if (progress === 2 && !selectedAddress) {
      setAlert("Please select a payment method.");
      valid = false;
    }
    if (valid) {
      setProgress(current);
      const route = steps[current].toLowerCase().replaceAll(" ", "-");
      navigate(route);
    } else {
      setTimeout(() => setAlert(null), 4000);
    }
  }

  if (cartItems.length === 0) return null;
  return (
    <div className="pt-10">
      <Stepper activeStep={progress} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <main className="max-w-[60%] m-auto pt-10">
        <Outlet/>
      </main>
      <div className={`m-auto pt-2 ${alert ? 'visible' : 'invisible'}`}>
        <Alert severity="info" variant="outlined" className="w-100 m-auto">{alert}</Alert>
      </div>
      <div className="flex pt-2 pb-5">
        <div className="mx-auto space-x-10">
          <Button type={progress > 0 ? "dark" : "disabled"} disabled={progress < 1}
                  onClick={() => handlePageSwitch(progress - 1)}>Back</Button>
          <Button type={progress < 2 ? "dark" : "disabled"} disabled={progress >= 2}
                  onClick={() => handlePageSwitch(progress + 1)}>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;