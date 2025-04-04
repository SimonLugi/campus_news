import EditComponent from "../../../../components/EditComponent";
import PostsAPI from "../../../../lib/api/Posts";
import styles from "./edit.module.css"
import Link from "next/link";
import {router} from "next/client";
import {useGlobalContext} from "@/store";

export default function Edit({post}) {
    const {session} = useGlobalContext()
    const handleDeletePost = async () => {
        await PostsAPI.delete(post.id,session.accesToken)
        await router.push('/');
    }


    return (
        <>
            <div className={styles.buttonContainer}>
                <Link className={styles.button} href={`/`}><i className="fa-solid fa-arrow-left"></i>Back</Link>
                <button className={`${styles.button} ${styles.delete}`} onClick={handleDeletePost}>Delete</button>
            </div>
            <EditComponent params={post}/>
        </>
    )
}

export async function getStaticProps({params}) {
    const post = await PostsAPI.read(params.id);
    return {
        props: {post}, revalidate: 10
    }
}

export async function getStaticPaths() {
    const posts = await PostsAPI.readAll()

    //from Flücki
    const paths = posts.map(post => ({
        params: {id: post.id.toString()}
    }));

    return {
        paths: paths,
        fallback: true
    }
}