// Texas Hold-em!

// Your task is to determine if the cards in the list makes up a straight
// (five cards of sequential rank) or not. The cards will always have values
// ranging from 2-14, where 14 is the ace.

// Be aware that the ace (14) also should count as value 1!

// The number of cards will vary, but will never be more than 7
// (the board (5) + player hand (2))

// Examples:

// straight: 9-10-11-12-13

// straight: 14-2-3-4-5

// straight: 2-7-8-5-10-9-11

// not straight: 7-8-12-13-

function isStraight(cards) {
  cards = [...new Set(cards)];
  const cards1 = cards.sort((a, b) => a - b);
  const cards2 = cards.map((x) => (x == 14 ? 1 : x)).sort((a, b) => a - b);
  for (let j = 0; j < cards.length - 4; j++)
    if (
      [cards1, cards2].some((cards) =>
        [j + 1, j + 2, j + 3, j + 4].every((i) => cards[i] - cards[i - 1] == 1)
      )
    )
      return true;
  return false;
}
console.log(isStraight([1, 2, 3, 4, 5]));
