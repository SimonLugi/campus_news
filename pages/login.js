import {useGlobalContext} from "@/store";
import {useState} from "react";
import UsersAPI from "@/lib/api/Users";
import {router} from "next/client";
import styles from "./login.module.css"
import {toast, ToastContainer} from "react-toastify";

export default function Login(){
    const { session, login, logout } = useGlobalContext()

    const [isLoading, setIsLoading] = useState(false)
    const [model, setModel] = useState({ email: "", password: "" })

    async function handleSubmit(e) {
        try{
        e.preventDefault()
        const response = await UsersAPI.create(model)
        console.log("Outside if" + response)
        if (response){
            console.log("Inside if" + response)
            login(response)
            await router.push("/")
        }
        }catch(e){
            toast.error("User not found")
        }
    }


    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setModel({
            ...model,
            ...{
                [name]: value
            }
        })
    }


    return(
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Login</h2>
                <div className={styles.formContainer}>
                    <input  onChange={handleChange} type="email"
                           name="email" placeholder="Email" className={styles.input1} required="true" />
                    <input onChange={handleChange} type="password"
                           name="password"  placeholder="Password" className={styles.input2} required="true" />
                    <button className={styles.button} disabled={isLoading}>
                        {isLoading ? "...Loading" : "Login"}
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>

    )
}