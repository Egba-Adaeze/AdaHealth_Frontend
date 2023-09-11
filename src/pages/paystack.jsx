import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import "tailwindcss/tailwind.css"; 

const Paystack = () => {
  const publicKey = "pk_test_c7b1c8c6e14bf8936e7ccd84e3ee0d2a8b87f54c";
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="container mx-auto bg-white p-6 rounded shadow-md w-[40%]">
        <div className="flex items-center mb-6">
          
          <div className="item-details">
            <p className="text-lg font-semibold ml-[5rem]">Enter your details to confirm booking</p>
            
          </div>
        </div>
        <div className="checkout-form">
          <form>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded p-2 mb-4"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full border border-gray-300 rounded p-2 mb-4"
              onChange={(e) => setEmail(e.target.value)}
            />
          <label htmlFor="Amount" className="block font-medium mb-1">
            Amount
            </label>
            <input
              type="text"
              id="amount"
              className="w-full border border-gray-300 rounded p-2 mb-4"
              onChange={(e) => setAmount(e.target.value)}
            />

            <label htmlFor="phone" className="block font-medium mb-1">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="w-full border border-gray-300 rounded p-2 mb-4"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton {...componentProps} className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Paystack;
