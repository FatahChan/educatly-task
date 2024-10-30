Educatly Frontend Task for Senior Next.js Developer

Objective:
The objective of this task is to create a responsive web application that fetches
and displays blog posts from the DEV.to API. The application should follow the
provided Figma designs for both mobile and web views. Additionally, the
implementation should include pagination, loading indicators, error handling,
and handling empty conditions when no blog posts are available.


Requirements:
1. Setup:
Set up a new Next.js project.
Create separate components for the blog post listing view, blog post
item, pagination controls, loading indicator, and error message.
2. Integration with DEV.to API:
Fetch blog posts from the DEV.to API (https://dev.to/api/articles).
Implement pagination to load and display blog posts in batches.
Handle HTTP errors gracefully and display an error message if
fetching blog posts fails.
Display a loading indicator while fetching data from the API.
3. Responsive Design:
Implement the provided Figma designs here for both mobile and web
views.
Ensure that the application layout and components adapt gracefully to
different screen sizes.
Utilize CSS media queries and Next.js's built-in responsiveness
features to achieve responsiveness.
4. Blog Post Listing View:
Display blog post items in a grid layout.
Each blog post item should include the post title, author name,
publication date, and cover image (if available).
Clicking on a blog post item should navigate the user to the full post
on the DEV.to website.
5. Pagination:
Implement pagination controls to navigate between pages of blog
posts.
Fetch and display a new batch of blog posts when the user navigates
to a different page.
Update the pagination controls based on the current page and total
number of pages.
6. Loading Indicator:
Display a loading indicator while fetching blog posts from the API.
Ensure that the loading indicator is visible and provides feedback to
the user during the loading process.
7. Error Handling:

Handle errors gracefully and display an error message if fetching blog
posts fails.
Allow users to retry fetching blog posts by clicking on a "Retry"
button.
8. Empty State Handling:
Handle the scenario where no blog posts are available.
Display a message indicating that there are no blog posts to show.
Submission:
Provide a GitHub repository containing your Next.js project code.
Include clear instructions on how to run the project locally.
Optionally, provide a live demo of the application hosted on a platform
like Vercel or Netlify.
Notes:
Focus on writing clean, readable, and maintainable code.
Adhere to Next.js and React best practices and conventions.
Ensure that the application meets the provided design specifications
and requirements for responsiveness, pagination, loading, error
handling, and empty state handling.