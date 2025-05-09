'use client'

import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader } from "@/components/ui/dialog"
import { useState } from "react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export default function ProductImageGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="flex gap-4 mt-4">
        {images.slice(0, 4).map((img, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                width={100}
                height={100}
                className="rounded-md border cursor-pointer"
                onClick={() => setSelectedImage(img)}
              />
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 overflow-hidden">
              <DialogHeader>
                <VisuallyHidden>
                    <DialogTitle>Preview</DialogTitle>
                </VisuallyHidden>
              </DialogHeader>
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Selected"
                  width={800}
                  height={800}
                  className="w-full h-full object-contain"
                />
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  )
}
