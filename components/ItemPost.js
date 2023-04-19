import Link from 'next/link';
import Image from 'next/image';
import { ImageUrl } from "../utils";

export default function ItemPost({ post: {post } }) {
   
  const date = new Date(post.date);

  return (
    <div className="card mb-4">
      <Link href={`/blog/${post.slug}`}>
        <a>
          <Image
            className="card-img-top"
            src={ImageUrl(post.images[0])}
            alt={post.title}
            width={200} // adjust this to your desired width
            height={200} // adjust this to your desired height
          />
        </a>
      </Link>
      <div className="card-body">
        <div className="small text-muted">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</div>
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text">{post.summary}</p>
        <Link href={`/blog/${post.slug}`}>
          <a className='btn'>Read More</a>
        </Link>
      </div>
    </div>
  );
}
