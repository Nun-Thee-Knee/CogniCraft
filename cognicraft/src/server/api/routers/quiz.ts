import { z } from "zod";
import crypto from "crypto"

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const questionSchema = z.object({
  Answer: z.number().int().min(0),
  Options: z.array(z.string()),
  Question: z.string().min(1),
});

const questionListSchema = z.array(questionSchema);

function generateRandomString(length:number) {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
  }

export const quizRouter = createTRPCRouter({
    getAll: protectedProcedure
    .input(z.object({ id: z.string().min(5) }))
    .query(({ctx, input})=>{
        return ctx.db.quizSchema.findMany({
            where: {
                id: input.id
            }
        });
    }),
    create: protectedProcedure
  .input(z.object({question: questionListSchema}))
  .mutation(async ({ ctx, input}) => {
    return ctx.db.quizSchema.create({
      data: {
        id: generateRandomString(10),
        Data: input.question
      },
    });
  }),
  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.quizSchema.findFirst();
  }),
})