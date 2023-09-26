const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-List">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Author: {blog.author} </p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
