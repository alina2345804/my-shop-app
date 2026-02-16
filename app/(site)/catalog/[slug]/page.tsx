import { getProducts } from '@/api/products';
import { notFound } from 'next/navigation';
import RelatedProducts from '@/components/Product/RelatedProducts/RelatedProducts';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <RelatedProducts product={product} />
    </>
  );
}
