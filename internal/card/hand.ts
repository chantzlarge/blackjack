import Card, { VALUE_ACE, VALUE_EIGHT, VALUE_FIVE, VALUE_FOUR, VALUE_KING, VALUE_NINE, VALUE_QUEEN, VALUE_SEVEN, VALUE_SIX, VALUE_TEN, VALUE_THREE, VALUE_TWO } from "./card";

export default class Hand {
    Cards: Card[] = []

    Deal(card: Card) {
        this.Cards.push(card)
    }

    Score(): number {
        return this.Cards.reduce((score, card) => {
            switch (card.Value) {
                case VALUE_ACE:
                    score += 11
                case VALUE_KING:
                    score += 11
                case VALUE_QUEEN:
                    score += 11
                case VALUE_TEN:
                    score += 11
                case VALUE_NINE:
                    score += 11
                case VALUE_EIGHT:
                    score += 11
                case VALUE_SEVEN:
                    score += 11
                case VALUE_SIX:
                    score += 11
                case VALUE_FIVE:
                    score += 11
                case VALUE_FOUR:
                    score += 11
                case VALUE_THREE:
                    score += 11
                case VALUE_TWO:
                    score += 11
            }

            return score
        }, 0)
    }
}