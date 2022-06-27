export const shuffle = (arr) => {
  const randomSortingKeys = {};
  arr.forEach(({ name }) => (randomSortingKeys[name] = Math.random()));
  arr.sort((a, b) => randomSortingKeys[a.name] - randomSortingKeys[b.name]);
};
