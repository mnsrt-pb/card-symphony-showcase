// Updated with static imports
// Back images
// NOTE: Original image imports removed for copyright compliance
/*
  import back1a from "../assets/Back/back-1a.png";
  import back1b from "../assets/Back/back-1b.png";
  import back2a from "../assets/Back/back-2a.png";
  import back2b from "../assets/Back/back-2b.png";
  import back3a from "../assets/Back/back-3a.png";
  import back3b from "../assets/Back/back-3b.png";
*/

// Background images
/*
  import bg2 from "../assets/Background/2.png";
  import bg3 from "../assets/Background/3.png";
  import bg6 from "../assets/Background/6.png";
  import bg7 from "../assets/Background/7.png";
  import bg8 from "../assets/Background/8.png";
  import bg12 from "../assets/Background/12.png";
  import bg16 from "../assets/Background/16.png";
  import bg18 from "../assets/Background/18.png";
  import bg21 from "../assets/Background/21.png";
  import bg24 from "../assets/Background/24.png";
  import bg28 from "../assets/Background/28.png";
  import bg29 from "../assets/Background/29.png";
  import bg30 from "../assets/Background/30.png";
  import bg35 from "../assets/Background/35.png";
  import bg39 from "../assets/Background/39.png";
  import bg40 from "../assets/Background/40.png";
*/

// Deck images - Numbers
/*
  import card1Clubs from "../assets/Deck/1-clubs-red.png";
  import card1Diamonds from "../assets/Deck/1-diamonds-red.png";
  import card1Hearts from "../assets/Deck/1-hearts-red.png";
  import card1Spades from "../assets/Deck/1-spades-red.png";
  import card2Clubs from "../assets/Deck/2-clubs-red.png";
  import card2Diamonds from "../assets/Deck/2-diamonds-red.png";
  import card2Hearts from "../assets/Deck/2-hearts-red.png";
  import card2Spares from "../assets/Deck/2-spares-red.png";
  import card3Clubs from "../assets/Deck/3-clubs-red.png";
  import card3Diamonds from "../assets/Deck/3-diamonds-red.png";
  import card3Hearts from "../assets/Deck/3-hearts-red.png";
  import card3Spares from "../assets/Deck/3-spares-red.png";
  import card4Clubs from "../assets/Deck/4-clubs-red.png";
  import card4Diamonds from "../assets/Deck/4-diamonds-red.png";
  import card4Hearts from "../assets/Deck/4-hearts-red.png";
  import card4Spares from "../assets/Deck/4-spares-red.png";
  import card5Clubs from "../assets/Deck/5-clubs-red.png";
  import card5Diamonds from "../assets/Deck/5-diamonds-red.png";
  import card5Hearts from "../assets/Deck/5-hearts-red.png";
  import card5Spares from "../assets/Deck/5-spares-red.png";
  import card6Clubs from "../assets/Deck/6-clubs-red.png";
  import card6Diamonds from "../assets/Deck/6-diamonds-red.png";
  import card6Hearts from "../assets/Deck/6-hearts-red.png";
  import card6Spares from "../assets/Deck/6-spares-red.png";
  import card7Clubs from "../assets/Deck/7-clubs-red.png";
  import card7Diamonds from "../assets/Deck/7-diamonds-red.png";
  import card7Hearts from "../assets/Deck/7-hearts-red.png";
  import card7Spares from "../assets/Deck/7-spares-red.png";
  import card8Clubs from "../assets/Deck/8-clubs-red.png";
  import card8Diamonds from "../assets/Deck/8-diamonds-red.png";
  import card8Hearts from "../assets/Deck/8-hearts-red.png";
  import card8Spares from "../assets/Deck/8-spares-red.png";
  import card9Clubs from "../assets/Deck/9-clubs-red.png";
  import card9Diamonds from "../assets/Deck/9-diamonds-red.png";
  import card9Hearts from "../assets/Deck/9-hearts-red.png";
  import card9Spares from "../assets/Deck/9-spares-red.png";
  import card10Clubs from "../assets/Deck/10-clubs-red.png";
  import card10Diamonds from "../assets/Deck/10-diamonds-red.png";
  import card10Hearts from "../assets/Deck/10-hearts-red.png";
  import card10Spares from "../assets/Deck/10-spares-red.png";
*/

// Face cards
/*
  import jackClubs from "../assets/Deck/jack-clubs-red.png";
  import jackDiamonds from "../assets/Deck/jack-diamonds-red.png";
  import jackHearts from "../assets/Deck/jack-hearts-red.png";
  import jackSpades from "../assets/Deck/jack-spades-red.png";
  import queenClubs from "../assets/Deck/queen-clubs-red.png";
  import queenDiamonds from "../assets/Deck/queen-diamonds-red.png";
  import queenHearts from "../assets/Deck/queen-hearts-red.png";
  import queenSpades from "../assets/Deck/queen-spades-red.png";
  import kingClubs from "../assets/Deck/king-clubs-red.png";
  import kingDiamonds from "../assets/Deck/king-diamonds-red.png";
  import kingHearts from "../assets/Deck/king-hearts-red.png";
  import kingSpares from "../assets/Deck/king-spares-red.png";
*/

// Export arrays
/*
  export function loackBack() {
    return [back1a, back1b, back2a, back2b, back3a, back3b];
  }

  export function loadBg() {
    return [
      bg2, bg3, bg6, bg7, bg8, bg12, bg16, bg18, bg21, bg24, 
      bg28, bg29, bg30, bg35, bg39, bg40
    ];
  }

  export function loadDeck() {
    return [
      card1Clubs, card1Diamonds, card1Hearts, card1Spades,
      card2Clubs, card2Diamonds, card2Hearts, card2Spares,
      card3Clubs, card3Diamonds, card3Hearts, card3Spares,
      card4Clubs, card4Diamonds, card4Hearts, card4Spares,
      card5Clubs, card5Diamonds, card5Hearts, card5Spares,
      card6Clubs, card6Diamonds, card6Hearts, card6Spares,
      card7Clubs, card7Diamonds, card7Hearts, card7Spares,
      card8Clubs, card8Diamonds, card8Hearts, card8Spares,
      card9Clubs, card9Diamonds, card9Hearts, card9Spares,
      card10Clubs, card10Diamonds, card10Hearts, card10Spares,
      jackClubs, jackDiamonds, jackHearts, jackSpades,
      queenClubs, queenDiamonds, queenHearts, queenSpades,
      kingClubs, kingDiamonds, kingHearts, kingSpares
    ];
  }
*/


// Return placeholder data for showcase
export function loadDeck(): string[] {
  return [
    "A♠", "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠",
    "A♥", "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥",
    "A♦", "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♦",
    "A♣", "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣"
  ];
}

export function loackBack(): string[] {
  return Array(6).fill('BACK');
}

export function loadBg(): string[] {
  return Array(6).fill('PLACEHOLDER_BG');
}