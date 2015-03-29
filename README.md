##Multi parent graph

Multi parent graph demo could be found here: [mkozhukharenko.github.io/multi-parent-graph] [1]


#### Descriptions

Multi parent graph presented as a complex questionnaire in which almost every questions has two or more parents. After a series of questions conclusion appears.

E.g.:
How many free space do you have in your apartment? 
  1) a lot;
  2) a little;

If option 1 is picked appears next question:
Which product are you considering to be more useful?
  1) eggs;
  2) milk;

If option 1 is picked appears conclusion:
"Feel free to buy a cow and keep in his apartment".

#### Data structure example

```
[
  { 
    id: 1,
    questions: "How many free space do you have in your apartmen? ",
    options: [
      {
        userPick: "a lot",
        moveTo: 2
      },
      {
        userPick: "a little",
        moveTo: 4
      }
    ] 
  },
  { 
    id: 2,
    questions: "Which product are you considering to be more useful?",
    options: [
      {
        userPick: "eggs",
        moveTo: 3
      },
      {
        userPick: "milk",
        moveTo: 5
      }
    ] 
  },
  { 
    id: 3,
    result: "Feel free to buy a cow and keep in his apartment"
  }
]
```

#### Used technologies
pure JS

#### App directory Layout
```                  
img/          
  treeImg3.jpg          --> questions structure img
css/                 
  main.css           --> default stylesheet
  showImg.css           
js/            
  data.js            --> data (array of questions)
  main.js            --> main logic
  showImg.js         
index.html            --> the main html 
```

 [1]: http://mkozhukharenko.github.io/multi-parent-graph/
 [2]: http://www.theguardian.com/uk
 [3]: http://open-platform.theguardian.com/
