import Link from "next/link";

export default function Games() {
  return (
    <div className="flex flex-col gap-5">
      <Link
        href="/project/games/seq-mem"
        className="mx-10 flex h-20 items-center justify-center rounded-lg border-2"
      >
        <div>Sequence Memory</div>
      </Link>
      <Link
        href="/project/games/num-mem"
        className="mx-10 flex h-20 items-center justify-center rounded-lg border-2"
      >
        <div>Numer Memory</div>
      </Link>{" "}
      <Link
        href="/project/games/seq-mem"
        className="mx-10 flex h-20 items-center justify-center rounded-lg border-2"
      >
        <div>Sequence Memory</div>
      </Link>{" "}
      <Link
        href="/project/games/seq-mem"
        className="mx-10 flex h-20 items-center justify-center rounded-lg border-2"
      >
        <div>Sequence Memory</div>
      </Link>
    </div>
  );
}
