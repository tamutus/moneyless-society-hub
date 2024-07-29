import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicVersionUncheckedCreateWithoutResponsesInputSchema: z.ZodType<Prisma.EthicVersionUncheckedCreateWithoutResponsesInput> = z.object({
  id: z.number().int().optional(),
  text: z.string(),
  ethicId: z.number().int(),
  submitterId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default EthicVersionUncheckedCreateWithoutResponsesInputSchema;
