import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { EthicVersionUncheckedUpdateManyWithoutEthicNestedInputSchema } from './EthicVersionUncheckedUpdateManyWithoutEthicNestedInputSchema';
import { EthicsToPersonsUncheckedUpdateManyWithoutEthicNestedInputSchema } from './EthicsToPersonsUncheckedUpdateManyWithoutEthicNestedInputSchema';

export const EthicUncheckedUpdateInputSchema: z.ZodType<Prisma.EthicUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  shortName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coreValue: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  versions: z.lazy(() => EthicVersionUncheckedUpdateManyWithoutEthicNestedInputSchema).optional(),
  responses: z.lazy(() => EthicsToPersonsUncheckedUpdateManyWithoutEthicNestedInputSchema).optional()
}).strict();

export default EthicUncheckedUpdateInputSchema;