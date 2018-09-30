# eaa-test-client-kgreen

## Description

Front-end application handles requests and responses through Angular components implementing CRUD client interfaces for a Person model. The Person model contains an auto-generated ID (server-side), first name, last name, and email address.

```
{
  "id":"e2201e76-a13b-459b-9602-9bc29a264702",
  "givenname":"Charlie",
  "surname":"Brown",
  "email":"charlie.brown@peanuts.org"
},
{
  "id":"a8e9e15b-f1ac-4a63-b187-a538dfd5bce4",
  "givenname":"Lucy",
  "surname":"VanPelt",
  "email":"lucy.vanpelt@peanuts.org"
}
```

## Development Server

Run `ng serve` for a dev server.

### List All

Request all Person records from the server and present as a List of Person cards.  Navigate to `http://localhost:4200/`.

Option from List page:
* Create Person (plus icon)

Options from Person card:
* Update Person (pencil icon)
* Delete Person (trash can icon)

### Create Person

Create a new Person by selecting the plus icon on the List page or navigate to `http://localhost:4200/person/`.

Options from Person page:
* Cancel (cancel button)
* Save (save button)

### Update Person

Update an existing Person by selecting the pencil icon in the Person card on the List page or navigate to `http://localhost:4200/person/{id}`. The id displays as Employee Identifier but cannot be changed. 

Options from Person page:
* Cancel (cancel button)
* Save (save button)

## Development Environment

This project created in [eclipse](https://www.eclipse.org/downloads/packages/release/neon/3/eclipse-ide-java-ee-developers) Version: Neon.3 Release (4.6.3) with the [Angular IDE](https://marketplace.eclipse.org/content/angular-ide).

## To Do

Next steps for this application.

* Service worker threads for improved performance and offline mode in mobile and modern browsers.
* Docker container for cloud readiness.
