import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"
import Image from "next/image"
import { notFound } from 'next/navigation'
import ProductImageGallery from "@/components/custom/ProductImageGallery"
import FeaturesSection from "@/components/custom/FeaturesSection"
import AddToCartButton from "@/components/custom/AddToCartButton"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if (!res.ok) return notFound()
  const product = await res.json()

  return (
    <>
      <section className="grid md:grid-cols-2 gap-16 items-start pt-28 px-6 pb-14">
        <div>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            className="object-contain h-58"
          />
          {/* Image Thumbnails */}
          <ProductImageGallery images={product.images} />
        </div>
        <div>
            <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
            <div className="flex">
              <Star /><Star /><Star /><Star /><p>({product.rating})</p>
            </div>
            <p className="text-secondary-foreground/70 mt-3">{product.description}</p>
            <h1 className="mt-6 font-semibold text-3xl">${product.price}</h1>
            <div className="my-6">
              <Separator />
            </div>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div className="font-semibold text-foreground text-base">Category</div>
                <div className="text-muted-foreground text-base">{product.category}</div>
            </div>

            <div className="flex items-center gap-x-4 mt-10">
              <AddToCartButton id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} />
              <Button className="rounded-none flex-1" size='lg'>Buy now</Button>
            </div>
        </div>
      </section>
      <FeaturesSection />
    </>
  )

}