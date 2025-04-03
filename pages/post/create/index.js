import EditComponent from "../../../components/EditComponent";
import styles from "../../../components/EditComponent/edit.module.css";
import Link from "next/link";


export default function Edit() {
    const post = {
        "id": "null",
        "userId": `HELLO`,
        "postId": ``,
        "text": "",
        "createdAt": "",
        "updatedAt": ""
    }
    return (
        <>
            <div className={styles.buttonContainer}>
                <Link className={styles.button} href={`/`}><i className="fa-solid fa-arrow-left"></i>Back</Link>
            </div>
            <EditComponent params={post}/>
        </>
    )
}