# Kanban Padul! 🤩

A Kanban Application that suites your team tasks progress!  
Please use it carefully! 😉

## Contributing

- **FEATURES WARNING**

   - Make sure you understand basic _**Vue.js**_ syntaxes

   - Make sure you understand _**Sequelize**_ and _**PostgreSQL**_

   - _Client_ is hosted on _**Firebase*_ while _Server_ is hosted on _**Heroku**_ 🤯  
   keep an eye for differences between those things

   - CSS is powered by [Bulma](https://bulma.io)!!🚀  
   please check their documentation for elements inside.

   - Happy Coding!

---

### Instructions

1. Clone this repo  
2. run `npm install` on server and client folder
  
- **SERVER**  

3. run `npx sequelize-cli db:create` on server folder  
**DON'T FORGET TO CONFIG YOUR DB (config.js)**
4. run `npx sequelize-cli db:migrate` then
5. run `node app.js` on your server folder  
( _server should be `http://localhost:3000`_ )  

- **CLIENT**  

6. Install `parcel-bundler` if you didn't have it yet  
( `npm install -g parcel-bundler` )  
7. go through `client/public/` folder
8. run `parcel index.html`  
( _client should be `http://localhost:1234`_ )

## Docs

### Server

- **_HTTP Methods_** (**RESTful API**) :
  
  - [Base URL](https://kanbanpadul.herokuapp.com) is https://kanbanpadul.herokuapp.com

1. **_User_**

  - POST _**BASE**/register_ :
    
    1. _Request_

    ```javascript
    {
      email : <insert_new_email>
      password : <insert_new_email>
    }
    ```

    2. _Response_

    ```javascript
    {
      status: 200,
      message : <success_message>
    }
    ```

  - POST _**BASE**/login_ :
    
    1. _Request_

    ```javascript
    {
      email : <insert_new_email>
      password : <insert_new_email>
    }
    ```

    2. _Response_

    ```javascript
    {
      status: 200,
      message : <success_message>
    }
    ```

    3. _Error Response_

    ```javascript
    
    // for 404

    {
      status: 404,
      message : <user_not_found>
    }
    ```

    ```javascript
    
    // for 403

    {
      status: 403,
      message : <forbidden_access_wrong_password>
    }
    ```

  ---

2. **_Tasks_**

  - [Tasks Base URL](https://kanbanpadul.herokuapp.com/tasks) is https://kanbanpadul.herokuapp.com/tasks

  - GET _**TASKS**/_ :
    
    1. _Response_

    ```javascript
    {
      status: 200,
      tasks : <arrays_of_objects_within_tasks_from_db>
    }
    ```

    2. _Error Response_

    ```javascript
    {
      status: 404,
      message : <tasks_not_found>
    }
    ```

  - POST _**TASKS**/_ :

    1. _Request_

    ```javascript
    // REQUIRES AUTHENTICATION AND AUTHORIZATION

    {
      title : <title_input>,
      category : <category_input>,
      UserId : <auto_get_user_id_from_auths>
    }
    ```

    2. _Response_

    ```javascript
    // REQUIRES AUTHENTICATION AND AUTHORIZATION

    {
      status: 201,
      message: <success_message>
    }
    ```

    3. _Error Response_

    ```javascript
    // for 400

    {
      status: 400,
      message: <bad_request_from_inputs>
    }
    ```

    ```javascript
    // for 403

    {
      status: 403,
      message: <forbidden_to_non_users>
    }
    ```

  - GET _**TASKS**/:id_ :
    
    1. _Response_

    ```javascript
    // REQUIRES AUTHENTICATION AND AUTHORIZATION

    {
      status: 200,
      task : <get_one_obj_of_task>
    }
    ```

    2. _Error Response_

    ```javascript
    // for 404

    {
      status: 404,
      message : <task_not_found>
    }
    ```

    ```javascript
    // for 403

    {
      status: 403,
      message : <access_denied_for_non_task_creator>
    }
    ```

  - PUT _**TASKS**/:id_ :

    1. _Request_

    ```javascript
    // REQUIRES AUTHENTICATION AND AUTHORIZATION

    {
      title : <title_input>,
      category : <category_input>,
      UserId : <auto_get_user_id_from_auths>
    }
    ```

    2. _Response_

    ```javascript
    // REQUIRES AUTHENTICATION AND AUTHORIZATION

    {
      status: 201,
      message: <success_message>
    }
    ```

    3. _Error Response_

    ```javascript
    // for 400

    {
      status: 400,
      message: <bad_request_from_inputs>
    }
    ```

    ```javascript
    // for 404

    {
      status: 404,
      message: <task_not_found>
    }
    ```

    ```javascript
    // for 403

    {
      status: 403,
      message: <forbidden_to_non_users>
    }
    ```

  - DELETE _**TASKS**/:id_ :

    1. _Response_

    ```javascript
    // REQUIRES AUTHENTICATION AND AUTHORIZATION

    {
      status: 201,
      message: <success_message>
    }
    ```

    2. _Error Response_

    ```javascript
    // for 400

    {
      status: 400,
      message: <bad_request_from_inputs>
    }
    ```

    ```javascript
    // for 404

    {
      status: 404,
      message: <task_not_found>
    }
    ```

    ```javascript
    // for 403

    {
      status: 403,
      message: <forbidden_to_non_users>
    }
    ```

### Client

- _**URL**_ 

  > https://kanban-padul.web.app

  - [ Click Here! 🤠 ](https://kanbanpadul.web.app)
