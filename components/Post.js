import Link from 'next/link'
import { slugify } from '../utils'

export default function Post({ post }) {

  const date = new Date(post.frontmatter?.date)

  // Dar formato a la fecha en formato latino
  const formattedDate = date.toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' });

  return (
    <div className="card">
        <img
            src={`/${post.frontmatter.cover_image}`}
            alt={post.frontmatter.title}
            width={"100%"}
            height={"100%"}
          />

      <div className="card-body">
        <div className="small text-muted">{formattedDate}</div>
        <div>
          {post.frontmatter.tags.map((tag) => {
            const slug = slugify(tag)
            return (
              <Link key={tag} href={`/tag/${slug}`}>
                <a className="btn">
                  <h6 className="post-title">#{tag}</h6>
                </a>
              </Link>
            )
          })}
        </div>
        <h2 className="card-title">{post.frontmatter.title}</h2>
        <p className="card-text">{post.frontmatter.summary}</p>
        <Link href={`/blog/${post.slug}`}>
          <a className="btn btn-primary">Read more</a>
        </Link>
      </div>
    </div>
  )
}
