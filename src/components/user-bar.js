import React from "react";
import Link from "next/link";


export default function UserBar() {
  return (
    <button className="btn-sm [&>*]:hover:stroke-header">
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      </svg>
    </button>
  );
}
