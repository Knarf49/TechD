// store/cart.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { z } from 'zod'

export const cartItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number().positive(),
  quantity: z.number().min(1),
  thumbnail: z.string()
})

type CartItem = z.infer<typeof cartItemSchema>

type CartState = {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  updateQuantity: (id: number, quantity: number) => void
  getCartTotal: () => number
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (item) => {
        const existingItem = get().items.find(i => i.id === item.id)
        if (existingItem) {
          set({
            items: get().items.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          })
        } else {
          set({ items: [...get().items, item] })
        }
      },

      removeFromCart: (id) => {
        set({ items: get().items.filter(i => i.id !== id) })
      },
      clearCart: () => set({ items: [] }),

      updateQuantity: (id, quantity) => {
        if (quantity < 1) return
        set({
          items: get().items.map(i =>
            i.id === id ? { ...i, quantity } : i
          ),
        })
      },
      
      getCartTotal: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
      }
    }),
    {
      name: 'cart-storage', // unique name for the storage key
      storage: createJSONStorage(() => localStorage), // use localStorage (works only on client side)
      partialize: (state) => ({ items: state.items }), // only store the 'items' state
    }
  )
)