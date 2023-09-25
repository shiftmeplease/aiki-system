import { FC, useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
import Image from "next/image";
// @ts-ignore
import { Modal } from "next-modal";
import { SidebarContext } from "../Layout";

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  let { setCity, city } = useContext(SidebarContext);

  const [toggleModal, setToggleModal] = useState(false);
  const cities = ['Санкт-Петербург', "Пермь", "Ижевск", "Каменка",];
  const MobMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const cityWasOpen = localStorage.getItem("cityWasOpen");
    if (!cityWasOpen) {
      setToggleModal(true);
      localStorage.setItem("cityWasOpen", "true");
    }
  }, []);

  const { pathname } = useRouter();

  return (
    <>
      <header className={styles.header}>
        <Image src="/logo.svg" alt="aiki-system logo" width={90} height={90} />
        <div className={styles.pc}>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Главная
          </Link>
          <Link
            href="/programms"
            className={pathname === "/programms" ? styles.active : ""}
          >
            Программы
          </Link>
          <Link
            href="/#halls"
            className={pathname === "/about" ? styles.active : ""}
          >
            Наши залы
          </Link>
          <Link
            href="/students"
            className={pathname === "/students" ? styles.active : ""}
          >
            Ученики
          </Link>
          <Link
            href="/about_us"
            className={pathname === "/about_us" ? styles.active : ""}
          >
            О нас
          </Link>
        </div>
        <div className="contact">
          <div className={styles.pc_tel}>
            <span className={pathname === "/" ? styles.tel_wh : styles.tel_bl}>
              +7(900)180-90-90
            </span>
            <span className={styles.icon}>
              <Image
                width={30}
                height={30}
                src={"/tg.svg"}
                alt="telegram logo"
              />
              <Image
                width={30}
                height={30}
                src={"/wu.svg"}
                alt="what`s up logo"
              />
            </span>
          </div>
          <div className={styles.pc_tel} onClick={() => setToggleModal(true)}>
            <div>Ваш город: {city}</div>
          </div>
        </div>

        <div className={styles.mob}>
          <button
            className={styles.burger}
            onClick={MobMenu}
            style={
              pathname === "/" ? { color: "white" } : { color: "var(--blue)" }
            }
          >
            <span className={styles.nav}>
              <div
                className={styles.open}
                style={
                  pathname === "/"
                    ? {
                        border: "2px solid white",
                        borderRadius: 50,
                        width: 50,
                        height: 0,
                        marginTop: 10,
                      }
                    : {
                        border: "2px solid var(--blue)",
                        width: 50,
                        height: 0,
                        marginTop: 10,
                      }
                }
              />
              <div
                style={
                  pathname === "/"
                    ? {
                        border: "2px solid white",
                        borderRadius: 50,
                        width: 50,
                        height: 0,
                        marginTop: 10,
                      }
                    : {
                        border: "2px solid var(--blue)",
                        width: 50,
                        height: 0,
                        marginTop: 10,
                      }
                }
              />
              <div
                style={
                  pathname === "/"
                    ? {
                        border: "2px solid white",
                        borderRadius: 50,
                        width: 30,
                        height: 0,
                        marginTop: 10,
                        marginLeft: 20,
                      }
                    : {
                        border: "2px solid var(--blue)",
                        width: 30,
                        height: 0,
                        marginTop: 10,
                        marginLeft: 20,
                      }
                }
              />
            </span>
          </button>
          {open && (
            <div className={styles.mob_menu}>
              <button className={styles.burger} onClick={MobMenu}>
                <span className={styles.nav}>
                  <div
                    className={styles.open}
                    style={{
                      border: "1px solid white",
                      width: 50,
                      height: 0,
                      marginTop: 5,
                      transform: "rotateZ(45deg)",
                    }}
                  />
                  <div
                    style={{
                      border: "1px solid white",
                      width: 50,
                      height: 0,
                      marginTop: -1,
                      transform: "rotateZ(-45deg)",
                    }}
                  />
                </span>
              </button>
              <div>
                <Link
                  onClick={MobMenu}
                  href="/"
                  className={pathname === "/" ? styles.active : ""}
                >
                  Главная
                </Link>
                <Link
                  onClick={MobMenu}
                  href="/programms"
                  className={pathname === "/programms" ? styles.active : ""}
                >
                  Программы
                </Link>
                <Link
                  onClick={MobMenu}
                  href="/#halls"
                  className={pathname === "/about" ? styles.active : ""}
                >
                  Наши залы
                </Link>
                <Link
                  onClick={MobMenu}
                  href="/students"
                  className={pathname === "/students" ? styles.active : ""}
                >
                  Ученики
                </Link>
                <Link
                  onClick={MobMenu}
                  href="/about_us"
                  className={pathname === "/about_us" ? styles.active : ""}
                >
                  О нас
                </Link>
              </div>
              <div className={styles.info}>
                <span className={styles.tel_mob}>+7(900)180-90-90</span>
                <span className={styles.icon}>
                  <Image
                    width={30}
                    height={30}
                    src={"/tg.svg"}
                    alt="telegram logo"
                  />
                  <Image
                    width={30}
                    height={30}
                    src={"/wu.svg"}
                    alt="what`s up logo"
                  />
                </span>
              </div>
              <div
                className='modal-header-css'
                onClick={() =>{
                  setOpen(false)
                   setToggleModal(true)}}
              >
                <div>Ваш город: {city}</div>
              </div>
            </div>
          )}
        </div>
        <Modal toggle={toggleModal} setToggle={setToggleModal}>
          <Modal.Header>
            <h3 className="modal-container modal-header-css">Выберите город</h3>
          </Modal.Header>
          <Modal.Body>
            <form action="" className="modal-container">
              {cities.map((city) => (
                <div className="modal-form">
                  <input name="city" id={city} value={city} type="radio" />
                  <label htmlFor={city}>{city}</label>
                </div>
              ))}
              <button
                type="submit"
                className="button"
                onClick={(e) => {
                  e.preventDefault();
                  const inputsHTML = document.getElementsByTagName("input");
                  const inputsObj = Array.from(inputsHTML);
                  const city = inputsObj.find(
                    (input) => input.checked
                  )?.defaultValue;
                  if (!city) return;
                  setCity && setCity(city);
                  setToggleModal(false);
                }}
              >
                Сохранить
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </header>
    </>
  );
};

export default Header;
