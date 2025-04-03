import { ToastContainer, toast } from 'react-toastify';
import styles from "./edit.module.css"
import {useState} from "react";
import PostsAPI from "../../lib/api/Posts";
import {router} from "next/client";

export default function EditComponent({params}) {
    const theme = "colored"

    const create = (params.id === "null")

    const [postTitle, setPostTitle] = useState(params.title)
    const [postText, setPostText] = useState(params.text)

    const handelSubmit = async (e) => {
        const now = new Date().toISOString()
        e.preventDefault()
        if (create) {
            await PostsAPI.create({
                title:postTitle,
                text: postText,
                userId:"1",
                createdAt:now,
                updatedAt:"Never"}
            )
            await router.push('/');
        } else {
            await PostsAPI.update({
                title:postTitle,
                text: postText,
                userId:params.userId,
                id:params.id,
                createdAt:params.createdAt,
                updatedAt:now}
            )
            toast.success(` Success`, {
                theme:theme
            })
            await router.push('/');
        }
    }
    const handelSave = async (e) => {
        const now = new Date().toISOString()
        e.preventDefault()
        if (create) {
            toast.error(`Feature is not available`, {
                theme:theme
            })
        } else {
            await PostsAPI.update({
                title:postTitle,
                text: postText,
                userId:params.userId,
                id:params.id,
                createdAt:params.createdAt,
                updatedAt:now}
            )
            toast.success(` Success`, {
                theme:theme
            })
        }
    }

    return (
        <>
            <form className={styles.form}>
                <div className={styles.postContent}>
                    <input className={styles.titleInput} defaultValue={params.title}
                           onChange={(e) => setPostTitle(e.target.value)}></input>
                    <textarea className={styles.textAerea}
                              defaultValue={params.text}
                              onChange={(e) => setPostText(e.target.value)}></textarea>
                    <button className={styles.save} onClick={handelSave}>Save</button>
                    <button className={styles.subbmit} onClick={handelSubmit}>Submit</button>
                </div>
            </form>
            <ToastContainer />
        </>
    )
}