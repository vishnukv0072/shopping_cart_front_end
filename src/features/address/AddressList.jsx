import {useDispatch, useSelector} from "react-redux";
import {getSelectedAddress, setAddress} from "./addressSlice.js";
import Button from "../../ui/Button.jsx";
import {useNavigate} from "react-router-dom";

const addressExamples = {
  1: {
    name: "John Doe",
    street: "123 Elm St.",
    city: "Springfield",
    state: "Illinois",
    postalCode: "62701",
    country: "United States",
    phone: "+1 (555) 123-4567"
  },
  2: {
    name: "Evelyn Miller",
    street: "P.O. Box 1234",
    city: "Los Angeles",
    state: "California",
    postalCode: "90001",
    country: "United States",
    phone: "+1 (555) 234-5678"
  },
  3: {
    name: "Michael Lee",
    street: "22 Beach Road",
    city: "Miami",
    state: "Florida",
    postalCode: "33139",
    country: "United States",
    phone: "+1 (555) 678-1234"
  },
  4: {
    name: "Charlotte Brown",
    street: "101 High Street",
    city: "London",
    postalCode: "E1 7QX",
    country: "United Kingdom",
    phone: "+44 20 7946 0958"
  },
  5: {
    name: "Ravi Kumar",
    street: "12 MG Road",
    city: "Bangalore",
    state: "Karnataka",
    postalCode: "560001",
    country: "India",
    phone: "+91 98765 43210"
  }
};

function AddressList() {
  const dispatch = useDispatch();
  const selectedAddress = useSelector(getSelectedAddress);
  const navigate = useNavigate();

  function handleAddressSelection(id, address) {
    dispatch(setAddress(id, address))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Saved addresses</h2>
        <Button type="dark" onClick={() => navigate("/checkout")}>Add another address</Button>
      </div>
      {Object.entries(addressExamples).map(([id, address]) => (
        <div
          key={id}
          onClick={() => handleAddressSelection(id, address)}
          className={`p-4 rounded-lg cursor-pointer address-element ${selectedAddress === id ? 'bg-gray-300' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          <div className="font-medium">{address.name}</div>
          <div>{address.street}</div>
          {address.apartment && <div>Apt: {address.apartment}</div>}
          <div>
            {address.city}, {address.state} {address.postalCode}
          </div>
          <div>{address.country}</div>
          <div className="text-sm text-gray-500">{address.phone}</div>
        </div>
      ))}
    </div>
  );
}

export default AddressList;