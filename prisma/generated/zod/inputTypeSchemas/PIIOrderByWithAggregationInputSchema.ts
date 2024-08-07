import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PIICountOrderByAggregateInputSchema } from './PIICountOrderByAggregateInputSchema';
import { PIIMaxOrderByAggregateInputSchema } from './PIIMaxOrderByAggregateInputSchema';
import { PIIMinOrderByAggregateInputSchema } from './PIIMinOrderByAggregateInputSchema';

export const PIIOrderByWithAggregationInputSchema: z.ZodType<Prisma.PIIOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  legalFirstName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  legalLastName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  phoneNumber: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  discord: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PIICountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PIIMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PIIMinOrderByAggregateInputSchema).optional()
}).strict();

export default PIIOrderByWithAggregationInputSchema;
