import PageWrapper from "@/app/_layout/PageWrapper";
import PromoBox from "@/app/_layout/bottomBox/PromoBox";
import RecommendedProductsBox from "@/app/_layout/bottomBox/RecommendedProductsBox";
import RecommendedArticlesBox from "@/app/_layout/bottomBox/RecommendedArticlesBox";

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
