import Image from "next/image";

const Posts = ({ posts, pakiety, className }) => {
  return (
    <div className={`row space-y-16 ${className}`}>
      {posts.map((post, i) => (
        <div
          key={`key-${i}`}
          className={i === 0 ? "col-12" : "col-12 sm:col-6"}
        >
          {post.frontmatter.image && (
            <Image
              className="rounded-lg"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={i === 0 ? "925" : "445"}
              height={i === 0 ? "475" : "230"}
              priority={i === 0 ? true : false}
            />
          )}
          <ul className="mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text"></ul>
          <h3 className="mb-2">
              {post.frontmatter.title}
          </h3>
          <p className="text-text">
            {post.content }
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
