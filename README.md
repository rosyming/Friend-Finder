# Friend-Finder
### GATech Coding Bootcamp Homework: Friend Finder - Node and Express Servers
Updated: 11/10/18

- - -
### Overview
(old) Developed an application called LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives data back to the user. 

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

(new) Developed a compatibility-based application called "FriendFinder". FriendFinder is a simple dating app. This full-stack site takes in results from users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

Express is used to handle routing and is deployed to Heroku for users to fill out.


- - -
### How to Operate the App
1. Start node in bash terminal referencing the liri.js file (node liri.js)

2. Enter in one of these commands
    * concert-this "artist/band name here"
    * spotify-this-song "song name here"
    * movie-this "movie name here"
    * do-what-it-says

3. After the command enter in a search term related to the command. For example:
    * concert-this Lady Gaga
    * spotify-this-song Somewhere Over the Rainbow
    * movie-this Moonrise Kingdom
    * do-what-it-says (Enter in text in the random.txt file)

4. Hit return. Results will be displayed as described below:
    * concert-this will search the Bands in Town Artist Events API for the artist and will display the information for up to 5 events
    * spotify-this-song will show search the Spotify API for a the song and will display information for up to 5 songs sharing the same title. If no song is provided then the default song would be "The Sign" by Ace of Base.
    * movie-this will search the OMDB API for the movie and will display information about the movie. If no movie is provided then the default movie would be Mr. Nobody.
    * do-what-it-says will take command and search term in the random.txt file and initiate the search based upon what is written in the file for the commands listed in #3 above. The random.txt file can be altered, but only one text line should be present.

- - -
### Video of Working App
http://recordit.co/R0MFky3AVE

- - -
### Technologies Used
1. Node.js
2. NPMs and APIs: Node-Spotify-API, Request, OMDB API, Bands In Town API, Moment, DotEnv

- - -
### Repository
* https://github.com/rosyming/liri-node-app





