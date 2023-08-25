import Image from "next/image";

interface NewsItemProps {
  title: any;
  description: any;
  image: any;
  url: any;
}

export const NewsItem: React.FC<NewsItemProps> = ({
  title,
  description,
  image,
  url,
}) => {
  return (
    <div className="my-3 bg-stone-100 shadow-lg p-5  flex md:items-start ls:container mx-md">
      <li className=" pb-4 md:flex md:items-start ">
        <div className="  mx-auto md:mr-4 md:flex-shrink-0 w-60 ">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            unoptimized={true}
          />
        </div>

        <div className="ml-4 ">
          <h1 className=" text-center text-2xl md:pb-1 ">{title}</h1>
          <p className="pb-2 flex">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 font-semibold"
          >
            Read more
          </a>
        </div>
      </li>
    </div>
  );
};
