import matter from "gray-matter";
import path from "path";
import fs from "fs";

type blogPostMetadataType = {
  title: string;
  date: Date;
  id: string;
};

export const getPostMetadata = () => {
  const blogDirectory = path.join(process.cwd(), "src", "blog-posts"); // get all the filenames

  const allFiles = fs.readdirSync(blogDirectory);
  const markdownFiles = allFiles.filter((file) => file.endsWith(".md"));

  const fileContents: blogPostMetadataType[] = markdownFiles.map((file) => {
    const filePath = path.join(blogDirectory, file);
    const content = fs.readFileSync(filePath, "utf-8");
    return {
      title: matter(content).data.title,
      date: matter(content).data.date,
      id: file.replace(".md", ""),
    };
  });

  return fileContents;
};
