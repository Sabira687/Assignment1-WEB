# Express CRUD API

## Project description

* This project is a simple backend API built with Node.js and Express. It demonstrates basic CRUD (Create, Read, Update, Delete) operations and uses a local JSON file for data storage instead of a database.

The API works with a list of tasks. Each task contains an id and a name. All routes are tested using Postman.

 <hr> 

## How to install dependencies
1.	Open a terminal in the project folder.
2.	Run the following command:

``` bash 
npm install
```

This command installs all required dependencies listed in package.json.

<hr>

## How to run the server

After installing dependencies, start the server with:

``` bash 
npm start
```

If the server starts successfully, you will see a message indicating that it is running on port 3000.

The base URL of the server is:

http://localhost:3000

<hr>

## List of API routes

Demo routes
* GET / — returns a message confirming that the server is running
* GET /hello — returns a greeting message in JSON format
* GET /time — returns the current server time
* GET /status — returns status 200 OK

Task routes
* GET /tasks — returns all tasks
* POST /tasks — creates a new task
* PUT /tasks/:id — updates an existing task by id
* DELETE /tasks/:id — deletes a task by id

<hr>

## Example Postman requests

* Create a task

POST /tasks

Body (JSON):

```
{
"name": "Buy milk"
}
```

<hr>

* Update a task

PUT /tasks/:id

Body (JSON):

```
{
"name": "Buy bread"
}
```

<hr>

* Delete a task

DELETE /tasks/:id

<hr>

* Get all tasks

GET /tasks