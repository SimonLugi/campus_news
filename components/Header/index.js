import {useGlobalContext} from "@/store";

import styles from './nav.module.css'
import config from './links.json'
import Link from "next/link";

const navItemList = config.navigation
let filterdList = config.navigation

export default function Header(){
    return(
        <header className={styles.navigation}>
            <LogoContainer />
            <Nav/>
            <MobileNav />
        </header>
    )
}

function LogoContainer(){
    return(
        <div className={styles.logoaligmentcontainer}>
        <Link className={styles.logocontainer} href={"/"}>
            <img className={styles.logo} src="/logo.svg" alt="Logo" />
            <h1 className={styles.title}>Campus News</h1>
        </Link>
        </div>
    )
}

function Nav(){
    const { session, logout } = useGlobalContext()
    return(
        <nav className={styles.navContainer}>
            <ul className={styles.navList}>
                <NavItem/>
                { session && <li className={styles.navItem}>
                    <Link href="/login" className={styles.navLink} onClick={logout}>Logout</Link>
                </li>
                }
            </ul>
        </nav>
    )
}
function MobileNav(){
    const { session, logout } = useGlobalContext()
    return(
        <div className={styles.mobileNavContainerContainer}>
            <i className={`fa fa-bars ${styles.bars}`} aria-hidden="true"></i>
            <nav className={styles.mobileNavContainer}>
                <ul className={styles.mobileNavList}>
                    <NavItem/>
                    { session && <li className={styles.navItem}>
                        <Link href="/login" className={styles.navLink} onClick={logout}>Logout</Link>
                    </li>
                    }
                </ul>
            </nav>
        </div>
    )
}


function NavItem() {
    const { session} = useGlobalContext()

    if (!session){
        filterdList = navItemList.filter(navItem => navItem.name !== "Profile" && navItem.name !== "Create");
        filterdList.push({ name: "Create", link: "/login" });
    }else {
        filterdList = navItemList.filter(navItem => navItem.name !== "Login");
    }
    return (
        filterdList.map(item => (
                <li className={styles.navItem} key={item.name}>
                    <Link href={item.link} className={styles.navLink}>{item.name}</Link>
                </li>
            )
        )
    );
}
