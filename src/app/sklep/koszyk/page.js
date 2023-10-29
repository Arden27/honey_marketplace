"use client";

// components
import BillingForm from "./cartComponents/BillingForm";
import DeliveryForm from "./cartComponents/DeliveryForm";
import PaymentForm from "./cartComponents/PaymentForm";

import Link from "next/link";
import { useState } from "react";

import PageWrapper from "@/components/page-wrapper";

import EditIcon from "public/icons/edit.svg";
import FormFieldset from "@/components/forms/form-fieldset";
import InputLabel from "@/components/forms/input-label";

// export const metadata = {
//   title: "Koszyk - Dobry Bartnik",
//   description: "OPIS",
//   keywords: "TAGI",
// };

export default function Cart() {
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
        <section className="box-lg">
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

            <section className="box-sm flex flex-col gap-sm md:max-w-[30rem]">
              <h2>Produkty</h2>

              <h2>Podsumowanie:</h2>

              <div className="flex justify-center">
                <button className="btn-lg border-text">
                  Przejdź do płatności
                </button>
              </div>
            </section>
          </div>
        </section>
      </PageWrapper>
    </main>
  );
}
