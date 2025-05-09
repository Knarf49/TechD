import {z} from 'zod'

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  rating: z.number(),
  thumbnail: z.string(),
  images: z.array(z.string().url()),
  category:z.string(),
})


export type ProductType = z.infer<typeof productSchema>
