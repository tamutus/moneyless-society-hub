import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionIncludeSchema } from '../inputTypeSchemas/VolunteerQuestionIncludeSchema'
import { VolunteerQuestionWhereUniqueInputSchema } from '../inputTypeSchemas/VolunteerQuestionWhereUniqueInputSchema'
import { VolunteerQuestionCreateInputSchema } from '../inputTypeSchemas/VolunteerQuestionCreateInputSchema'
import { VolunteerQuestionUncheckedCreateInputSchema } from '../inputTypeSchemas/VolunteerQuestionUncheckedCreateInputSchema'
import { VolunteerQuestionUpdateInputSchema } from '../inputTypeSchemas/VolunteerQuestionUpdateInputSchema'
import { VolunteerQuestionUncheckedUpdateInputSchema } from '../inputTypeSchemas/VolunteerQuestionUncheckedUpdateInputSchema'
import { VolunteerResponseFindManyArgsSchema } from "../outputTypeSchemas/VolunteerResponseFindManyArgsSchema"
import { VolunteerQuestionEditsFindManyArgsSchema } from "../outputTypeSchemas/VolunteerQuestionEditsFindManyArgsSchema"
import { VolunteerQuestionCountOutputTypeArgsSchema } from "../outputTypeSchemas/VolunteerQuestionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VolunteerQuestionSelectSchema: z.ZodType<Prisma.VolunteerQuestionSelect> = z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  responses: z.union([z.boolean(),z.lazy(() => VolunteerResponseFindManyArgsSchema)]).optional(),
  edits: z.union([z.boolean(),z.lazy(() => VolunteerQuestionEditsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VolunteerQuestionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const VolunteerQuestionUpsertArgsSchema: z.ZodType<Prisma.VolunteerQuestionUpsertArgs> = z.object({
  select: VolunteerQuestionSelectSchema.optional(),
  include: VolunteerQuestionIncludeSchema.optional(),
  where: VolunteerQuestionWhereUniqueInputSchema,
  create: z.union([ VolunteerQuestionCreateInputSchema,VolunteerQuestionUncheckedCreateInputSchema ]),
  update: z.union([ VolunteerQuestionUpdateInputSchema,VolunteerQuestionUncheckedUpdateInputSchema ]),
}).strict() ;

export default VolunteerQuestionUpsertArgsSchema;
