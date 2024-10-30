import BlogPostListingView from "@/components/blog-post-listing-view-pagination";
import Hero from "@/components/Hero";
import { PaginationControls } from "@/components/pagination-controls";
import { fetchBlogPosts } from "@/services/dev-to";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const blogPage = await fetchBlogPosts(page);

  return (
    <main className="pb-32 pt-8">
      <Hero />
      <BlogPostListingView blogPage={blogPage} />;
      <div className="m-auto">
        <PaginationControls />
      </div>
    </main>
  );
}
