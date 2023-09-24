import { FC } from "react";
import Image from "next/image";
import { ISub } from "./subtract.interface";
import styles from "./Subtract.module.css";


const Subtract: FC<ISub> = ({ text }) => {

    return (
        <div className={styles.box}>
            <Image
                width={22}
                height={22}
                src={'/Subtract.svg'}
                alt="subtract logo" />
            <p>{text}</p>
        </div>
    )
}

export default Subtract