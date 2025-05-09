// app/products/ProductListSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton"

const LIMIT = 10

export default function ProductListSkeleton() {
  return (
    <>
      {Array.from({ length: LIMIT }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="w-full h-40 rounded-md" />
          <Skeleton className="w-3/4 h-4" />
          <Skeleton className="w-1/2 h-4" />
          <Skeleton className="w-1/3 h-4" />
        </div>
      ))}
    </>
  )
}
