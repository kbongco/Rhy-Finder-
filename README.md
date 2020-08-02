### Overview

_**Rhy-Finder** 
(Pronounced as 'Y-Finder')
Arcades are a thing of the past, and when you find one you often can find only the big ones such as Dave and Busters and for kids, Chuck E Cheese.  However, a niche community of gamers still often go to arcades, this community is the community of rhythm gamers. 

Rhythm gamers enjoy, as the name implies Japanese music games. Game such as these include the most well known one, Dance Dance Revolution and some lesser known ones such as JuBeat, IIDX, Dance Rush Stardom, just to name a few. This app will show the locations of arcades as well as the machines that some of these arcades have. 



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
| AirTable API|      yes      | #####| ####|
| Yelp API    |      yes      | http://www.yelp.com | #####|
| MapBox API  |      yes      |https://www.mapbox.com/| ####|


<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
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
| ArcadeDetail       | functional |   n  |   y   | This will give machine/arcade details            |


<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

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
| Create Dummy Data in Airtable |    H     |     2 hrs      |     TBD     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     TBD     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>



### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

-Add more CRUD functionality with delete and update functionality
-Add another component for the various machines in the arcade to check status and quality of machine
-do something with the map API to search by current location 


<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.