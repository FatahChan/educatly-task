import BlogPostListingView from "@/components/blog-post-listing-view-pagination";
import { fetchBlogPosts } from "@/services/dev-to";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const blogPage = await fetchBlogPosts(page);

  return <BlogPostListingView blogPage={blogPage} />;
}
