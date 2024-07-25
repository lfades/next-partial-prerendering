import { RecommendedProducts } from '#/components/recommended-products';
import { Reviews } from '#/components/reviews';
import { SingleProduct } from '#/components/single-product';
import { Ping } from '#/components/ping';

export default function Page() {
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct />

      <Ping />

      <RecommendedProducts />

      <Ping />

      <Reviews />
    </div>
  );
}
