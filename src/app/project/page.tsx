import Link from "next/link";

export default function Project() {
  return (
    <div className="flex flex-col gap-8">
      <Link
        href="/project/games"
        className="flex h-50 items-center justify-center rounded-lg border-2 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80"
      >
        <div>Little Website Games</div>
      </Link>
      <Link
        href="/project/other-projects"
        className="flex h-50 items-center justify-center rounded-lg border-2 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80"
      >
        <div>other projects</div>
      </Link>
    </div>
  );
}
