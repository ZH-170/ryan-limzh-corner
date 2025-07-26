import { getPostMetadata } from "@/components/getPostMetadata";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import fs from "fs";
import matter from "gray-matter";

export const generateStaticParams = async () => {
  const postMetadata = getPostMetadata();
  return postMetadata.map((data) => ({
    blogID: data.id,
  }));
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ blogID: string }>;
}) {
  const { blogID } = await params;

  const filePath = `./src/blog-posts/${blogID}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const title = matter(fileContent).data.title;
  const date = matter(fileContent).data.date;
  const content = matter(fileContent).content;

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="mx-3 flex flex-col gap-3 sm:mx-8 md:max-w-3/7">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className="">{date}</h2>
      </div>

      <div className="mx-3 flex flex-col gap-3 sm:mx-8 md:max-w-3/7">
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
}

// mx-3 sm:mx-8 md:max-w-3/7
