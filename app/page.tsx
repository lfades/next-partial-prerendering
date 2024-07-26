import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';
import { SingleProduct } from '#/components/single-product';
import { Ping } from '#/components/ping';
import { ServerDefer } from '#/components/server-defer';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct />

      <Ping />

      <ServerDefer
        fallback={<RecommendedProductsSkeleton />}
        action={RecommendedProducts}
      />

      <Ping />

      <ServerDefer fallback={<ReviewsSkeleton />} action={Reviews} />
    </div>
  );
}
