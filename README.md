# efunk-Tech-Blog

## Description

### Motivation
I was inspired to create this tech blog application to provide a platform for individuals interested in technology. Whether they want to learn, share their insights, or simply stay updated with the tech world, this application offers a space for it all.

### Purpose
The primary objective of this project is to foster a sense of community within the tech community. By building this application, I aimed to facilitate the sharing of tech-related thoughts, knowledge, and experiences. It serves as a hub where tech enthusiasts can collaborate, educate, and explore new ideas.

### Problem Solving
One of the core issues this project addresses is the fragmentation of tech-related information across various platforms. It consolidates all things tech into one place, making it easier for visitors to fulfill their tech needs. Instead of searching multiple sources, they can find valuable content and discussions here.

### Learning Experience
Throughout the development of this project, I gained valuable knowledge and experience in several key areas:

- Implementing the MVC (Model-View-Controller) architectural pattern to structure the application.
- Utilizing Handlebars.js as the templating language for rendering dynamic content.
- Employing Sequelize as the ORM (Object-Relational Mapping) tool for database management.
- Implementing user authentication and session management using the express-session npm package.
- Enhancing my understanding of Heroku deployment for hosting web applications.

By learning and applying these technologies and concepts, I not only built a functional tech blog application but also enhanced my skills as a developer.

## Table of Contents

