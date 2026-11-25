
import styles from "../assets/Home.module.css"
import { FaReact } from "react-icons/fa6";
import { BsTypescript } from "react-icons/bs";
import { FaNodeJs, FaBootstrap, FaGitAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import taskmanager from "../assets/taskmanager.png"
import clinic from "../assets/clinic-system.png"
import ps from "../assets/ps.png"
export function Home() {
    return (
        <div className={ styles.container }>
            <header className={ styles.headerContent }>
                    <img className={styles.imagelogo} src={ps} alt="" />
                <nav>
                    <a href="#about">Sobre</a>
                    <a href="#projects">Projetos</a>
                    <a href="#skills">Skills</a>
                    <a href="#contacts">Contatos</a>
                    <button className={ styles.btnDonwload }>Download CV</button> 
                    
                </nav>
            </header>
            <main>
                <section className={ styles.hero }>
                    <div className={ styles.herocontent }>
                        <span className={ styles.minicard }>Disponivel para oportunidades</span>
                        <h1 className={ styles.heroTitle }>Pedro Silva</h1>
                        <h2 className={ styles.heroSubTitle }>Desenvolvedor de <span className={ styles['text-color'] }>Software</span></h2>
                        <p className={ styles.heroDescription }>Construindo aplicações, seguras e escalaveis
                            com foco em perfomace e experiência do usuário.
                        </p>
                        <div className={ styles.herobuttons }>
                            <button className={ styles.btnSP }>Ver projetos</button>
                            <button className={ styles.btnLT }>Vamos conversar</button>
                        </div>
                    </div>
                    <div className={ styles.heroImage }>
                        <div className={ styles.heroglow }>
                            aqui fica uma imagem
                            {/* imagem / glow / avatar */ }
                        </div>
                    </div>
                </section>
                <section className={ styles.sectionGroups } id="skills">
                    <section className={ styles.skills }>
                        <h2>Tecnologias</h2>
                        <div className={ styles.cardSkills }>
                            <span className={ styles.logo }>
                                <FaReact className={ styles.iconR } />
                                React</span>
                            <span className={ styles.logo }>
                                <BsTypescript className={ styles.iconT } />
                                Typescript</span>
                            <span className={ styles.logo }>
                                <FaNodeJs className={ styles.iconN } />
                                Node.js</span>
                            <span className={ styles.logo }>
                                <BiLogoPostgresql className={ styles.iconP } />
                                PostgreSql</span>
                            <span className={ styles.logo }>
                                <FaBootstrap className={ styles.iconB } />
                                Bootstrap</span>
                            <span className={ styles.logo }>
                                <FaGitAlt className={ styles.iconG } />
                                Git</span>
                        </div>
                    </section>
                    <section className={ styles.projects } id="projects">
                        <div className={ styles.groupTitle }>
                            <h2>Projetos em destaque</h2>
                        </div>
                        <div className={ styles.cardProjects }>
                            <article className={ styles.card }>
                                <img className={ styles.imagemock } src={ taskmanager } />
                                <h2 className={ styles['card-title'] }>TaskManager</h2>
                                <p className={ styles['card-text'] }>
                                    Aplicação de gerenciamento de tarefas inspirada na metodologia Kanban, permitindo organizar atividades em diferentes etapas, acompanhar o progresso e visualizar o fluxo de trabalho de maneira simples e intuitiva.
                                </p>                            <div className={ styles.badgegroups }>
                                    <span className={ styles.badge }>React</span>
                                    <span className={ styles.badge }>Typescript</span>
                                    <span className={ styles.badge }>Node.js</span>
                                </div>
                                <a className={styles.viewProject} href="https://task-manager21.vercel.app/" target="_blank" rel="noopener noreferrer">Visualizar projeto →</a>

                            </article>
                            <article className={ styles.card }>
                                <img
                                    className={ styles.imagemock }
                                    src={clinic}
                                    alt="Interface do Clinic System"
                                />                            <h2 className={ styles['card-title'] }>Gestão de Clínicas Psicológicas</h2>
                                <p className={ styles['card-text'] }>
                                    Aplicação Full Stack para gerenciamento de clínicas psicológicas, com autenticação JWT, controle de acesso, API REST, gerenciamento de dados e persistência em banco de dados PostgreSQL.
                                </p><div className={ styles.badgegroups }>
                                    <span className={ styles.badge }>React</span>
                                    <span className={ styles.badge }>TypeScript</span>
                                    <span className={ styles.badge }>Node.js</span>
                                    <span className={ styles.badge }>Express</span>
                                    <span className={ styles.badge }>PostgreSQL</span>
                                    <span className={ styles.badge }>Prisma</span>
                                </div>

                                <a className={styles.viewProject}
                                    href="https://sistema-clinica-jet.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visualizar projeto →
                                </a>
                            </article>
                        </div>
                    </section>
                </section>
                <section className={ styles.contact } id="contacts">
                    <h2>Contato</h2>
<div className={styles.cardsContact}>

    <a
        className={styles.cardbadgecontact}
        href="mailto:pedrosilva354@gmail.com"
    >
        <h3 className={styles['card-title-contact']}>
            <MdOutlineEmail />
            Email
        </h3>

        <p className={styles['card-text-contact']}>
            pedrosilva354@gmail.com
        </p>
    </a>

    <a
        className={styles.cardbadgecontact}
        href="https://www.linkedin.com/in/pedro-silva-576327125/"
        target="_blank"
        rel="noopener noreferrer"
    >
        <h3 className={styles['card-title-contact']}>
            <FaLinkedin />
            LinkedIn
        </h3>

        <p className={styles['card-text-contact']}>
            pedrosilva
        </p>
    </a>

    <a
        className={styles.cardbadgecontact}
        href="https://github.com/pedro354"
        target="_blank"
        rel="noopener noreferrer"
    >
        <h3 className={styles['card-title-contact']}>
            <FaGithub />
            GitHub
        </h3>

        <p className={styles['card-text-contact']}>
            pedro354
        </p>
    </a>

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
