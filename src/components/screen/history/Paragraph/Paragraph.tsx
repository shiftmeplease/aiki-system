import { IHistorySingle } from "@/interfaces/history.interfaces";
import { FC } from "react";
import styles from "../History.module.css"

const Paragraph: FC<IHistorySingle> = ({ history }) => {

    return (
        <div className={styles.paragraph}>
            <p>{history.text}</p>
            <br />
        </div>
    )
}

export default Paragraph