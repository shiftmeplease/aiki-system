import Layout from "@/components/layout/Layout";
import { IHistory } from "@/interfaces/history.interfaces";
import { FC } from 'react'
import styles from './History.module.css'
import Paragraph from './Paragraph/Paragraph'

const History: FC<IHistory> = ({ history }) => {

    return (
        <Layout title="История клуба" description="История клуба">
            <article className={styles.box}>
                <h2>ИСТОРИЯ КЛУБА</h2>
                {history.length ? history.map(
                    histor =>
                        <Paragraph history={histor} />
                ) :
                    <div>Not found</div>
                }
            </article>
        </Layout>
    )
}

export default History