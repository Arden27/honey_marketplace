import PageWrapper from "@/components/PageWrapper";
import PromoBox from "@/layout/bottom-box/PromoBox";
import RecommendedProductsBox from "@/layout/bottom-box/RecommendedProductsBox";
import RecommendedArticlesBox from "@/layout/bottom-box/RecommendedArticlesBox";

export default function BottomBox() {
  return (
    <PageWrapper>
      <div className="grid gap-sm md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] mb-sm">
        <PromoBox />
        <RecommendedProductsBox />
      </div>
      <RecommendedArticlesBox />
    </PageWrapper>
  );
}
