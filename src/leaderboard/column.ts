export enum LeaderboardUserColumnEnum {
	xpGained,
	coinGained,
	vipcurrencyGained,
	teamXpGained,
	levelsGained,
	missionsCompleted,
	missionObjectivesCompleted,
	achievementsCompleted,
	achievementTiersCompleted,
	shopItemsPurchased,
	coinSpent,
	vipcurrencySpent,
}
export type LeaderboardUserColumn = keyof typeof LeaderboardUserColumnEnum
