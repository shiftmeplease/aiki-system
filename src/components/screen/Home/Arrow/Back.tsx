import { FC } from 'react'
import Image from 'next/image'
import { IArrow } from '@/interfaces/arrow.interfaces'

const Back: FC = () => {
    return (
        <Image
            src='/Arrow.svg'
            width={55}
            height={10}
            alt="стрелка" />
    )
}

export default Back