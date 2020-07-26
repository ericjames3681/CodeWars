// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters,
//  the string's length doesn't exceed 200 characters

// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix.
// Separate the words with a space.

// Examples
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// =>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(str) {
  return str.replace(/(WUB)+/g, " ").trim();
}

console.log(songDecoder("A B C"));
