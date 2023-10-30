"use client";

// components
import PageWrapper from "@/components/page-wrapper";
import BillingForm from "./cartComponents/BillingForm";
import DeliveryForm from "./cartComponents/DeliveryForm";
import PaymentForm from "./cartComponents/PaymentForm";
import Cart from "./cartComponents/Cart";

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
    <main>
      <PageWrapper>
        <Box type="lg">
          <h1>Koszyk</h1>
          <div className="grid gap-sm md:grid-cols-[minmax(50%,1fr)_auto]">
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

            <Cart />
          </div>
        </Box>
      </PageWrapper>
    </main>
  );
}
