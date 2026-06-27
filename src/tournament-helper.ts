import colors, { getContrastingColor } from './colors.ts';
import type { Match, UnseededPlayer, Player } from './types.ts';

const PLAYER_COUNT = 64; // TODO: allow an arbitrary number of elements
const SEED_ORDER = [
  0, 31, 16, 15, 8, 23, 24, 7, 4, 27, 20, 11, 12, 19, 28, 3, 2, 29, 18, 13, 10, 21, 26, 5, 6, 25, 22, 9, 14, 17, 30, 1,
]; // TOOD: Calculate this with a formula to support arbitary tournament sizes
const MATCHES_COUNT = [0, 32, 16, 8, 4, 2, 1];

export function getRound(matchNumber: number): number {
  return 6 - Math.floor(Math.log(PLAYER_COUNT - matchNumber - 1) / Math.log(2)); // TODO: update the magic number 7
}

export function getMatchesCount(round: number): number {
  return MATCHES_COUNT[round];
}

export function getRoundOffset(round: number): number {
  let offset = 0;
  for (let i = 0; i < round; i++) {
    offset = offset + getMatchesCount(i);
  }

  return offset;
}

export function createMatches(players: UnseededPlayer[]): Match[] {
  // Verify the players
  if (players.length !== PLAYER_COUNT) {
    throw new Error(`Expected ${PLAYER_COUNT} players but ${players.length} were provided.`);
  }

  // New array of matches
  const matches = new Array<Match>();

  // Link the matches
  for (let i = 0; i < PLAYER_COUNT - 1; i++) {
    const round = getRound(i);
    const thisRoundOffset = getRoundOffset(round);
    const nextRoundOffset = getRoundOffset(round + 1);
    matches.push({
      nextMatch: nextRoundOffset + Math.floor((i - thisRoundOffset) / 2),
      round: round,
    });
  }

  // Make sure each player has a color
  players.forEach((player, index) => {
    if (player.background === undefined) {
      player.background = colors[index];
      player.foreground = getContrastingColor(colors[index]);
    }
  });

  // If every player has a score, then we can sort by that
  if (players.every((player) => player.score !== undefined)) {
    (players as (Player & { score: number })[]).sort((a, b) => b.score - a.score);

    // Otherwise, just randomize the list
  } else {
    players = shuffle(players);
  }

  // Seed the players
  const seededPlayers = players.map((player, index) => ({ ...player, seed: index + 1 }));

  // Put in the initial round players
  for (let i = 0; i < PLAYER_COUNT / 2; i++) {
    const seedIndex = SEED_ORDER[i];
    matches[i].player1 = seededPlayers[seedIndex];
    matches[i].player2 = seededPlayers[PLAYER_COUNT - 1 - seedIndex];
  }

  return matches;
}

function shuffle<T>(array: T[]): T[] {
  const result = [...array];

  for (let index = result.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }

  return result;
}
