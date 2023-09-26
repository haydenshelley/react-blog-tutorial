const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-List">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Author: {blog.author} </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
