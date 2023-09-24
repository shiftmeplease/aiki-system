import { IProgName } from "@/interfaces/prog.interface";
import { FC, useEffect, useState } from "react";
import styles from "./Programms.module.css"
import Link from "next/link";
import { Router, useRouter } from "next/router";

const Programms: FC<IProgName> = ({ id, name }) => {
    const { asPath } = useRouter();
    const [tab, setTab] = useState('/#%200')
    useEffect(() => {
        if (!asPath.includes('%')) {
            setTab('/#%200')
        } else {
            setTab(asPath)
        }
    }, [asPath])

    return (
        <>
            <Link href={`/#%20${String(id)}`} id={styles.name} className={tab == `/#%20${String(id)}` ? styles.active : styles.default}><span id={String(id)}>{name}</span></Link>
        </>
    )
}

export default Programms