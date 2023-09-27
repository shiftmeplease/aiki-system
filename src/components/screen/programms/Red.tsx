import { FC } from 'react'
import styles from './Programms.module.css'

const Red: FC = () => {
    return(
        <div className={styles.color}>
            <div className={styles.first}>
                <p><span>Красный пояс </span>| 6-кю</p>
                <p><span>Возраст: </span>13-15 лет</p>
                <p><span>Кол-во тренировок: </span>108</p>
            </div>
            <hr/>
            <div className={styles.second}>
                <div className={styles.block}>
                    <span>Самостраховка</span>
                    <ul>
                        <li>Кувырок вперед/падение <br/>вперед</li>
                        <li>Кувырок назад/падение <br/>назад</li>
                        <li>Кувырок через плечо/падение <br/>набок</li>
                        <li>Высокое падение</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <span>Комплекс ударов</span>
                    <ul>
                        <li>Комплекс ударов</li>
                        <li>Комплекс блоков</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <span>Комплекс приемов</span>
                    <ul>
                        <li>SUMI OTOSHI</li>
                        <li>KIRI OTOSHI</li>
                        <li>USHIRO OTOSHI</li>
                        <li>AIKI OTOSHI</li>
                        <li>Al HANMI MAE OTOSHI</li>
                        <li>AGYAKU HANMI MAE OTOSHI</li>
                    </ul>
                </div>
            </div>
            <div className={styles.third}>
                <div className={styles.th_block}>
                    <span>Тестирование</span>
                    <ul>
                        <li>Раздел OTOSHI в свободной форме в течение минуты, не менее двадцати бросков</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Red