# Node.js-Information

## Description

A RESTful API for an Information website

## Endpoint map

- GET all articles '/api/articles'
- GET a specific article '/api/articles/:id'
- POST an article '/api/articles'
- DELETE an article '/api/articles/:id'
- UPDATE an article '/api/articles/:id'
- GET all interactions on an article '/api/articles/:id/interactions'
- GET a specific interactions on an article '/api/articles/:id/interactions/:interactionID'
- POST an interaction '/api/articles/:id/interactions'
- DELETE an interaction '/api/articles/:id/interactions/:interactionID'
- UPDATE an interaction '/api/articles/:id/interactions/:interactionID'
- GET all users '/api/users/'
- GET a specific user '/api/users/:id'
- POST a user '/api/users'
- DELETE a user '/api/users/:id'
- UPDATE a user '/api/user/:id'

## Technology Stack

- Node.js
- Express.js
- MongoDB

## Deployment

```shell
git clone https://github.com/LucaPersini/Node.js-Information
npm init
```

Then run with

```shell
nodemon index.js
```

## Backgound & Motivation

Then goal of this project is for me to learn and put into practice new technologies and tools. This includes:

- Getting more familiar with Node.js
- First time using Express.js
- First time using MongoDB
