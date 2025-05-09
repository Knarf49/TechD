import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

import { Star, StarHalf } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { ProductType } from "@/type/type"
import Link from "next/link"

const ProductCard = ({ id,title,description,rating,price,thumbnail }:ProductType) => {
  return (
    <Link href={`/product/${id}`}>
        <Card className="max-w-[240px] pt-0 pb-4">
            <CardHeader className="bg-secondary rounded-(--radius)">
                <div className="h-48 content-center">
                    <Image
                        src={thumbnail}
                        alt={title}
                        width={100}
                        height={150}
                        className="mx-auto cursor-pointer hover:scale-110 transition-transform duration-200"
                    />
                </div>
            </CardHeader>
            <CardContent className="-mt-2">
                <h1>{title}</h1>
                <p className="truncate opacity-50 text-sm">{description}</p>
                <div className="flex items-center gap-x-1">
                    {rating} <Star size={15}/><Star size={15}/><Star size={15}/><Star size={15}/><StarHalf size={15}/>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex items-center justify-between w-full">
                    <h1>${price}</h1>
                    <Button variant='outline' className="rounded-full transition-all duration-400">
                        Buy now
                    </Button>
                </div>
            </CardFooter>
        </Card>
    </Link>
  )
}

export default ProductCard