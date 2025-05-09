import Image from "next/image"
import { Button } from "../ui/button"
import { CircleArrowOutUpRight } from "lucide-react"

interface FeatureCardProps{
  title:string;
  details:string
  thumbnail:string
}

const FeatureCard = ({title,details,thumbnail}:FeatureCardProps) => {
  return (
    <div className="relative group aspect-[151/190]">
      <Image
        alt="stay connected"
        src={thumbnail}
        layout="fill"
        className="object-cover w-full h-full group-hover:brightness-75 transition duration-300"
      />
      <div className="group-hover:-translate-y-6 transition-all duration-300 absolute bottom-6 left-6 space-y-2">
        <h1 className="text-xl text-secondary font-semibold">{title}</h1>
        <p className="text-secondary">{details}</p>
        <Button>Buy now <CircleArrowOutUpRight/></Button>
      </div>
    </div>
  )
}

export default FeatureCard