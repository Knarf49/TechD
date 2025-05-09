'use client'

import { useProduct } from "@/app/context/ProductContext";
import { useState } from "react";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";

const LIMIT = 10
const FeaturesSection = () => {
    const products = useProduct();
    const [visibleCount, setVisibleCount] = useState(LIMIT)
    const showMore = () => setVisibleCount(prev => prev + LIMIT)

    if(!products) return <p>Loading...</p>
    const visibleProducts = products.slice(0, visibleCount)

    return (
        <section className="mt-10">
            <h1 className="text-3xl font-semibold text-center">Featured Products</h1>
            <div className="bg-primary h-0.5 w-32 mx-auto" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
                {visibleProducts.map((p) => (
                <ProductCard key={p.id}  id={p.id} title={p.title} description={p.description} rating={p.rating} price={p.price} thumbnail={p.thumbnail} />
                ))}
            </div>
            {visibleCount < products.length && (
                <div className="flex justify-center mt-4">
                <Button onClick={showMore} variant='outline' className="px-12 py-2.5">See more</Button>
                </div>
            )}
        </section>
    )
}

export default FeaturesSection