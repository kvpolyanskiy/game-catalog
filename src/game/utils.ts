/* eslint-disable no-param-reassign */
function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
export function getRandomItemsOfArray<T>(array: T[], count: number) {
  if (array.length <= count) {
    return array;
  }

  return shuffle(array).slice(0, count);
}
