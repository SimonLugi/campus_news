import { useGlobalContext } from "@/store";

export default function Profile() {
    const { session, login, logout } = useGlobalContext()

    return(
        <p>{JSON.stringify(session)}</p>
    )
}
