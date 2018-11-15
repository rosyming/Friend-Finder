# Friend-Finder
### GATech Coding Bootcamp Homework: Friend Finder - Node and Express Servers
Updated: 11/10/18

- - -
### Overview
Developed a compatibility-based application called "FriendFinder". FriendFinder is a simple dating app. This full-stack site takes in results from users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

Express is used to handle routing and is deployed to Heroku for users to fill out.


- - -
### How to Operate the App
1. Start the survey by clicking "Go To Survery" button

2. Enter in a User Name and a link to a photo

3. Answer each of the 10 questions by selecting an option on a scale of 1 to 5 with 1 being Strongly Disagree and 5 being Strongly Agree.

4. Click submit to calculate your friend match.  A pop-up will appear with the name and image of a person that you most closely match with.

- - -
### Calculations
* Each user's results are converted into a simple array of numbers
* The difference between the current user's scores are compared and calculated against those from other users, question by question. 
* The differences are then added up to calculate a Total Difference score. 
* The closest match will be the user with the least amount of difference.

- - -
### Technologies Used
1. html
2. JavaScript
3. jQuery
4. Node.js
5. NPMs and APIs: Express npm

- - -
### Repository
* https://github.com/rosyming/Friend-Finder





