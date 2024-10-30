# Tasks for Educatly Frontend Project

## Setup
- [x] Set up a new Next.js project.
- [x] Create separate components for:
  - Blog post listing view
  - Blog post item
  - Pagination controls
  - Loading indicator
  - Error message

## Integration with DEV.to API
- [x] Fetch blog posts from the DEV.to API (https://dev.to/api/articles).
- [x] Implement pagination to load and display blog posts in batches.
- [x] Handle HTTP errors gracefully and display an error message if fetching blog posts fails.
- [x] Display a loading indicator while fetching data from the API.

## Responsive Design
- [ ] Implement the provided Figma designs for both mobile and web views.
- [ ] Ensure that the application layout and components adapt gracefully to different screen sizes.
- [ ] Utilize CSS media queries and Next.js's built-in responsiveness features.

## Blog Post Listing View
- [x] Display blog post items in a grid layout.
- [x] Each blog post item should include:
  - Post title
  - Author name
  - Publication date
  - Cover image (if available)
- [x] Ensure clicking on a blog post item navigates the user to the full post on the DEV.to website.



## Pagination
- [x] Implement pagination controls to navigate between pages of blog posts.
- [x] Fetch and display a new batch of blog posts when the user navigates to a different page.
- [x] Update the pagination controls based on the current page and total number of pages.

Design is not clear on the task above need more clarification

## Loading Indicator
- [x] Display a loading indicator while fetching blog posts from the API.
- [x] Ensure that the loading indicator is visible and provides feedback to the user during the loading process.

## Error Handling
- [x] Handle errors gracefully and display an error message if fetching blog posts fails.
- [x] Allow users to retry fetching blog posts by clicking on a "Retry" button.

## Empty State Handling
- [x] Handle the scenario where no blog posts are available.
- [x] Display a message indicating that there are no blog posts to show.

## Submission
- [ ] Provide a GitHub repository containing your Next.js project code.
- [ ] Include clear instructions on how to run the project locally.
- [ ] Optionally, provide a live demo of the application hosted on a platform like Vercel or Netlify.

## Notes
- Focus on writing clean, readable, and maintainable code.
- Adhere to Next.js and React best practices and conventions.
- Ensure that the application meets the provided design specifications and requirements for responsiveness, pagination, loading, error handling, and empty state handling.