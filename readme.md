# Electron Job Search

## Description

Use this application to maintain a list of jobs while conducting your job search. List the job title, url where the job posting can be found, and any additional notes that you'd like to store.

I chose to focus on Electron because it allows me to use HTML/CSS/JavaScript that I have expereience with to create a desktop application.

"Electron is an open source library developed by GitHub for building cross-platform desktop applications with HTML, CSS, and JavaScript. Electron accomplishes this by combining Chromium and Node.js into a single runtime and apps can be packaged for Mac, Windows, and Linux." https://electronjs.org/docs/tutorial/about

Electron was built and maintained by GitHub to run Atom, GitHub's text editor. It is still maintained by GitHub but has been open sourced from contributions from others. Having now built my first application with Electron, I think that it is a very useful and powerful technology for web developers who are looking to create a desktop application. Electron allows developers to utilize JavaScript in the same way that they apply it to web applications. Additionally, although it is not used here, Electron offers the ability to integrate front-end frameworks like React or Angular in the desktop application for developers who want to use different technologies to handle views. Finally, the ability to turn on Developer Tools and interact with the console in the same way that one does when developing a web application is extremely useful.

One of the hurdles that requires more research is understanding the difference between processes. I understand that the "main" process handles opening the application window and starting the application, but I think I've just scratched the surface of what you can achieve with the "renderer" processes.

## Database

In order to persist data, this application is configured to use mongoDB to store job listings. Ensure that mongoDB is running before adding a job.

To install mongo: https://docs.mongodb.com/manual/installation/

## Sources

GitHub: https://github.com/electron/electron

Framework and Comments in main.js: https://electronjs.org/docs/tutorial/first-app

## Using the Application

1.  Clone this repository.
2.  Navigate to the folder and run `npm install`, then `npm start`.
3.  Follow the instructions.
