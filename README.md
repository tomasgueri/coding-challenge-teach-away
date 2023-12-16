# Imgur Gallery Browser App

## Overview

This web application is a simple Imgur Gallery Browser developed as part of a coding challenge. It allows users to browse the Imgur gallery, displaying images and videos in a grid of thumbnails, complete with descriptions, upvotes, downvotes, and scores.


## Features

- Display gallery images and videos in a grid of thumbnails.
- Filter gallery items by sections: hot, top, user.
- Include or exclude viral images from the result set.
- Specify window and sort parameters for filtering.
- Display detailed information on click, including upvotes, downvotes, and scores.
- Lazy loading for performance enhancement.
- Responsive design for various screen sizes.


## Technical Stack

- Framework: React with Redux
- Styling: SASS with CSS Modules
- TypeScript: For type safety
- Testing: Jest and React Testing Library
- Linting: ESLint with custom rules for code quality
- Design Methodology: Atomic Design
- Data Fetching: Custom fetchWithCache method for optimized API calls
- Platform: Next.js for server-side rendering and routing
- Services: Dedicated service layer for API interactions


## Approach and Architecture

- Atomic Design: This methodology was used to create a consistent and scalable structure for UI components.
- fetchWithCache Method: Implemented to optimize API calls by caching responses, reducing unnecessary data fetching and enhancing performance.
- Service Layer: Abstracts the API interactions, making the components cleaner and more maintainable.
- Next.js: Offers benefits like server-side rendering and improved SEO, which are essential for modern web applications.
- Skeleton loaders: Added for better user experience


## Local Setup

```bash
# Clone the repository
git clone https://github.com/tomasgueri/coding-challenge-teach-away.git
# or with ssh
git clone git@github.com:tomasgueri/coding-challenge-teach-away.git

# Install dependencies
npm install

# Run the application
npm run dev

# Run tests
npm test
```

### Problem with Imgur API on Localhost

When running the project locally, you may encounter issues with the Imgur API, particularly API rate limiting on localhost. This is a common practice for many APIs to prevent abuse.

### Workaround

To work around this issue, a modification to your system's hosts file is required. This change will allow you to access the Imgur API without being rate-limited on localhost.

Steps for Ubuntu (only for local testing):
- Open your terminal.
- Edit your hosts file by running `sudo nano /etc/hosts`.
- Add your Local IP address (with local.imgurapi.com) like the bellow line to your hosts file:
```bash
# example Local IP address, You have to replace 192.000.0.00 with your local IP address
192.000.0.00    local.imgurapi.com
```
- Save the file and exit the editor.
- Now, when you run the project locally, use local.imgurapi.com instead of localhost in your browser.


## ESLint Configuration

The project's ESLint rules are defined in .eslintrc.json. To check the codebase for linting issues, run:

```bash
npm run lint
```

This will output any linting errors or warnings based on the project's ESLint rules.


## Observations

- Component Libraries: This project does not use component libraries like Material UI, as the challenge did not explicitly mention their usage.
- Handling Videos: The project includes both images and videos, although the original challenge specified only images. This inclusion impacted the feasibility of implementing pagination or infinite scrolling, as the Imgur API's pagination is designed primarily for images.
- Pagination and Infinite Scroll: These features were not implemented due to the mixed content (images and videos) and limitations of the API in handling such a dataset.


## Delivery and Pull Request

### Merging the Pull Request
For the purpose of this challenge, I have merged the main pull request [(#1)](https://github.com/tomasgueri/coding-challenge-teach-away/pull/1) into the master branch. This decision was made to ensure that the production deployment on Vercel reflects the most recent and complete version of the application. The merged PR provides a comprehensive view of the development process, including code changes, commit history, and discussions.

### Production Deployment
The application is deployed on Vercel, and the production environment can be accessed via the following link: [Gallery App - Production Deployment](https://coding-challenge-teach-away.vercel.app/).

## Accessibility of the Deployment Preview
It's important to note that the Vercel deployment preview link generated for the pull request was only accessible to me as the owner of the Vercel account. To ensure that reviewers and other interested parties can access and review the application without any restrictions, the decision to merge the pull request was made. The production deployment link provided above is accessible to everyone, facilitating a straightforward review process.

### Reviewing the Closed Pull Request
While the pull request has been merged, the closed PR remains available for review at the following link: [Pull Request #1](https://github.com/tomasgueri/coding-challenge-teach-away/pull/1). Here, you can view the detailed development process, including all the changes made during the course of this project. The closed PR serves as a comprehensive record of the workflow and decision-making process involved in the development of this application.
