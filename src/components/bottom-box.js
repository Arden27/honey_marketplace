import React from "react";
import Link from "next/link";

import RegisterBox from "@/components/register-box";
import RecommendedBox from "@/components/recommended-box";
import ArticlesBox from "@/components/articles-box";

export default function BottomBox() {
  return (
    <div className="mb-gap grid max-w-screen-2xl gap-gap md:grid-cols-2 ">
      <RegisterBox />
      <RecommendedBox />
      <ArticlesBox />
    </div>
  );
}
