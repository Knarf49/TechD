'use client'
import { useProduct } from "@/app/context/ProductContext";
import ProductCard from "@/components/custom/ProductCard"
import ProductListSkeleton from "@/components/custom/ProductListSkeleton";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LIMIT = 10

const Page = () => {
  const products = useProduct();
  const [visibleCount, setVisibleCount] = useState(LIMIT)
  const showMore = () => setVisibleCount(prev => prev + LIMIT)
  const visibleProducts = products!.slice(0, visibleCount)

  return (
    <section className="pt-24">
      <h1 className="text-2xl font-semibold border-b-3 border-primary w-fit pb-1">All products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
        {!products && 
          <ProductListSkeleton />
        }
        {
          products &&
            <>
              {visibleProducts.map((p) => (
                <ProductCard key={p.id} id={p.id} title={p.title} description={p.description} rating={p.rating} price={p.price} thumbnail={p.thumbnail} images={p.images} category={p.category} />
              ))}
            </>
        }

      </div>
      {visibleCount < products!.length && (
        <div className="flex justify-center mt-4">
          <Button onClick={showMore} variant='outline' className="px-12 py-2.5">See more</Button>
        </div>
      )}
    </section>
  )
}

export default Page