import { GenericTranslation, GenericTranslations } from "../components/translations"

export interface MissionTranslation extends GenericTranslation {
	mission: string
	objectives: string
}

export const MissionTranslations: MissionTranslation = {
	...GenericTranslations,
	mission: "Mission",
	objectives: "Objectives",
}
