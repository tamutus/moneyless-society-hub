import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';

export const OnboardingStepsToPersonsUncheckedUpdateWithoutStepInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUncheckedUpdateWithoutStepInput> = z.object({
  personId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  complete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  doesOnboarding: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default OnboardingStepsToPersonsUncheckedUpdateWithoutStepInputSchema;