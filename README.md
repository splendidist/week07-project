🎯 Please mention the requirements you met and which goals you achieved for this assignment.

User Stories

- As a user, I want to be able to create new posts and add them to the page
- As a user, I want to be able to assign a category to each post
- As a user, I want to be able to view all posts added on the page and the category they're in
- As a user, I want to be able to view all posts in a specific category by visiting a dedicated page for that category

Requirements

- Design a database schema with relationships between tables
  Figma design and database schema: https://www.figma.com/file/jkJ4lHSEtxFHz8mQVhw2Yx/week07-project?type=design&node-id=0%3A1&mode=design&t=Ua8T3gTIsE7SHNKi-1
- Create a new application with a React client and an Express server
- Seed the database with data. I ran the SQL queries in Supabase to test them, and then used them in my server.js file. I have saved all of the scripts in a seed.js file in case I need to rerun them or duplicate the project.
- Create Express endpoints to handle requests so you can POST and GET the data appropriately for your application.
- Create multiple pages using react-router-dom
  Create a home page (Home.jsx)
  Create a page to show all the posts and use fetch to call your server to get your data (Posts.jsx)
  Create a page where users can create new posts using a form (Home.jsx)
  I also created an about page (About.jsx)

Stretch Goals

- The user can view all posts in a specific category (dreams or nightmares) by visiting a dedicated page for that category

Future Additions

Some things I want to add to this app in the future include:

- Having the background image and app colour scheme change when the user selects Nightmare from the select input
- Allow the user to input images and change the colour of their post
- Allow the user to like or delete posts
- Allow the user to share posts
- Allow the user to add their own 'element' category
- Have responsive posts that change size depending on how long the users 'content' is
- Have a page dedicated to dream meaing and analysis

🎯 Were there any requirements or goals that you were not quite able to achieve?

Some personal goals that I didn't achieve include allowing the user to like posts, and having the overall design of the page change when the 'type' category is changed.

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

I found posting the theme, element, and type inputs to the database and displaying the results onto the page the most difficult. It took me a long time to realise I can post into the junction tables using if statements, but once I figured this out it became a lot easier. I then struggled with my elements junction table, but looked back at old workshops to see how to populate the table and map through the results.

☁️ What went really well and what could have gone better?

Creating and populating the tables went well, and making the junction tables to connect them also went well. Deploying the client to vercel and the server to render also went well. Connecting the form to the database could have gone better, as it took me a while to figure out I can post to the junction tables.

☁️ Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

- https://supabase.com/docs/guides/database/tables?queryGroups=language&language=js - Supabase tables document
- https://www.w3schools.com/html/html_form_elements.asp - Form Select
- https://www.w3schools.com/html/html_forms.asp - Form Checkbox
- https://stackoverflow.com/questions/70935751/how-to-style-a-react-link-component - Style a react link as <a> tag
- https://stackoverflow.com/questions/46539480/react-clearing-an-input-value-after-form-submit - Reset a form after submission
- https://stackoverflow.com/questions/75963788/why-is-my-vercel-project-giving-me-an-error-404-on-refresh - Fix Vercel refresh error

☁️ Describing errors or bugs you encountered while completing your assignment.

- Warning: Each child in a list should have a unique "key" prop. I have this warning in my console log for my posts page. I tried changing key={dream.id} to key={dream.id + dream.name} but this didnt fix it.

- When I deployed my client to vercel, I had an issue where when I refreshed the /posts page, /dreams page, or /nightmares page, I would get a 404 error. I looked online and found that this was a common thing with vercel and react, so I made a file to configure vercel (vercel.json) and added the following code: { "routes": [{ "src": "/[^.]+", "dest": "/", "status": 200 }] }

☁️ Requesting feedback about a specific part of your submission.
