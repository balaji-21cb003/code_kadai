// import RelatedPost from "@/components/Blog/RelatedPost";
// import SharePost from "@/components/Blog/SharePost";
// import { Metadata } from "next";
// import Image from "next/image";
// import BlogData from "./blogData";

// export const metadata: Metadata = {
//   title: "Blog Details Page - Solid SaaS Boilerplate",
//   description: "This is Blog details page for Solid Pro",
//   // other metadata
// };

// const BlogItem = async () => {
//   // Assuming you're fetching the specific blog post using its ID or title.
//   const blogPost = BlogData[0]; // For example, getting the first blog post

//   return (
//     <>
//       <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
//         <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
//           <div className="flex flex-col-reverse items-center justify-center gap-7.5 lg:flex-row xl:gap-12.5">
//             <div className="lg:w-2/3 items-center">
//               <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
//                 <div className="mb-10 w-full overflow-hidden ">
//                   <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
//                     <iframe
//                       src={blogPost.video}
//                       title={blogPost.title}
//                       allow="autoplay; encrypted-media"
//                       className="rounded-md object-cover object-center w-full h-full"
//                       style={{ height: "450px", border: "none" }}
//                       allowFullScreen
//                     />
//                   </div>
//                 </div>

//                 <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
//                   {blogPost.title}
//                 </h2>

//                 <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
//                   <li>
//                     <span className="text-black dark:text-white">Author: </span> Jhon Doe
//                   </li>
//                   <li>
//                     <span className="text-black dark:text-white">Published On: July 30, 2023</span>
//                   </li>
//                   <li>
//                     <span className="text-black dark:text-white">Category:</span> Events
//                   </li>
//                 </ul>

//                 <div className="blog-details">
//                   <p>{blogPost.description}</p>

//                   <h3 className="pt-8">Key Features:</h3>
//                   <ul className="list-disc list-inside pl-5 mb-4">
//                     {blogPost.features.map((feature, index) => (
//                       <li key={index}>{feature}</li>
//                     ))}
//                   </ul>

//                   <SharePost />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BlogItem;
