# Getting Started with react client App

# Business Card App

Development of a web application that includes a business card management system that allows business users to publish content.
The published content will be available in different parts of the site.
Integrates CRUD functionalities to enable seamless content manipulation.
Connects with server-side APIs to ensure data persistence and synchronization.

## Installation

Enter the client folder

```bash
cd client
```

Install the node_modules

```bash
npm i
```

## Available Scripts

you can run:

### `npm run start`

- It will run the app 

## Features

- User Registration: User must register himself by filling some personal details.
- User Login: system After registration user will enter Email and password for logging in order to get access to the system.
- Search in Cards: User can search cards.
- Create Cards: Only business user and admin can create new card.
- Personal: User can edit personal details, can Edit/Delete his cards aswell.
- User: Users can liked a card.
- Card: You will see the details of the card.

## Code Features:
    
- React JS.
- Material MUI.
- Database: The database will saved in mongoDB.
- You must have a mongoDB Atlas Cluster.
- JWT Authentication.
- Authorization: 3 user roles - ["User", "Business", "Admin"].
- The website content will be saved on the server side.
- API Versioning for possiable future development.
