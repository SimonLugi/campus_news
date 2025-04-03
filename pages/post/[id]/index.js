import PostsAPI from "../../../lib/api/Posts";
import Link from "next/link";
import styles from './post.module.css'
import CommentsAPI from "../../../lib/api/Comments";

export default function DetailPost({post,comments}) {

    return !post ? null : (
        <>
            <div className={styles.buttonContainer}>
                <Link className={styles.button} href={`/`}><i className="fa-solid fa-arrow-left"></i>Back</Link>
                <Link className={styles.button} href={`./edit/${post.id}`}>Edit<i className="fa-solid fa-pen"></i></Link>
            </div>
            <div className={styles.postContent}>
                    <h1>{post.title}</h1>
                    <p className={styles.text}>{post.text}</p>
                    <p><i>Erstellt am {post.createdAt}</i></p>
            </div>
            <div className={styles.commentsContent}>
                {comments.map(comment =>{
                    if(comment.postId == post.id){
                        return(
                            <div className={styles.comment} key={comment.id}>
                                <div className={styles.user}>
                                    <img className={styles.userimg} src={""}/> {/*Will be filled*/}
                                    <h4>{"username"}</h4>
                                </div>
                                <p>{comment.text}</p>
                                <div className={styles.commentTimes}>
                                    <p>{comment.createdAt}</p>
                                    <p>{comment.updatedAt}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </>
    )
}


export async function getStaticProps({params}) {
    const post = await PostsAPI.read(params.id);
    const comments = await CommentsAPI.readAll()
    return {
        props: { post,comments }, revalidate: 10
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