import Layout from "@/components/layout/Layout"

import styles from "@/styles/404.module.css"

export default function Custom404() {
    return (
        <Layout title="404">
            <article className={styles.article}>
                <h1>404 | Данной страницы не существует</h1>
            </article>
        </Layout>
    )
}