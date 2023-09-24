import { FC } from 'react'
import styles from './Programms.module.css'

const White: FC = () => {
    return(
        <div className={styles.color}>
            <div className={styles.first}>
                <p><span>Белый пояс </span>| 9-кю</p>
                <p><span>Возраст: </span>4-6 лет</p>
                <p><span>Кол-во тренировок: </span>24</p>
            </div>
            <hr/>
            <div className={styles.second}>
                <div className={styles.block}>
                    <span>Самостраховка</span>
                    <ul>
                        <li>падение вперед</li>
                        <li>падение назад</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <span>Комплекс ударов</span>
                    <ul>
                        <li>Прямые верхние удары</li>
                        <li>Верхний блок</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <span>Комплекс приемов</span>
                    <ul>
                        <li>Опрокидыване на спину за плечи</li>
                        <li>Опрокидывание на спину за ноги</li>
                        <li>Опрокидывание на спину за руку</li>
                        <li>Укладка на живот за руку</li>
                    </ul>
                </div>
            </div>
            <div className={styles.third}>
                <div className={styles.th_block}>
                    <span>Тестирование</span>
                    <ul>
                        <li>Опрокидывание на спину за плечи, в течение одной минуты, не меньше десяти раз</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default White