import { fetchProductsByCategories } from "@/services/products-service";
import { Card } from "flowbite-react";
import Image from "next/image";
import { AddToCartButton } from "./AddToCartButton";
import { ProductMapper } from "@/mappers/product-mapper";

export default async function CategoryPage({
  params,
}: {
  params: { categoryName: string };
}) {
  const productsByCategory = await fetchProductsByCategories(
    params.categoryName
  );

  return (
    <>
      <h1 className="text-3xl py-10">
        {decodeURI(params.categoryName).toUpperCase()} (products:{" "}
        {productsByCategory.length})
      </h1>
      <ul className="flex gap-4 flex-wrap justify-center">
        {productsByCategory.map((product) => (
          <li key={product.title}>
            <Card className="max-w-sm">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={400}
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title} - {product.price}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400"></p>
              <AddToCartButton product={ProductMapper.toApi(product)} />
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
