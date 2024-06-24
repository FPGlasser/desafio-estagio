import { z } from "zod";

const createProductSchema = z.object({
    name: z.string(),
    price: z.number().positive(),
    description: z.string().min(16, { message: "Descrição" })
})

const updateProductSchema = z.object({
    id: z.number().positive(),
    name: z.string().length(2),
    price: z.number().positive(),
    description: z.string().min(16, { message: "Descrição" })
})

export type TcreateUser = z.infer<typeof createProductSchema>
export type TUpdateUser = z.infer<typeof updateProductSchema>