Approach

- I chose to use the context api to slice the state into two parts: all items and selected for preview items

- Data is persisted on the back end: introduced additional endpoints to add and remove items from the selected list. Remove functionality partially working, but I hope my approach demonstrates the direction how I decided to update the collections of data

To improve

- Test coverage isn't great, due to limited time tests are not completed, but I added a few test scenarios to demonstrate the the knowledge of testing in general and I wish I could add more examples to test cases involving post/get/delete of new endpoints

- When you add and item to the preview section you need to refresh the page in order to see the cards (needs more work)

- Currently you can add duplicated cards to the preview list - this can be improved by only allowing to add one type of card
