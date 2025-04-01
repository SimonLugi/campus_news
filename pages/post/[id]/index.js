import PostsAPI from "../../../lib/api/Posts";
import Link from "next/link";
import styles from './post.module.css'

export default function DetailPost({post}) {

    return !post ? null : (
        <div className={styles.postContent}>
            <div>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
                <p><i>Erstellt am {post.createdAt}</i></p>
            </div>
            <div className={styles.buttonContainer}>
                <Link className={styles.button} href={`/`}><i className="fa-solid fa-arrow-left"></i>Back</Link>
                <Link className={styles.button} href={`/`}>Edit<i className="fa-solid fa-pen"></i></Link>
            </div>

        </div>
    )
}


export async function getStaticProps({params}) {
    const post = await PostsAPI.read(params.id);
    return {
        props: { post }, revalidate: 10
    }
}

export async function getStaticPaths() {
    const posts = await PostsAPI.readAll()

    //from Flücki
    const paths = posts.map(post => ({
        params: { id: post.id.toString() }
    }));

    return {
        paths: paths,
        fallback: true
    }
}