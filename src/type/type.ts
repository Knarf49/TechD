import {z} from 'zod'

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().optional(),
  price: z.number(),
  rating: z.number().min(0).max(5).optional(),
  thumbnail: z.string().optional(),
  images: z.array(z.string().url()).optional(),
  category:z.string().optional(),
})


export type ProductType = z.infer<typeof productSchema>
