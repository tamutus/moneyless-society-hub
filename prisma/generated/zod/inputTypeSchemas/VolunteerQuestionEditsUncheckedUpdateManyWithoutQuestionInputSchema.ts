import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionInput> = z.object({
  editorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionInputSchema;
