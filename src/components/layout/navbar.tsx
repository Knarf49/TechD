'use client'
import { ShoppingCart, UserCircleIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from "../ui/button"
import { useCart } from '@/app/store/cart'
import { Badge } from "@/components/ui/badge"

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
]


const Navbar = () => {
  const pathname = usePathname()
  const { items } = useCart()

  // Calculate total quantity of all items in cart
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="flex items-center justify-between px-16 h-14 border-b-1 shadow-sm fixed w-full z-50 bg-background">
        <div><Link href='/'><h1 className="text-2xl font-semibold">TechD</h1></Link></div>
        <div className="space-x-4">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <Link key={href} href={href} className="relative px-1">
                  <span
                    className={cn(
                      "text-sm transition-colors",
                      isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
        </div>

        
        <div className="flex items-center gap-x-4">
          <Link href='/cart'>
            <Button variant='link' size='lg' className="scale-150">
              <ShoppingCart />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute top-2 right-2"
                  >
                    <Badge 
                      variant="destructive" 
                      className="h-3 w-3 flex items-center justify-center p-0 text-[0.6rem] rounded-full"
                    >
                      {totalItems}
                    </Badge>
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </Link>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="px-4 py-2 text-base font-medium rounded-full shadow-none"
              >
                <UserCircleIcon className="size-6"/>
                Sign in
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
    </nav>
  )
}

export default Navbar