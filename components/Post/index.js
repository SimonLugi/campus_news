import styles from './posts.module.css'
import Link from "next/link";


export default function Post({post}){
    return(
        <article className={styles.articels}>
            <h2>{post.title}</h2>
            <p className={styles.text}>{post.text}</p>
            <Link className={styles.link} href={`/post/${post.id}`}>Read More</Link>
        </article>
    )
}