import FeatureCard from "@/components/custom/FeatureCard"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
const featureProduct = () => {
  const CardItems =[
    {
      title : 'Unparalleled Sound',
      details: 'Experience crystal-clear audio with premium headphones.',
      thumbnail: '/girl_with_headphone_image.png'
    },
    {
      title : 'Stay Connected',
      details: 'Compact and stylish earphones for every occasion.',
      thumbnail: '/girl_with_earphone_image.png'
    },
    {
      title : 'Power in Every Pixel',
      details: 'Shop the latest laptops for work, gaming, and more.',
      thumbnail: '/boy_with_laptop_image.png'
    },
  ]

  return (
    <section className="mt-14 px-6">
      <h1 className="text-3xl font-semibold text-center underline underline-offset-10 decoration-primary">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {CardItems.map((card) => (
          <FeatureCard title={card.title} details={card.details} key={card.title} thumbnail={card.thumbnail} />
        ))}
      </div>

      {/* Buy now */}
      <div className="min-h-[1045px] w-full bg-accent rounded-lg mt-16 py-14 flex flex-col justify-center md:flex-row md:min-h-auto md:h-80 items-center">
        <Image 
          src='/JBL_speaker.png'
          width={224}
          height={262}
          alt="jbl speaker"
        />

        <div className="text-center space-y-3">
          <h1 className="max-w-72 text-3xl font-bold mx-auto">Level Up Your Gaming Experience</h1>
          <p className="max-w-[343px] text-clip">From immersive sound to precise controls—everything you need to win</p>
          <Button className="group px-12">Buy now <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowRight /></span></Button>
        </div>

        <Image 
          src='/xbox_controller.png'
          alt="controller"
          width={400}
          height={500}
          className="mt-12"

        />
      </div>

      <Card className="my-8">
        <CardHeader>
          <CardTitle className="text-center">Subscripe now & get 20% off</CardTitle>
          <CardDescription className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardDescription>
        </CardHeader>
        <CardFooter className="max-w-[482px] px-3 mx-auto">
          <Input type="email" placeholder="Enter your email id" className="rounded-r-none"/>
          <Button className="rounded-l-none">Subscribe</Button>
        </CardFooter>
      </Card>
    </section>
  )
}

export default featureProduct