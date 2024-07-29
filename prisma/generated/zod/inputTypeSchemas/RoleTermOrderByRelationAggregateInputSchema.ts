import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleTermOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoleTermOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleTermOrderByRelationAggregateInputSchema;
