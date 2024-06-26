import BlogCard from "./BlogCard";

const BlogSection = () => {
    return (
      <div className="lg:px-24 px-4">
        <div className="flex justify-center my-4">
          <h1 className="capitalize text-5xl font-semibold">Blogs</h1>
        </div>
        <ul className="flex flex-row flex-wrap justify-evenly space-y-8">
          <li className=" mt-8">
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
        </ul>
      </div>
    );
}
 
export default BlogSection;