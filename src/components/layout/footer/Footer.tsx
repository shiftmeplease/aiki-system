import styles from './footer.module.css'
import { FC } from "react";
import Image from 'next/image';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Image
                    src="logo.svg"
                    width={90}
                    height={90}
                    alt='Логотип айки-систем' />
                <ul>
                    <li>Главная</li>
                    <li>Программы</li>
                    <li>Наши залы</li>
                    <li>Ученики</li>
                    <li>О нас</li>
                </ul>
            </div>
            <span>S.ink studio &copy; 2022</span>
        </footer>
    )
}

export default Footer