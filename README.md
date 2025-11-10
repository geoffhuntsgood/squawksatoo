# Squawksatoo

A fun little app that randomly selects specific bananas for you to go and find while playing Donkey Kong Bananza. Hosted at https://geoffhuntsgood.com/squawksatoo.

## Configuration

The app will start by displaying a set of settings.

**Layer:** Allows for selection of any layer in the game.

**Include postgame:** Check to include bananas that are only available after completing the story.

**Categories:** This section shows several categories of banana, all of which are enabled by default. Click any of them to exclude them from the banana pool. For example, deselecting "Battle" will mean that no Battle Stages will be considered for the random selection.

**How many:** The number of bananas to generate, with a maximum of 5. If there are fewer than 5 bananas available for the current configuration, the maximum will be that number instead.

**Timer:** Adds an optional, pausable timer that automatically stops when the game finishes.

**Auto-refresh:** If selected, marking a banana as complete on the next page will automatically replace that banana with a new one, until all bananas have been marked as complete.

**Recycle wrong bananas:** If selected, marking a banana wrong on the next page will "recycle" that banana back into the pool for re-selection later.
This is only available when Auto-refresh is checked.

**Get Button:** Displays the number of bananas you want to select out of the total number of available bananas based on the current configuration. Clicking this button starts the game!

## Navigating the Generated List

Once the list is generated and displayed, you can start finding bananas.

**Header:** If auto-refresh was selected, the header will display the remaining number of bananas in the configured list.

**Banana List:** Each displayed banana will have a green check button and a red X button next to it. Both will mark the banana as completed, but clicking the red X will add to the wrong counter.

**Wrong Counter:** Displays the number of bananas you've marked as wrong.

**Start Over:** This button will completely reset the pool of bananas based on the previously-selected configuration, and will select the same number of bananas again.

**Reconfigure:** Returns to the settings page to reselect configuration options.
