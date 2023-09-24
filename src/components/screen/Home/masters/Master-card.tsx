import { IMasterSingle } from '@/interfaces/mast.interfaces'
import { FC } from 'react'
import styles from './Master-card.module.css'
import Image from 'next/image'

const Card: FC<IMasterSingle> = ({ master }) => {

    return (
        <div className={styles.card}>

            <Image
                src={master.src}
                width={254}
                height={299}
                alt={master.name} />
            <div className={styles.bord}>
                <span>{master.name}</span>
                <span>Город: {master.city}</span>
                <span>{master.belt}</span>
            </div>

        </div >
    )
}

export default Card