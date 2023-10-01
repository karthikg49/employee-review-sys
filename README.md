# Employee-Review-System
This Employee review web application is created for employees to submit feedback toward each other's performance. User's could have either "employee" or "admin" role. There are two dashboard pages based on the role of the employee those dashboard pages will be rendered, User with role of admin can assign employees to participate in review of other employees. Employees can only submit feedback required by assigned reviews.


# Live

https://employee-review-sys-m8vw.onrender.com


## Inside this project
### From Admin's panel
- Add employee
- Delete employee
- Update employee details
- Assign review to employee
- Update review of employee

### From Employee's panel
- Submit reviews assigned to it
- View reviews given by others

To install and run the application, follow the steps below:
1. Clone the repository 
2. Navigate to the project directory
3. Install the dependencies - `npm install`
4. Create a `.env` file in the root directory with the following environment variables: -
    - `PORT=7000`
    - `MONGODB_URI=<your_mongodb_uri>`
5. Start the server: `npm start`
6. Open the app in your web browser at `http://localhost:7000`
 
## Tech Stack
- NodeJS
- MongoDB
- ExpressJS
- EJS
- Bootstrap

## Libraries:

- bcryptjs
- connect-flash
- connect-mongo
- cookie-parser
- dotenv
- ejs
- express
- express-ejs-layout
- express-session
- mongoose
- passport
- passport-jwt
- passport-local
