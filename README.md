# CrudApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Json server

Run `json-server --watch db.json` for a dev server. Navigate to `http://localhost:3000/`. To see the user data in the db.json file

## User Management System

The application has

1. Sign in page.
2. Sign up page.
3. Landing page (See other users).
4. Update profile for loggedin user.

Administrative view:

1. View all users.
2. Modify access rights.
3. Delete users.
4. Deactivate/Activate account.

## How to use the application

## Registration & Login

Users start by registering on the system, then the admin has to activate them and assign them a role before the can login.

## Roles

user or admin

## Views based on roles

## user

They can see other users that have registered on the system, on the home page.
users can also view and update their own details on the profile page.

## admin

admins can activate and de-activate users and also assign them roles.
admins can also delete users and update users' data. on the users page

admins can also view and update their profiles on the profile page.

## Admin first time login

The admin must first register on the application, then use the following default admin details:

default admin login details:
username: `Obakeng` password: `Obakeng@123`

the admin must then activate himself/ herself and assign admin role.
After getting admin rights the admin can delete the default admin account.
