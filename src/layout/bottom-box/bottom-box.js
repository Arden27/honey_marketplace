import React from "react";
import Link from "next/link";

import PageWrapper from "@/components/page-wrapper";
import PromoBox from "@/layout/bottom-box/promo-box";
import RecommendedProductsBox from "@/layout/bottom-box/recommended-products-box";
import RecommendedArticlesBox from "@/layout/bottom-box/recommended-articles-box";

export default function BottomBox() {
  return (
    <PageWrapper>
      <div className="mb-lg grid gap-sm md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr]">
        <PromoBox />
        <RecommendedProductsBox />
        <RecommendedArticlesBox />
      </div>
    </PageWrapper>
  );
}
