# eaa-test-client-kgreen

### Description

Front-end application handles requests and responses through Angular components implementing CRUD client interfaces for a Person model. The Person model contains an auto-generated ID (server-side), first name, last name, and email address.

    ```
	[{"id":"e2201e76-a13b-459b-9602-9bc29a264702","givenname":"Charlie","surname":"Brown","email":"charlie.brown@peanuts.org"},
	{"id":"12af1b4d-d45e-4154-b071-b8e5738a8147","givenname":"Sally","surname":"Brown","email":"sally.brown@peanuts.org"},
	{"id":"20b9a63f-6499-45f2-b40f-b80398fb7403","givenname":"Peppermint","surname":"Patty","email":"peppermint.patty@peanuts.org"},
	{"id":"b870eb62-6eef-4a70-b733-42ae904d7b50","givenname":"Pig","surname":"Pen","email":"pig.pen@peanuts.org"},
	{"id":"b3bbe22b-ebbf-4ecd-b1bf-2eb660ff856c","givenname":"Linus","surname":"VanPelt","email":"linus.vanpelt@peanuts.org"},
	{"id":"dd5d694e-8897-406c-aa77-faf1eef2f407","givenname":"Linux","surname":"VanPelt","email":"linux.vanpelt@peanuts.org"},
	{"id":"a8e9e15b-f1ac-4a63-b187-a538dfd5bce4","givenname":"Lucy","surname":"VanPelt","email":"lucy.vanpelt@peanuts.org"},
	{"id":"9bd82fbf-b727-4f3b-b3be-b4d5949f1826","givenname":"Franklin","surname":"X","email":"franklin.x@peanuts.org"},
	{"id":"59664a26-d497-4615-9337-816d4838674c","givenname":"Marcy","surname":"X","email":"marcy.x@peanuts.org"}]
    ```

## Development server

Run `ng serve` for a dev server.`

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

## Development environment

This project created in [eclipse](https://www.eclipse.org/downloads/packages/release/neon/3/eclipse-ide-java-ee-developers) Version: Neon.3 Release (4.6.3) with the [Angular IDE](https://marketplace.eclipse.org/content/angular-ide).

## To Do

Next steps for this application.

* Service worker threads for improved performance and offline mode in mobile and modern browsers.
* Docker container for web readiness.
