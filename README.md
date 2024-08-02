Start by adding all the dependencies by running the commmand

`npm i`

for running the server : `npm start`

Introduction

Welcome to the Email Scheduler API! This project allows users to schedule emails to be sent at specific times, with options for recurring emails on a daily, weekly, monthly, or quarterly basis. The API is built using Node.js, Express, MongoDB, and Nodemailer, and it uses node-schedule for job scheduling.
Features

    Email Scheduling: Schedule emails to be sent at a specific date and time.
    Recurring Emails: Set emails to recur on a daily, weekly, monthly, or quarterly basis.
    Email Details: Specify recipient email address, subject, body, and attachments.
    Manage Scheduled Emails: Retrieve, view, and delete scheduled emails.

Prerequisites

Before you start, make sure you have the following installed:

    Node.js
    MongoDB
    npm (Node Package Manager)

Installation

    Clone the repository:

bash

git clone https://github.com/yourusername/email-scheduler-api.git
cd email-scheduler-api

    Install dependencies:

bash

npm install

    Create a .env file:

Create a .env file in the root directory of the project and add the following environment variables:

plaintext

EMAIL_SERVICE=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
PORT=3000
MONGO_URI=your-mongodb-connection-string

Replace the placeholder values with your actual email service and MongoDB connection details.
Running the Application

Start the server by running:


node -r ts-node/register --env-file=.env ./src/index.ts

The server will start on the port specified in your .env file (default is 3000).
API Endpoints
Schedule an Email

POST /schedule-email

Schedule a new email to be sent.

    Body Parameters:
        recipient (string): The email address of the recipient.
        subject (string): The subject of the email.
        body (string): The body of the email.
        time (string): The time to send the email (in cron format).
        attachments (array): Array of files to attach to the email.
