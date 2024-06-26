import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, company, education } = blog;
  return (
    <div className="group relative mb-10 overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <Link href="" className="relative block aspect-[4/4] w-full flex justify-center items-center profile-container m-5 ">
        <Image src={image} alt="image" fill className="profiles" />
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href=""
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <div className="border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {company}
        </div>
        <div className="border-opacity-10 pb-6 font-medium text-body-color dark:border-white dark:border-opacity-10">
          {education}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
