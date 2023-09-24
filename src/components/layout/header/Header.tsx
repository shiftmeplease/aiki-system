import { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from './Header.module.css'
import Image from "../../../../node_modules/next/image";


const Header: FC = () => {

    const [open, setOpen] = useState(false)

    const MobMenu = () => {
        setOpen(!open)
    }

    const { pathname } = useRouter()

    return (
        <>
            <header className={styles.header}>
                <Image
                    src='/logo.svg'
                    alt='aiki-system logo'
                    width={90}
                    height={90}
                    className= {styles.logo}
                />
                <div className={styles.pc}>
                    <Link href='/' className={pathname === '/' ? styles.active : ''}>Главная</Link>
                    <Link href='/programms' className={pathname === '/programms' ? styles.active : ''}>Программы</Link>
                    <Link href='/#halls' className={pathname === '/about' ? styles.active : ''}>Наши залы</Link>
                    <Link href='/students' className={pathname === '/students' ? styles.active : ''}>Ученики</Link>
                    <Link href='/about_us' className={pathname === '/about_us' ? styles.active : ''}>О нас</Link>
                </div>
                <div className={styles.pc_tel}>
                    <span className={pathname === '/' ? styles.tel_wh : styles.tel_bl} >+7(900)180-90-90</span>
                    <span className={styles.icon} >
                        <Image
                            width={30}
                            height={30}
                            src={'/tg.svg'}
                            alt="telegram logo" />
                        <Image
                            width={30}
                            height={30}
                            src={'/wu.svg'}
                            alt="what`s up logo" />
                    </span>
                </div>
                <div className={styles.mob}>
                    <button className={styles.burger} onClick={MobMenu} style={pathname === '/' ? { color: 'white' } : { color: 'var(--blue)' }}>
                        <span className={styles.nav}>
                            <div className={styles.open}
                                style={pathname === '/' ? {
                                    border: "2px solid white",
                                    borderRadius: 50,
                                    width: 50,
                                    height: 0,
                                    marginTop: 10
                                } : {
                                    border: "2px solid var(--blue)",
                                    width: 50,
                                    height: 0,
                                    marginTop: 10
                                }}
                            />
                            <div
                                style={pathname === '/' ? {
                                    border: "2px solid white",
                                    borderRadius: 50,
                                    width: 50,
                                    height: 0,
                                    marginTop: 10
                                } : {
                                    border: "2px solid var(--blue)",
                                    width: 50,
                                    height: 0,
                                    marginTop: 10
                                }}
                            />
                            <div
                                style={pathname === '/' ? {
                                    border: "2px solid white",
                                    borderRadius: 50,
                                    width: 30,
                                    height: 0,
                                    marginTop: 10,
                                    marginLeft: 20
                                } : {
                                    border: "2px solid var(--blue)",
                                    width: 30,
                                    height: 0,
                                    marginTop: 10,
                                    marginLeft: 20
                                }}
                            />
                        </span>
                    </button>
                    {open && (
                        <div className={styles.mob_menu}>
                            <button className={styles.burger} onClick={MobMenu}>
                                <span className={styles.nav}>
                                    <div className={styles.open}
                                        style={{
                                            border: "1px solid white",
                                            width: 50,
                                            height: 0,
                                            marginTop: 5,
                                            transform: "rotateZ(45deg)",
                                        }}
                                    />
                                    <div
                                        style={{
                                            border: "1px solid white",
                                            width: 50,
                                            height: 0,
                                            marginTop: -1,
                                            transform: "rotateZ(-45deg)"
                                        }}
                                    />
                                </span>
                            </button>
                            <div>
                                <Link onClick={MobMenu} href='/' className={pathname === '/' ? styles.active : ''}>Главная</Link>
                                <Link onClick={MobMenu} href='/programms' className={pathname === '/programms' ? styles.active : ''}>Программы</Link>
                                <Link onClick={MobMenu} href='/#halls' className={pathname === '/about' ? styles.active : ''}>Наши залы</Link>
                                <Link onClick={MobMenu} href='/students' className={pathname === '/students' ? styles.active : ''}>Ученики</Link>
                                <Link onClick={MobMenu} href='/about_us' className={pathname === '/about_us' ? styles.active : ''}>О нас</Link>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.tel_mob} >+7(900)180-90-90</span>
                                <span className={styles.icon} >
                                    <Image
                                        width={30}
                                        height={30}
                                        src={'/tg.svg'}
                                        alt="telegram logo" />
                                    <Image
                                        width={30}
                                        height={30}
                                        src={'/wu.svg'}
                                        alt="what`s up logo" />
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </header>

        </>
    )
}

export default Header