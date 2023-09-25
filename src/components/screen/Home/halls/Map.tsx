import { IMap } from "@/interfaces/halls.interfaces";
import { FC } from "react";
import Image from "next/image";
import styles from "./Halls.module.css";


const Map: FC<IMap> = ({ hallMap }) => {
  if (!hallMap) return null;

  return (
    <div className={styles.box}>
      <div id={`city${hallMap.id}`}>
        <Image
          src={hallMap.src}
          alt={`залы ${hallMap.city}`}
          width={1920}
          height={600}
        />
        {hallMap.address.map((address) => (
          <div key={address.id} className={styles.metka}>
            <div
              style={{
                left: `${address.left}px`,
                top: `${address.top}px`,
                position: "absolute",
              }}
            >
              <Image src="/metka.png" width={70} height={70} alt="metka" />
              <div className={styles.card}>
                <Image
                  src={address.img}
                  width={330}
                  height={180}
                  alt={address.name}
                />
                <div className={styles.text}>
                  <div className={styles.address}>
                    <span>Адрес:</span>
                    <br />
                    <div>{address.name}</div>
                  </div>
                  <div className={styles.timetable}>
                    <span>Расписание:</span>{" "}
                    {address.timetable.map((timetable,index) => (
                      <div key={index}>
                        <div>{timetable.day}</div>
                        {timetable.time.map((time,index) => (
                          <div key={index} className={styles.time}>{time}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className={styles.coach}>
                    <span>Тренер:</span> {address.coach}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
