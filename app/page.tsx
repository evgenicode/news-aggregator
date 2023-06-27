import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="md:container flex flex-col items-center md:flex-row md:justify-between md:items-center mb-32">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:textleft">
          EventsFeed: Your Personal Gateway to Global News.{" "}
        </h1>
      </div>

      <Link
        className="underline decoration-sky-500 hover:decoration-yellow-400"
        href="/news"
      >
        Check out latest news
      </Link>
    </main>
  );
};

export default HomePage;
