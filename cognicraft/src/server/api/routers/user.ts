import {z} from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

const responseSchema = z.object({
    qNumber: z.number(),
    userAnswer: z.string(),
    correctAnswer: z.string()
})

const userResponse = z.object({
    quizId: z.string(),
    response: z.array(responseSchema),
    correct: z.number(),
    total: z.number(),
    title: z.string()
})

export const userRouter = createTRPCRouter({
    update: protectedProcedure
    .input(z.object({data: userResponse, id: z.string()}))
    .mutation(async({ctx, input})=>{
        return ctx.db.user.update({
            where:{id:input.id},
            data: {
                AttemptedQuiz: {
                    push: input.data
                }
            }
        })
    }),
    getProgress: protectedProcedure
    .input(z.object({id: z.string()}))
    .query(async({ctx, input})=>{
        return ctx.db.user.findMany({
            where: {
                id: input.id
            }
        })
    })
})