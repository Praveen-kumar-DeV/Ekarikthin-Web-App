
# Ekarikthin- Event Management Web Application

Ekarikhin is a comprehensive event management web application built to simplify the process of organizing and participating in various events. It allows event organizers to effortlessly manage ongoing events and enables participants to register for the events they are interested in.

**Responsive Webpage:**

Ekarikhin is built with a responsive design, ensuring that the application adapts seamlessly to various screen sizes and devices. Whether users access the app from a desktop, laptop, tablet, or smartphone, they will experience a consistent and user-friendly interface.
## Features

**Ongoing Events Display:** This provides a visually appealing and interactive frontend interface to showcase all the ongoing events. Participants can easily view event details, such as event name, date, location, and description.

**Event Registration:** Participants can quickly register for events through a user-friendly registration form. Upon successful registration, their details will be stored securely.

**Unique Participant Codes:** Each registered participant will receive a unique code, serving as their identifier for the specific event they've registered for. This code will be associated with their registration data in the backend.

**OTP Verification:** Secure participant registration with OTP verification to ensure the authenticity of participant information.

**Admin Panel:** An admin panel will be available to authorized users to view the list of registered participants for each event. It provides a convenient overview of event participation.

**Recipient Generation for Registration Fee:** The application will have the functionality to generate recipient lists for event registration fees. This enables easy financial tracking and management of participant payments.

**Gallery with Cloudinary:** The application will integrate with the Cloudinary service to handle image and media storage, enabling the creation of a dynamic gallery to showcase event-related images and media.

## Installation

To run this application locally, follow these steps:
#### Using npm

Clone the repository to your local machine:

bash

```bash
  git clone [Repository]
```
Navigate to the project directory:


```bash
  cd [Repository-Directory]
```

Install the required dependencies using npm:

```bash
  npm install
```

Set up the backend server, MongoDB database, and Cloudinary account configuration.

Launch the application:

```bash
  npm start
```

## Using Yarn
Clone the repository to your local machine:


```bash
 git clone [Repository]
```

Navigate to the project directory:


```bash
 cd [Repository-Directory]
```

Install the required dependencies using yarn:

```bash
  yarn install
```

Set up the backend server, MongoDB database, and Cloudinary account configuration.

Launch the application:


```bash
  yarn start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
 
 These API keys are required for nodemailer to work:  

`GMAIL_CLIENT_ID `
`GMAIL_CLIENT_SECRET`
`GMAIL_CLIENT_SECRET`
`GMAIL_REFRESH_TOKEN`
`GMAIL_ACCESS_TOKEN`
`GMAIL_USERNAME`
`GMAIL_PASSWORD`

These keys are required to use JWT authentication for admin login:

`JWT_SECRET`
`JWT_EXPIRY`

These keys are required for utilizing the Cloudinary service, which manages image and media storage for the dynamic gallery feature:

`CLOUDINARY_NAME`
`CLOUDINARY_API_KEY`
`CLOUDINARY_API_SECRET`

These keys are required to connect to the database (using the database string) and the port number:

`PORT`
`DATABASE`


## Tech Stack

**Client:** HTML, CSS, Bootstrap5, ejs, SCSS

**Server:** Node, Express ,Mongoose

**DBMS:** MongoDB 


## Technologies Used

**Frontend:** HTML, CSS, JavaScript, and EJS (Embedded JavaScript) templates have been used to create an intuitive and interactive user interface.

**Backend:** The server-side is developed using Node.js with Express.js. It handles data storage, retrieval, and API endpoints for seamless communication between the frontend and backend.

**Database:** MongoDB is used as the database to store event information, participant data, registration fees, and other relevant details securely.

**Cloudinary:** Cloudinary service is utilized to manage image and media storage for the dynamic gallery feature.

[![favicon.jpg](https://i.postimg.cc/vBP8mz8q/favicon.jpg)](https://postimg.cc/mzHWX7HC)

## Demo


https://github.com/Praveen-kumar-DeV/Ekarikthin-Web-App/assets/121147550/facab85d-577d-4c02-a6ad-75b97663c53d



## Support

Feel free to reach out to me at any of these delightful destinations! 🌟

📧 Drop me an email: [praveenkumarpatini@gmail.com]



🌐 Explore my GitHub: [Praveen-kumar-DeV]
## Authors

- [@Praveen Kumar](https://github.com/Praveen-kumar-DeV)
- [@Murari](https://github.com/Murari23)
