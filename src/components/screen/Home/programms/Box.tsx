import { IProgSingle } from "@/interfaces/prog.interface";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from './Programms.module.css'

const Box: FC<IProgSingle> = ({ prog }) => {
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
        <div className={tab == `/#%20${String(prog.id)}` ? styles.appear : styles.disappear}>

            <Image
                src={prog.src}
                width={330}
                height={212}
                alt={prog.name} />
            <div className={styles.text}>
                <h4 className={styles.name}>{prog.name}</h4>
                <div>{prog.text}</div>
                <button className={styles.button}>Записаться</button>
            </div>

        </div>
    )
}

export default Box