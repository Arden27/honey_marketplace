import React from "react";
import Link from "next/link";

import Box from "@/components/Box";

export default function RegisterBox() {
  return (
    <Box type="sm">
      <h2>Zarejestruj się</h2>
      <Link
        className="btn-lg bottom-sm self-end bg-bg2 hover:text-bg"
        href="/rejestracja"
      >
        Zarejestruj się
      </Link>
    </Box>
  );
}
