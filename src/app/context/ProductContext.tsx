'use client'
import { createContext,useState,useContext } from "react";
import { ProductType } from "@/type/type";

const ProductContext = createContext<ProductType[] | null>(null);

// ถ้าไม่อยากใช้ useEffect ให้ใช้ initial value ได้
export function ProductProvider({ children,initialProducts }: { children: React.ReactNode,initialProducts:ProductType[] }) {
  const [products] = useState(initialProducts)
  
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)

