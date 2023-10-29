import React from "react";
import Link from "next/link";

import Box from "@/components/Box";

export default function NoRegisterBox() {
  return (
    <Box type="sm">
      <h2>Zamówienie bez rejestracji</h2>
      <button className="btn-lg bottom-sm hover:text-bg" href="/">
        Kontynuuj
      </button>
    </Box>
  );
}
