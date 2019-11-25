export enum LeaderboardColumnEnum {
	xpGained,
	coinGained,
	vipcurrencyGained,
	levelsGained,
	missionsCompleted,
	missionObjectivesCompleted,
	achievementsCompleted,
	achievementTiersCompleted,
	shopItemsPurchased,
	coinSpent,
	vipcurrencySpent,
}
export type LeaderboardColumn = keyof typeof LeaderboardColumnEnum
