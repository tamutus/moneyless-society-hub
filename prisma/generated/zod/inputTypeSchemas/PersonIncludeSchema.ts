import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PIIArgsSchema } from "../outputTypeSchemas/PIIArgsSchema"
import { RoleTermFindManyArgsSchema } from "../outputTypeSchemas/RoleTermFindManyArgsSchema"
import { EthicVersionFindManyArgsSchema } from "../outputTypeSchemas/EthicVersionFindManyArgsSchema"
import { EthicsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/EthicsToPersonsFindManyArgsSchema"
import { EthicVersionsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/EthicVersionsToPersonsFindManyArgsSchema"
import { CirclesToRolesFindManyArgsSchema } from "../outputTypeSchemas/CirclesToRolesFindManyArgsSchema"
import { VolunteerResponseFindManyArgsSchema } from "../outputTypeSchemas/VolunteerResponseFindManyArgsSchema"
import { OnboardingStepsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/OnboardingStepsToPersonsFindManyArgsSchema"
import { AvailabilityFindManyArgsSchema } from "../outputTypeSchemas/AvailabilityFindManyArgsSchema"
import { VolunteerQuestionEditsFindManyArgsSchema } from "../outputTypeSchemas/VolunteerQuestionEditsFindManyArgsSchema"
import { RoleEditsFindManyArgsSchema } from "../outputTypeSchemas/RoleEditsFindManyArgsSchema"
import { CircleAimEditsFindManyArgsSchema } from "../outputTypeSchemas/CircleAimEditsFindManyArgsSchema"
import { PersonCountOutputTypeArgsSchema } from "../outputTypeSchemas/PersonCountOutputTypeArgsSchema"

export const PersonIncludeSchema: z.ZodType<Prisma.PersonInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  personalInfo: z.union([z.boolean(),z.lazy(() => PIIArgsSchema)]).optional(),
  roleTerms: z.union([z.boolean(),z.lazy(() => RoleTermFindManyArgsSchema)]).optional(),
  valuesWritten: z.union([z.boolean(),z.lazy(() => EthicVersionFindManyArgsSchema)]).optional(),
  valueRankings: z.union([z.boolean(),z.lazy(() => EthicsToPersonsFindManyArgsSchema)]).optional(),
  valueResponses: z.union([z.boolean(),z.lazy(() => EthicVersionsToPersonsFindManyArgsSchema)]).optional(),
  circleRoles: z.union([z.boolean(),z.lazy(() => CirclesToRolesFindManyArgsSchema)]).optional(),
  volunteerResponses: z.union([z.boolean(),z.lazy(() => VolunteerResponseFindManyArgsSchema)]).optional(),
  volunterResponsesImported: z.union([z.boolean(),z.lazy(() => VolunteerResponseFindManyArgsSchema)]).optional(),
  onboarding: z.union([z.boolean(),z.lazy(() => OnboardingStepsToPersonsFindManyArgsSchema)]).optional(),
  availability: z.union([z.boolean(),z.lazy(() => AvailabilityFindManyArgsSchema)]).optional(),
  volunteerQuestionEdits: z.union([z.boolean(),z.lazy(() => VolunteerQuestionEditsFindManyArgsSchema)]).optional(),
  roleEdits: z.union([z.boolean(),z.lazy(() => RoleEditsFindManyArgsSchema)]).optional(),
  circleAimEdits: z.union([z.boolean(),z.lazy(() => CircleAimEditsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PersonCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PersonIncludeSchema;