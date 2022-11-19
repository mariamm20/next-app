import Link from "next/link";

export default function Posts(props) {
  console.log(props.posts)
  return (
    <div>
      Posts Comp

      {props.posts.map(post => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
            {post.title}
            </Link>
          </div>
        ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  }
}