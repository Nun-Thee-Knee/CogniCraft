import { z } from "zod";
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
  .input(z.object({question: questionListSchema, id: z.string(), title:z.string()}))
  .mutation(async ({ ctx, input}) => {
    return ctx.db.quizSchema.create({
      data: {
        id: input.id,
        Data: input.question,
        title: input.title
      },
    });
  }),
  getLatest: protectedProcedure
  .input( z.object({id:z.string()}))
  .query(({ ctx, input }) => {
    return ctx.db.quizSchema.findFirst({
      where:{
        id: input.id
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }),
  update:protectedProcedure
  .input(z.object({userID: z.string(), id:z.string()}))
  .mutation(async({ctx, input})=>{
    return ctx.db.quizSchema.update({
      where:{id:input.id},
      data:{
        AttemptedBy:{
          push: input.userID
        }
      }
    })
  })
  ,
  delete: protectedProcedure
  .input(z.object({id: z.string()}))
  .mutation(({ctx, input})=>{
    return ctx.db.quizSchema.delete({
      where: {
        id:  input.id
      }
    })
  })
})