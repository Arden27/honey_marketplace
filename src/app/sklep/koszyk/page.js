"use client";

// components

import Box from "@/app/_layout/Box";
import Button from "@/components/Button";
import BillingForm from "./_cartComponents/BillingForm";
import DeliveryForm from "./_cartComponents/DeliveryForm";
import PaymentForm from "./_cartComponents/PaymentForm";
import Cart from "./_cartComponents/Cart";
import Checkbox from "@/components/Checkbox";

import { useState } from "react";

// export const metadata = {
//   title: "Koszyk - Dobry Bartnik",
//   description: "OPIS",
//   keywords: "TAGI",
// };

export default function Order() {
  const [isEditing, setIsEditing] = useState({
    personalBillingData: true,
    shippingDelivery: true,
    paymentMethod: true,
  });

  const [formData, setFormData] = useState({
    personalBillingData: {
      mainAdressFirstname: "",
      mainAdressLastname: "",
      logInEmail: "",
      mainAdressPhone: "",
      mainAdressStreet: "",
      mainAdressZipcode: "",
      mainAdressCity: "",
      // ... any other fields you might have in this section ...
    },
    shippingDelivery: {
      sendAddressFirstname: "",
      sendAddressLastname: "",
      sendAddressStreet: "",
      sendAddressZipcode: "",
      sendAddressCity: "",
      deliveryMethodChoice: "", // Your method for radio buttons
      // ... any other fields you might have in this section ...
    },
    paymentMethod: {
      paymentChoice: "", // similar approach for radio buttons here
      // ... any other fields you might have in this section ...
    },
  });

  const handleInputChange = (section, field, value) => {
    const updatedData = {
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    };

    setFormData(updatedData);
  };

  return (
    <main className="">
      <Box format="lg">
        <h1>Koszyk</h1>

        <div className="grid grid-rows-1 gap-sm md:grid-cols-[minmax(40%,auto),minmax(auto,calc(30rem-theme(spacing.sm)))]">
          <div className="flex flex-col gap-sm">
            <BillingForm
              isEditing={isEditing}
              formData={formData}
              setIsEditing={setIsEditing}
              handleInputChange={handleInputChange}
            />

            <DeliveryForm
              isEditing={isEditing}
              formData={formData}
              setFormData={setFormData}
              setIsEditing={setIsEditing}
              handleInputChange={handleInputChange}
            />

            <PaymentForm
              isEditing={isEditing}
              formData={formData}
              setIsEditing={setIsEditing}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="">
            <Cart />
          </div>
        </div>
      </Box>
    </main>
  );
}
