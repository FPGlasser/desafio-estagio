import { z } from "zod";

const createProductSchema = z.object({
    name: z.string(),
    price: z.number().positive(),
    description: z.string().min(16, {message: ""})  
})