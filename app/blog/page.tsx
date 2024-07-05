import React from "react";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import BlogPosts from "@/components/blog-posts";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Full Stack Development Basics: A Beginner's Guide",
  description:
    "Explore articles and tutorials on full stack development, covering the latest trends and best practices in JavaScript, Next.js, React, and more.",
});

const Page = () => {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return (
    <main className="py-14">
      <BlogPosts posts={posts} />
    </main>
  );
};

export default Page;
