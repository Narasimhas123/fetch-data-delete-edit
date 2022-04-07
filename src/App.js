import React, { useEffect, useState } from "react";
import Customers from "./Customers";
// import Customer from './Customer'
function App() {
  // set state
  const [customers, setCustomers] = useState([]);

  // first data grab
  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  // update customers on page after edit
  function onUpdateCustomer(updatedCustomer) {
    const updatedCustomers = customers.map((customer) => {
      if (customer.id === updatedCustomer.id) {
        return updatedCustomer;
      } else {
        return customer;
      }
    });
    setCustomers(updatedCustomers);
  }

  return (
    <div>
      <Customers
        customers={customers}
        onUpdateCustomer={onUpdateCustomer}
        setCustomers={setCustomers}
      />
    </div>
  );
}
export default App;
