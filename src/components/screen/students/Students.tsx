import Layout from "@/components/layout/Layout";
import { FC, useState, ChangeEvent } from 'react'
import styles from './Students.module.css'
import debounce from "lodash.debounce"
import { IStudentData, IStudent } from "@/interfaces/students.interface"

function studentsArrayToRow(arr: IStudent[]) {
    return arr.map(student => {
        return <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.city}</td>
            <td>{student.Dan}</td>
            <td>{student.Sert}</td>
        </tr>
    })
}

const Students: FC<IStudentData> = ({ students }) => {
    const [value, setValue] = useState("");
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }
    let filtered: IStudent[] = [];

    if (value !== "") {
        filtered = students.filter((v: IStudent) =>
            v.name.toLowerCase().match(value.toLowerCase())
        )
    }
    const debouncedChange = debounce(handleChange, 500);

    return (
        <Layout title="Ученики" description="Ученики клуба">
            <div className={styles.box}>
                <h2>Ученики</h2>
                <label className={styles.label}>
                    <input className={styles.searchInput} placeholder="Имя и Фамилия" onChange={debouncedChange} />
                </label>
                {students.length > 0 ?
                    <table className={styles.tableNode} cellSpacing={"210px"} >
                        <thead className={styles.tableHeaders}>
                            <tr>
                                <th>Имя Фамилия</th>
                                <th>Город</th>
                                <th>КЮ/Дан</th>
                                <th>Сертификат</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody} >

                            {filtered.length > 0 ? studentsArrayToRow(filtered) : (value !== "" ? <tr><td>{`Ученик ${value} не найден`}</td></tr> : studentsArrayToRow(students))}
                        </tbody>
                    </table>
                    : "Нет информации про Учеников"}
            </div>
        </Layout>
    )
}

export default Students