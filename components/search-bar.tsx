"use client";
import { searchBlogPosts } from "@/services/dev-to";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState, useDeferredValue } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const { data: searchedBlogs, error: searchError } = useQuery({
    queryKey: ["searched-blogs", deferredQuery],
    queryFn: async () => {
      return await searchBlogPosts(deferredQuery);
    },
    throwOnError: false,
    enabled: !!deferredQuery,
  });
  const router = useRouter();
  const handleInputSelect = (value: string) => {
    const matchedBlog = searchedBlogs?.find((blog) => blog.title === value);
    if (matchedBlog) {
      router.push(matchedBlog.canonical_url);
    }
  };

  return (
    <>
      <input
        onChange={(e) => {
          handleInputSelect(e.target.value);
          setQuery(e.target.value);
        }}
        value={query}
        type="text"
        placeholder="Search (WIP)"
        list="searched-blogs"
        className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-md mx-auto"
      />
      <datalist id="searched-blogs">
        {searchError ? <option>Error While Searching</option> : null}
        {!searchError && searchedBlogs
          ? searchedBlogs.map((blog) => (
              <option key={blog.id} value={blog.title} />
            ))
          : null}
      </datalist>
    </>
  );
};
