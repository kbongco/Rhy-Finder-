### Rhy-Finder

**Rhy-Finder** 
(Pronounced as 'Y-Finder')
Arcades were a big hit in the 80s and 90s, then in the early 2000s with the costs rising as well as home systems being extremely popular, arcades 
began to die out. Nowadays, you mostly find big name arcades with bars such as Dave and Busters, while there are still arcades around they're pretty much a commodity. A small community of gamers still enjoy going to regular arcades because of the game selection, this community is the rhythm gamers.

Rhythm gamers enjoy, as the name implies Japanese music games. Game such as these include the most well known one, Dance Dance Revolution and some lesser known ones such as JuBeat, IIDX, Dance Rush Stardom, just to name a few. Since these games are such a rare find in arcades and the fact that arcades are a rare find nowadays, I came up with the idea of "Rhy-finder!", an app to help locate arcades as well as the rarer games you don't see everyday. 


### Wireframes

*WireFrames can be found in asset folder*

<br>

### MVP/Goals

Rhy-Finder's MVP's are:<br>
-to have a map showing various arcades in the NJ/NY area<br>
-have a search bar for searching various arcades and their locations<br>
-have a working form for people to add locations/machines<br>
-have a detailed page working showing arcade and machines<br>


<br>


#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | For links |
|   React Table    | Have data from form organized  |
|   React Map GL   | To have help maps show locations |
|  StyledComponents  | Help Styling for app  |


<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| AirTable API|      yes      |http://www.airtable.com| ####|
| Yelp API    |      yes      | http://www.yelp.com | |
| MapBox API  |      yes      |https://www.mapbox.com/| ####|


<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Home.js
      |__Navigation.js  
      |__ Map.js
      |__ Search.js
      |__ AllLocations.js
      |__ AddArcade.jsx
      |__ AddMachine.jsx
      |__ ArcadeDetail.js
      |__ DisplayMachine.js

      
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Home      | functional |   n   |   n   | Will contain navigation and information              |
|  Navigation  | functional |   n   |   n   | Navigation will provide links to page       |
|   Search   |   functional   |   y   |   n   | A search bar to help search arcades      |
| Map          | functional |   y   |   y   | The map component will show the locations               |
|    AllLocations   | functional |   n   |   y   | This will show all the locations in the form of a table|
| AddArcade         | functional |   y   |   n   | This will allow people to add locations              |
| AddMachine        | functional |   y   |   n  | This is a form to add machines              |
| ArcadeDetail       | functional |   n |   y   | This will give arcade information such as machine information,address, etc         |


<br>

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Integrate Maps on page   |    H    |     4 hrs      |    TBD    |   TBD  |
| Create CRUD Actions |    H     |     3 hrs      |     TBD     |     TBD     |
| Get YELP API working |    H     |     4 hrs      |     TBD     |     TBD     |
| Create Search Bar and functionality |    M     |    3hrs     |     TBD     |     TBD     |
| Display Locations on a table  |    L    |     3 hrs      |     TBD     |     TBD     |
| Work on Add Arcade/Add Machine  |    M     |     4 hrs      |     TBD     |     TBD     |
| Work on arcade detail component |    L    |     3 hrs      |     TBD     |     TBD     |
| Designing App |    M     |     4 hrs      |     TBD     |     TBD     |
| Testing CRUD Functionaly  |    H     |     4 hrs      |     TBD     |     TBD     |
| Create Dummy Data in Airtable/Testing Airtable  |    H     |     2 hrs      |     TBD     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     TBD     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>



### Post-MVP


-Add more CRUD functionality with delete and update functionality<br>
-Add another component for the various machines in the arcade to check status and quality of machines<br>
-do something with the map API to search by current location 


<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.