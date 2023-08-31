import React from "react";
import Link from "next/link";

import UserIcon from "public/icons/user.svg";

export default function UserBar() {
  return (
    <button className="btn-sm z-30 [&>*]:hover:stroke-header">
      <UserIcon className="h-[25px] w-[25px] stroke-text stroke-2 " />
    </button>
  );
}
