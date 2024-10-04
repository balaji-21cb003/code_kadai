import BlogData from "@/components/Blog/blogData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
};

const BlogPage = async () => {
  const post = BlogData[0]; // Change index if you want a different post

  const extractGoogleDriveID = (url) => {
    const match = url.match(/[-\w]{25,}/);
    return match ? match[0] : null;
  };

  const videoId = extractGoogleDriveID(post.video);

  return (
    <>
      <div className=" ml-100 flex items-center justify-center">
        <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="lg:w-2/3 ">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <h2 className="mb-5 mt-11 text-3xl font-semibold text-[#1d6614] dark:text-[#1d6614] 2xl:text-sectiontitle2">
                  {post.title}
                </h2>

                {videoId && (
                  <div className="mt-5">
                    <h3 className="text-xl text-white font-semibold">Video Overview:</h3>
                    <br />
                    <iframe
                      className="aspect-video w-full"
                      src={`https://drive.google.com/file/d/${videoId}/preview`}
                      title="Video Overview"
                      allow="autoplay"
                    />
                  </div>
                )}

                <div className="blog-details">
                  <br />
                  <p>{post.description}</p>

                  <h3 className="mt-5 text-2xl font-semibold text-red">Features:</h3>
                  <ul className="list-disc pl-5">
                    {post.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block rounded bg-blue-500 px-4 py-2 text-white"
                  >
                    Download TrackBuddy
                  </a>

                  {/* <SharePost /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
