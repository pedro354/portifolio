
import styles from "../assets/Home.module.css"
import { FaReact } from "react-icons/fa6";
import { BsTypescript } from "react-icons/bs";
import { FaNodeJs, FaBootstrap, FaGitAlt,FaLinkedin,FaGithub    } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import taskManager from "../assets/taskManager.png"
export function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.headerContent}>
                <div className="image-link">
                <img src="/" alt="< PS />" /> 
                </div>
                <nav>
                    <a href="#about">Sobre</a>
                    <a href="#projects">Projetos</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contatos</a>
                    <button className={styles.btnDonwload}>Download CV</button>
                </nav>
            </header>
            <main>
                <section className={styles.hero}>
                    <div className={styles.herocontent}>
                    <span className={styles.minicard}>Disponivel para oportunidades</span>
                    <h1 className={styles.heroTitle}>Pedro Silva</h1>
                    <h2 className={styles.heroSubTitle}>Desenvolvedor de <span className={styles['text-color']}>Software</span></h2>
                    <p className={styles.heroDescription}>Construindo aplicações, seguras e escalaveis
                        com foco em perfomace e experiência do usuário.
                    </p>
                    <div className={styles.herobuttons}>
                    <button className={styles.btnSP}>Ver projetos</button>
                    <button className={styles.btnLT}>Vamos conversar</button>
                    </div>
                    </div>
                    <div className={styles.heroImage}>
                        <div className={styles.heroglow}>
                        aqui fica uma imagem
                        {/* imagem / glow / avatar */}
                        </div>
                    </div>
                </section>
                <section className={styles.sectionGroups}>
                <section className={styles.skills}>
                    <h2>Tecnologias</h2>
                    <div className={styles.cardSkills}>
                        <span className={styles.logo}>
                            <FaReact className={styles.iconR} />
                            React</span>
                        <span className={styles.logo}>
                            <BsTypescript  className={styles.iconT} />
                            Typescript</span>
                        <span className={styles.logo}>
                            <FaNodeJs  className={styles.iconN} />
                            Node.js</span>
                        <span className={styles.logo}>
                            <BiLogoPostgresql  className={styles.iconP} />
                            PostgreSql</span>
                        <span className={styles.logo}>
                            <FaBootstrap  className={styles.iconB} />
                            Bootstrap</span>
                        <span className={styles.logo}>
                            <FaGitAlt className={styles.iconG} />
                            Git</span>
                    </div>
                </section>
                <section className={styles.projects}>
                    <div className={styles.groupTitle}>
                    <h2>Projetos em destaque</h2>
                    <p className={styles.seeAll}>Ver todos ➝ </p>
                    </div>
                    <div className={styles.cardProjects}>
                        <article className={styles.card}>
                            <img className={styles.imagemock} src={taskManager} />
                            <h2 className={styles['card-title']}>TaskManager</h2>
                            <p className={styles['card-text']}>Gerenciador de tarefas inspirado na metodologia Kanban</p>
                            <div className={styles.badgegroups}>
                                <span className={styles.badge}>React</span>
                                <span className={styles.badge}>Typescript</span>
                                <span className={styles.badge}>Node.js</span>
                            </div>
                        </article>
                        <article className={styles.card}>
                            <img className={styles.imagemock} src={""} alt="" />
                            <h2 className={styles['card-title']}>SecureAuth API</h2>
                            <p className={styles['card-text']}>API de autenticação segura com JWT e proteção avançada.</p>
                            <div className={styles.badgegroups}>
                                <span className={styles.badge}>React</span>
                                <span className={styles.badge}>Typescript</span>
                                <span className={styles.badge}>Node.js</span>
                            </div>
                        </article>
                        <article className={styles.card}>
                            <img className={styles.imagemock} src={""} alt="" />
                            <h2 className={styles['card-title']}>DevNotes</h2>
                            <p className={styles['card-text']}>Aplicação de notas para desenvolvedores.</p>
                            <div className={styles.badgegroups}>
                                <span className={styles.badge}>React</span>
                                <span className={styles.badge}>Typescript</span>
                                <span className={styles.badge}>Node.js</span>
                            </div>
                        </article>
                    </div>
                </section>
                </section>
                <section className={styles.contact}>
                    <h2>Contato</h2>
                    <div className={styles.cardsContact}>
                        <article>
                        <h3 className={styles['card-title']}>
                        <MdOutlineEmail /> 
                             Email</h3>
                        <p className={styles['card-text']}>
                            pedrosilva354@gmail.com</p>
                        </article>
                        <article>
                        <h3 className={styles['card-title']}>
                            <FaLinkedin />
                            Linkedin</h3>
                        <p className={styles['card-text']}>
                            pedrosilva</p>
                        </article>
                        <article>
                        <h3 className={styles['card-title']}>
                            <FaGithub />
                            Github</h3>
                        <p className={styles['card-text']}>
                            pedro354@</p>
                        </article>
                    </div>
                <hr />
                </section>
            </main>
            <footer>
                <span>@2026 Pedro Silva</span>
                <span>Feito com café  e React</span>
            </footer>
        </div>
    )
}
