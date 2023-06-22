import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <h1>Events is a news aggregator </h1>

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
