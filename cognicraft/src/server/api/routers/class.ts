import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const classRouter = createTRPCRouter({
    getAll: protectedProcedure
    .query(({ctx})=>{
        return ctx.db.class.findMany({
            where: {
                createdById: ctx.session.user.id
            }
        });
    }),
    create: protectedProcedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(({ctx, input})=>{
        return ctx.db.class.create({
            data: {
                name: input.name,
                students: [],
                createdById: ctx.session.user.id
            }
        })
    })
})