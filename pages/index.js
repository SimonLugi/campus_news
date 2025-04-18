import Head from "next/head";
import Post from "@/components/Post";
import PostsAPI from "@/lib/api/Posts";
import styles from './home.module.css'

export default function Home({posts}){
  return (
      <>
          <Head>
              <title> | Campus News</title>
          </Head>
          <h1 className={styles.title}>Home Site</h1>
          <div className={styles.postContainer} >
          {posts.map(item => {
              return(
                  <Post key={item.id} post={item}/>
              )
          })}
          </div>
      </>
  )
}

export async function getStaticProps() {
    const posts = await PostsAPI.readAll();
    return {
        props: { posts }, revalidate: 10
    }
}
