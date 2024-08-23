import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const RoleEditsUncheckedUpdateManyWithoutEditorInputSchema: z.ZodType<Prisma.RoleEditsUncheckedUpdateManyWithoutEditorInput> = z.object({
  roleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default RoleEditsUncheckedUpdateManyWithoutEditorInputSchema;