import Home from "@/components/screen/Home/Home"
import { Service } from '@/service/car.service'
import { GetStaticProps, NextPage } from 'next'
import { IData } from "@/interfaces/data.interfaces";


const HomePage: NextPage<IData> = ({ progs, masters, halls }) => {

    return (
        <>
            <Home progs={progs} masters={masters} halls={halls} />
        </>
    )
}

export const getStaticProps: GetStaticProps<IData> = async () => {
    const progs = await Service.getProgramm()
    const masters = await Service.getMasters()
    const halls = await Service.getHalls()

    return {
        props: { progs, masters, halls },
        revalidate: 3600,
    }
}

export default HomePage