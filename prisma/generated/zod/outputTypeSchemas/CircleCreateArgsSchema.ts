import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleIncludeSchema } from '../inputTypeSchemas/CircleIncludeSchema'
import { CircleCreateInputSchema } from '../inputTypeSchemas/CircleCreateInputSchema'
import { CircleUncheckedCreateInputSchema } from '../inputTypeSchemas/CircleUncheckedCreateInputSchema'
import { CircleAimFindManyArgsSchema } from "../outputTypeSchemas/CircleAimFindManyArgsSchema"
import { CirclesToRolesFindManyArgsSchema } from "../outputTypeSchemas/CirclesToRolesFindManyArgsSchema"
import { CircleCountOutputTypeArgsSchema } from "../outputTypeSchemas/CircleCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CircleSelectSchema: z.ZodType<Prisma.CircleSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  mission: z.boolean().optional(),
  description: z.boolean().optional(),
  domains: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedBy: z.boolean().optional(),
  isActive: z.boolean().optional(),
  aims: z.union([z.boolean(),z.lazy(() => CircleAimFindManyArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => CirclesToRolesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CircleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CircleCreateArgsSchema: z.ZodType<Prisma.CircleCreateArgs> = z.object({
  select: CircleSelectSchema.optional(),
  include: CircleIncludeSchema.optional(),
  data: z.union([ CircleCreateInputSchema,CircleUncheckedCreateInputSchema ]),
}).strict() ;

export default CircleCreateArgsSchema;
