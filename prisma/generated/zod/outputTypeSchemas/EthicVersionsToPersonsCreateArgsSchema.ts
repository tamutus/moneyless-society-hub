import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionsToPersonsIncludeSchema } from '../inputTypeSchemas/EthicVersionsToPersonsIncludeSchema'
import { EthicVersionsToPersonsCreateInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsCreateInputSchema'
import { EthicVersionsToPersonsUncheckedCreateInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsUncheckedCreateInputSchema'
import { EthicVersionArgsSchema } from "../outputTypeSchemas/EthicVersionArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EthicVersionsToPersonsSelectSchema: z.ZodType<Prisma.EthicVersionsToPersonsSelect> = z.object({
  ethicVersionId: z.boolean().optional(),
  personId: z.boolean().optional(),
  consent: z.boolean().optional(),
  commentary: z.boolean().optional(),
  ethicVersion: z.union([z.boolean(),z.lazy(() => EthicVersionArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const EthicVersionsToPersonsCreateArgsSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateArgs> = z.object({
  select: EthicVersionsToPersonsSelectSchema.optional(),
  include: EthicVersionsToPersonsIncludeSchema.optional(),
  data: z.union([ EthicVersionsToPersonsCreateInputSchema,EthicVersionsToPersonsUncheckedCreateInputSchema ]),
}).strict() ;

export default EthicVersionsToPersonsCreateArgsSchema;