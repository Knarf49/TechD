'use client'
import { useCart } from '@/app/store/cart' 
import { Button } from '@/components/ui/button'
import Image from "next/image"

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart()

  return (
    <div className="pt-20 px-6">
      <h1 className="text-3xl font-semibold underline underline-offset-8 decoration-primary decoration-4 mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {items.map(item => (
              <li key={item.id} className="flex gap-4 items-center border-b py-4">
                <Image src={item.thumbnail} width={80} height={80} alt={item.title} />
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>${item.price * item.quantity}</p>
                </div>
                <Button variant='link' className='text-destructive' onClick={() => removeFromCart(item.id)}>Remove</Button>
              </li>
            ))}
          </ul>
          <Button className="mt-8 hover:brightness-120 transition-all duration-300" variant='destructive' onClick={clearCart}>Clear Cart</Button>
        </>
      )}
    </div>
  )
}
