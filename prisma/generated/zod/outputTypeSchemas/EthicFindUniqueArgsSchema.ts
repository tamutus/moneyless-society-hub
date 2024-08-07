import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicIncludeSchema } from '../inputTypeSchemas/EthicIncludeSchema'
import { EthicWhereUniqueInputSchema } from '../inputTypeSchemas/EthicWhereUniqueInputSchema'
import { EthicVersionFindManyArgsSchema } from "../outputTypeSchemas/EthicVersionFindManyArgsSchema"
import { EthicsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/EthicsToPersonsFindManyArgsSchema"
import { EthicCountOutputTypeArgsSchema } from "../outputTypeSchemas/EthicCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EthicSelectSchema: z.ZodType<Prisma.EthicSelect> = z.object({
  id: z.boolean().optional(),
  shortName: z.boolean().optional(),
  activeId: z.boolean().optional(),
  coreValue: z.boolean().optional(),
  versions: z.union([z.boolean(),z.lazy(() => EthicVersionFindManyArgsSchema)]).optional(),
  responses: z.union([z.boolean(),z.lazy(() => EthicsToPersonsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EthicCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const EthicFindUniqueArgsSchema: z.ZodType<Prisma.EthicFindUniqueArgs> = z.object({
  select: EthicSelectSchema.optional(),
  include: EthicIncludeSchema.optional(),
  where: EthicWhereUniqueInputSchema,
}).strict() ;

export default EthicFindUniqueArgsSchema;
