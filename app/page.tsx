import Image from "next/image";
import Link from "next/link";
import globeImage from "./globeNews.jpg";

const HomePage = () => {
  return (
    <main>
      <div className="md:container flex flex-col-reverse items-center md:items-start md:flex-row md:justify-between md:mt-16 gap-x-10">
        <div className="flex flex-col mb-32 space-y-8 md:w-1/2 ">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            EventsFeed: Your Personal Gateway to Global News.{" "}
          </h1>
          <p className="max-w-md text-center text-slate-600 md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis neque ut tempora iusto ratione corrupti harum debitis
            nam maxime obcaecati, expedita iure eligendi a quos reprehenderit
            explicabo facere quae. Fuga.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="rounded-full bg-slate-300 p-2 px-5 pt-2 text-lime-900 hover:bg-black hover:text-white">
              Get Started
            </button>
          </div>
        </div>

        <div className="md:w-1/2 ">
          <Image src={globeImage} alt="logo" />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
