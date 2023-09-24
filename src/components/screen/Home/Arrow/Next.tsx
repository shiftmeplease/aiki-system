import { FC } from 'react'
import Image from 'next/image'

const Next: FC = () => {
    return (
        <Image
            src='/Arrow.svg'
            width={55}
            height={10}
            alt="стрелка"
            style={{ transform: "rotateZ(180deg)" }} />
    )
}

export default Next