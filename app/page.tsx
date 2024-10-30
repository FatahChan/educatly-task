import BlogPostListingView from "@/components/blog-post-listing-view";
import { fetchBlogPosts } from "@/services/dev-to";
export default async function Home() {
  const blogPage = await fetchBlogPosts();

  return <BlogPostListingView blogPage={blogPage} />;
}
