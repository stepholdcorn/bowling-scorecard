Bowling Scorecard
=======================

## Synopsis

### Counts and sums the scores of a bowling game of one player (in Javascript).

A bowling game consists of 10 frames in which the player tries to knock down 10 pins. In every frame the player can throw one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Technologies Used

- JavaScript
- JQuery
- Jasmine
- HTML
- CSS

## Job List

- [x] Frame: Allows two numbers to be entered.
- [x] Strike: The frame ends immediately. The bonus for that frame is the number of pins knocked down by the next two rolls.
- [x] Spare: The bonus for that frame is the number of pins knocked down by the next roll (first role of next frame).
- [ ] 10th game: If the player rolls a strike or spare in the 10th frame she can roll the additional balls for the bonus. But she can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus- not for the regular frame count.

## Still to complete/refactor

- [ ] 10th game (including a perfect game and a gutter game).

## Takeaway

I would like to try to redo this task using separate files for each section of JavaScript to keep the project cleaner.
