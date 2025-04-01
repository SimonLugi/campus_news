import styles from './nav.module.css'
import config from './links.json'
import Link from "next/link";

const navItemList = config.navigation

export default function Header(){
    return(
        <header className={styles.navigation}>
            <LogoContainer />
            <Nav />
        </header>
    )
}

function LogoContainer(){
    return(
        <div className={styles.logocontainer}>
            <img src="./logo_campus_news.png" alt="asdfashb" />
            <h1>Campus News</h1>
        </div>
    )
}

function Nav(){
    return(
        <nav className={styles.navContainer}>
            <ul className={styles.navList}>
                <NavItem />
            </ul>
        </nav>
    )
}
function NavItem() {
    return (
        navItemList.map(item => (
            <li className={styles.navItem} key={item.name}>
                <Link href={item.link} className={styles.navLink}>{item.name}</Link>
            </li>
        ))
    );
}