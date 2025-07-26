import Link from "next/link";

export default function Home() {
  const showPDF = false;

  return (
    <div className="h-dvh flex items-center justify-center">
      {showPDF && (      <Link href="robots.pdf">
        <span className="text-blue-600 underline hover:text-blue-800">
          Mystery pdf (PDF)
        </span>
      </Link>)}
      <h1 className="text-5xl">Welcome to My Corner!</h1>
    </div>
  );
}
