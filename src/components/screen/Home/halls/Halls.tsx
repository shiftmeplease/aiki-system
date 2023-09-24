import { IHalls, ICity, IMap } from "@/interfaces/halls.interfaces"
import { FC } from "react"
import styles from "./Halls.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import Map from "./Map"

const Halls: FC<IHalls> = ({ halls }) => {
    const { asPath } = useRouter()
    let hallMap: ICity = halls[0]
    let actCity: string = "Санкт-Петербург"
    if (!asPath.includes('=')) {
        actCity = "Санкт-Петербург"
        hallMap = halls[0]
    } else {
        halls.map(
            hall => asPath == `/#?city=${String(hall.id)}` ?
                (actCity = hall.city, hallMap = hall) : ('')
        )
    }
    return (
        <div>
            <details className={styles.city}>
                <summary>{actCity}</summary>
                <div className={styles.all}>
                    {halls.length ? halls.map(
                        hall =>
                            <Link key={hall.id}
                                className={actCity == hall.city ?
                                    styles.active : styles.default}
                                href={`/#?city=${String(hall.id)}`}
                            >
                                {hall.city}
                            </Link>
                    ) :
                        <div>Not found</div>
                    }
                </div>
            </details>
            <Map hallMap={hallMap} />
        </div>
    )
}

export default Halls