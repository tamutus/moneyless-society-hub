import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicsToPersonsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EthicsToPersonsAvgOrderByAggregateInput> = z.object({
  ethicId: z.lazy(() => SortOrderSchema).optional(),
  ranking: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicsToPersonsAvgOrderByAggregateInputSchema;
