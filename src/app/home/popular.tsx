'use client'

import { useProduct } from "@/app/context/ProductContext";
import ProductCard from "@/components/custom/ProductCard";
import ProductListSkeleton from "@/components/custom/ProductListSkeleton";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LIMIT = 10

const Popular = () => {
    const products = useProduct();
    const [visibleCount, setVisibleCount] = useState(LIMIT)
    const showMore = () => setVisibleCount(prev => prev + LIMIT)
    const visibleProducts = products!.slice(0, visibleCount)

    
    return (
        <>
            <section className="w-full pt-14 px-18 md:px-0">
                <h1 className="text-2xl font-semibold">Popular products</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
                    {!products && 
                        <ProductListSkeleton />
                    }
                    {products &&    
                        <>
                            {visibleProducts.map((p) => (
                                <ProductCard key={p.id}  id={p.id} title={p.title} description={p.description} rating={p.rating} price={p.price} thumbnail={p.thumbnail} />
                            ))}
                        </>
                    }
                </div>
            </section>
            {visibleCount < products.length && (
                <div className="flex justify-center mt-4">
                    <Button onClick={showMore} variant='outline' className="px-12 py-2.5">See more</Button>
                </div>
            )}
        </>
    )
}

export default Popular