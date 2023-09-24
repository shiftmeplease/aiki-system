import { FC } from 'react'
import styles from './Programms.module.css'

const Yellow: FC = () => {
    return(
        <div className={styles.color}>
            <div className={styles.first}>
                <p><span>Жёлтый пояс </span>| 8-кю</p>
                <p><span>Возраст: </span>7-9 лет</p>
                <p><span>Кол-во тренировок: </span>36</p>
            </div>
            <hr/>
            <div className={styles.second}>
                <div className={styles.block}>
                    <span>Самостраховка</span>
                    <ul>
                        <li>падение вперед из стойки</li>
                        <li>падение набок</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <span>Комплекс ударов</span>
                    <ul>
                        <li>Прямые верхние удары </li>
                        <li>Нижние удары</li>
                        <li>Верхний блок </li>
                        <li>Нижний блок</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <span>Комплекс приемов</span>
                    <ul>
                        <li>Опрокидывание на спину за плечи от прямого удара </li>
                        <li>Опрокидывание на спину за ногу с атаки <br/>прямым ударом</li>
                        <li>Опрокидывание на спину за руку <br/>от прямого удара дальней рукой</li>
                        <li>Укладка на живот за руку от удара <br/>ближней рукой</li>
                        <li>Опрокидывание набок за руку от захвата <br/>за плечо</li>
                        <li>Опрокидывание набок от захвата за шею</li>
                    </ul>
                </div>
            </div>
            <div className={styles.third}>
                <div className={styles.th_block}>
                    <span>Тестирование</span>
                    <ul>
                        <li>Опрокидывание набок за руку от захвата за плечо, в точение одной минуты, не меньше двенадцати раз</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Yellow