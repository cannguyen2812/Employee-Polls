# Employee Polls Project

This project is an application that allow employee can create Poll to get what option is better. 

## Data
There are two types of objects stored in our database:

* Users
* Questions

## TL;DR

To get started developing right away:
- go to the main source: `cd employee-polls`
- install all project dependencies with `npm install`
- start the development server with `npm start`
- run test: `npm run test`

## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    └── actions
        ├──  init.js # This is action to fetch all data.  
        ├──  loading.js # This is action for loading
        ├──  login.js # This is action for login
        ├──  question.js # This is action for question
        └──  user.js # This is action for user
    └── Components
        ├──  App.js # This is the file root contant Routes  
        ├──  Home.js # This is the file for Home Page
        ├──  LeaderBoard.js # This is the file for LeaderBoard Page
        ├──  Login.js # This is the file for Login Page
        ├──  NewQuestion.js # This is the file for NewQuestion Page
        ├──  NotFound.js # This is the file for NotFound Page
        ├──  PageLayout.js # This is the file for PageLayout
        ├──  Question.js # This is the file for Question Page
        └──  QuestionDetail.js # This is the file for QuestionDetail Page
    └── middleware 
        ├──  index.js 
        └──  logger.js 
    └── reducers 
        ├──  index.js #This is the file to combine all reducers
        ├──  loading.js 
        ├──  login.js 
        ├──  question.js 
        └──  user.js 
    └── shared 
        ├──  _Data.js #This is the file contain data from UDACITY
        ├──  api.js  #This is the file function to get, update data
        └──  helper.js #This is the file function to help format data
    └── styles # Styles for the whole app
        ├── App.css
        ├── Home.css
        ├── LeaderBoard.css
        ├── Login.css
        ├── NewQuestion.css
        ├── NotFound.css
        ├── PageLayout.css
        ├── Question.css
        └── QuestionDetail.css
    └── tests
        └── _snapshots_ #the folder to save snapshots
            ├── LeaderBoard.test.js.snap
            └── Login.test.js.snap
        ├── api.test.js 
        ├── helper.test.js 
        ├── LeaderBoard.test.js 
        ├── Login.test.js 
        └── NewQuestion.test.js 
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── reportWebVitals.js 
    └── setupTest.js # You should not need to modify this file. It is used for DOM rendering only.
```

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| password   | String           | The user’s password in order to log in the application |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database. If one of the parameters are missing, an error is thrown.
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database. If one of the parameters are missing, an error is thrown.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

