import { getPostMetadata } from "@/components/getPostMetadata";
import Link from "next/link";

export default function Blog() {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((object, i) => {
    return (
      <Link
        href={`/blog/${object.id}`}
        key={i}
        className="rounded-2xl border-2 p-5 hover:shadow-2xl"
      >
        <div>
          <h1 className="text-xl font-bold">{object.title}</h1>
          <p className="text-[13px]">{object.date.toString()}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className="m-10 flex flex-col gap-10 sm:mx-30 md:mx-50 lg:mx-80">
      <h1>
        This is a place for me to share my opinions about Natural Science,
        Computer Science, Artificial Intelligence, and others...
      </h1>
      {postPreview}
    </div>
  );
}