- [Installation](#installation)
- [Usage Instruction](#usage-instruction)
- [Deployed Application Link](#deployed-application-link)
- [GitHub Repository](#github-repository)
- [Screenshot](#screenshot)
- [Built With](#built-with)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. **Clone the Repository from GitHub:** Alternatively, you can download the ZIP folder from the repository's GitHub page.
```bash
git clone https://github.com/4funke/efunk-Tech-Blog.git
```
2. **Open the Repository in a Source Code Editor:**
Open your preferred source code editor (e.g., Visual Studio Code, Sublime Text) and navigate to the cloned repository's directory.

### Additional Resources
- [Deployed Application Link](#deployed-application-link) Check out our live application
- [GitHub Repository](#github-repository) For more details and to explore the code

## Usage Instruction: 
#### Follow these steps to effectively utilize our application:

### Step 1: Create an Account

- Visit the deployed application's homepage.
- Click on the "Sign Up" button to create a new account.
- Fill in the required information, including your name, email, and password.
- Click the "Sign Up" or "Register" button to create your account.

### Step 2: Log In

- After creating your account, click on the "Log In" button.
- Enter your email and password to log in.

### Step 3: Add Your Blog Post

- Once logged in, visit your dashboard by clicking on the "Dashboard" link.
- Click the "Create Blog Post" button to add your own blog post.
- Fill in the title and content for your blog post.
- Click the "Submit" or "Save" button to publish your post.

### Step 4: Manage Your Posts

- To manage your posts, go to the "Current Posts" section.
- Here, you can view a list of your blog posts.
- To delete a post, click the "Delete" button next to the post you want to remove.

### Step 5: Explore Blog Posts

- On the homepage, you can explore all the blog posts created by other users.
- Scroll through the list to discover interesting tech-related content.

### Step 6: Log Out

- Don't forget to log out when you're done! Click the "Log Out" button to securely end your session.

By following these steps, you'll be seamlessly navigating and contributing to our tech blog community. Enjoy exploring and sharing your tech thoughts!

## Deployed Application Link:
[Deployed Application Link](https://efunk-tech-blog-f66ef9d4dfae.herokuapp.com/)

## GitHub Repository:
[GitHub Repository](https://github.com/4FunkE/efunk-Tech-Blog)

## Screenshot
![image](./public/Screenshot%202023-09-07%20212703.png)

## Built With

This project was developed using a range of technologies and tools, including:

### Server Framework and Dependencies
- [Express](https://www.npmjs.com/package/express): A fast and minimal web application framework for Node.js.
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars): A templating engine for rendering dynamic content in Express.
- [Express-Session](https://www.npmjs.com/package/express-session): Middleware for managing user sessions in Express.
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize): A session store for Express that uses Sequelize for database management.

### Database
- [Sequelize](https://www.npmjs.com/package/sequelize): An Object-Relational Mapping (ORM) tool for managing databases.
- [Node MySQL2](https://www.npmjs.com/package/mysql2): A MySQL driver for Node.js.

### Authentication and Security
- [Bcrypt](https://www.npmjs.com/package/bcrypt): A library for hashing and salting passwords for secure authentication.

### Data Representation and Configuration
- [JSON](https://www.npmjs.com/package/json): Used for data representation and exchange.
- [Dotenv](https://www.npmjs.com/package/dotenv): Enables the usage of environment variables to manage configuration.

### Development Tools
- [Visual Studio Code](https://code.visualstudio.com/): The integrated development environment used for coding.

## Credits

Collaborators: 
- AskBCS Learning Assistants
- Andrew Bautista-Instructor
- Will-TA
- Starter code provided by UNCC, week 14-MVC, mini-project

## License

This application is covered under the MIT license. [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Features

- **User Registration and Authentication:** 
  - Description: This feature allows users to create accounts, log in, and authenticate themselves.
  - Usage Instructions: 
    1. Visit the homepage.
    2. Click the "Sign Up" button to create an account.
    3. Provide your name, email, and password.
    4. Click "Sign Up" to register.
    5. After registration, use the "Log In" button to access your account.
  - Example: When you visit the homepage, you can see options to sign up and log in. Registering with your email and password grants you access to your dashboard.
- **Create and Manage Blog Posts:** 
  - Description: Users can create, edit, and manage their blog posts.
  - Usage Instructions:
    1. After logging in, go to your dashboard.
    2. Click "Create Blog Post" to compose a new post.
    3. Enter the title and content of your blog post.
    4. Click "Submit" to publish it.
    5. To edit or delete a post, visit the "Current Posts" section.
  - Example: In your dashboard, you can click "Create Blog Post," provide a title and content, and click "Submit" to publish your thoughts.
- **Explore Blog Posts:** 
  - Description: Users can view and explore blog posts created by others.
  - Usage Instructions:
    1. Visit the homepage.
    2. Scroll through the list of blog posts.
    3. Click on a post title to read it in detail.
  - Example: On the homepage, you can see a feed of blog posts by various authors. Clicking on a post title takes you to the full post.
- **Log Out:** 
  - Description: Users can securely log out to end their session.
  - Usage Instructions: Click the "Log Out" button to log out of your account.
  - Example: When you're done using the application, you can click "Log Out" to ensure your session is terminated.

## How to Contribute

We welcome contributions to enhance and improve our project. Whether you're interested in fixing a bug, implementing new features, or enhancing documentation, your contributions are highly appreciated.

To contribute to our project, follow these steps:

1. Fork the Repository: Fork our repository to your own GitHub account by clicking the "Fork" button.
2. Clone the Repository: Clone the forked repository to your local machine using:
```bash
git clone https://github.com/4funke/efunk-Tech-Blog.git 
```
3. Create a New Branch: Create a new branch to work on your contribution using:
```bash
git checkout -b your-feature-branch 
```
4. Make Changes: Make your desired changes or additions to the codebase.
5. Test Your Changes: Test your changes thoroughly to ensure they work as expected.
6. Commit Your Changes: Commit your changes with a clear and concise commit message:
```bash
git commit -m "Add: Brief description of your changes" 
```
7. Push to Your Fork: Push your changes to your forked repository:
```bash
git push origin your-feature-branch 
```
8. Open a Pull Request: Open a pull request from your feature branch to our main repository. Provide a clear title and description for your pull request, outlining the changes you've made.
9. Review and Feedback: Participate in the discussion, address any feedback, and iterate on your changes as needed.

By following these steps, you contribute to the growth and enhancement of our project. We value your time and effort, and your contributions will make a positive impact.

If you're unsure about where to start or need assistance at any point, feel free to reach out. Together, we can make our project even better!

## Tests

n/a

## Questions
If you have any questions or need further assistance, feel free to reach out. You can contact me through my [GitHub profile](https://github.com/4FunkE) or via email at 4funkecodes@gmail.com. I'm here to help and support you in any way I can. Have a funke day!