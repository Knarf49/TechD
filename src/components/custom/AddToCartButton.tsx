'use client'
import { useCart } from "@/app/store/cart"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { TriangleAlert } from "lucide-react"
import { useState,useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
//ใช้ Portal เพื่อแสดงผลใน body โดยตรง

type Props = {
  id: number
  title: string
  price: number
  thumbnail:string
}

export default function AddToCartButton({ id, title, price,thumbnail }: Props) {
    const { isSignedIn } = useUser()
    const addToCart = useCart(state => state.addToCart)
    const [showAlert, setShowAlert] = useState(false)
  
    const handleClick = () => {
        if (!isSignedIn) {
          // return เป็น alert ตรงๆไม่ได้ เพราะ onClick ไม่สามารถ render jsx ตรงๆได้
          setShowAlert(true)
          return
        }

        addToCart({
        id,
        title,
        price,
        quantity: 1,
        thumbnail
        })
    }

    
    // ให้ alert หายไปหลัง 3 วินาที
    useEffect(() => {
        if (showAlert) {
        const timeout = setTimeout(() => {
          setShowAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
        }
    }, [showAlert])

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {showAlert && (
            <motion.div
              className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-md px-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Alert variant="destructive">
                <TriangleAlert className="h-4 w-4" />
                <AlertTitle>Please log in</AlertTitle>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <Button
        variant="secondary"
        className="rounded-none flex-1 hover:brightness-90 w-full"
        size="lg"
        onClick={handleClick}
      >
        Add to Cart
      </Button>
    </>
  )
}
