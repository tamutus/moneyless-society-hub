import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PIIIncludeSchema } from '../inputTypeSchemas/PIIIncludeSchema'
import { PIIUpdateInputSchema } from '../inputTypeSchemas/PIIUpdateInputSchema'
import { PIIUncheckedUpdateInputSchema } from '../inputTypeSchemas/PIIUncheckedUpdateInputSchema'
import { PIIWhereUniqueInputSchema } from '../inputTypeSchemas/PIIWhereUniqueInputSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PIISelectSchema: z.ZodType<Prisma.PIISelect> = z.object({
  id: z.boolean().optional(),
  personId: z.boolean().optional(),
  legalFirstName: z.boolean().optional(),
  legalLastName: z.boolean().optional(),
  address: z.boolean().optional(),
  phoneNumber: z.boolean().optional(),
  discord: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const PIIUpdateArgsSchema: z.ZodType<Prisma.PIIUpdateArgs> = z.object({
  select: PIISelectSchema.optional(),
  include: PIIIncludeSchema.optional(),
  data: z.union([ PIIUpdateInputSchema,PIIUncheckedUpdateInputSchema ]),
  where: PIIWhereUniqueInputSchema,
}).strict() ;

export default PIIUpdateArgsSchema;
