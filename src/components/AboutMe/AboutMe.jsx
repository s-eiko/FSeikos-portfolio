import profileImg from '../../assets/images/profile/foto-perfil.jpeg';

import AboutMeSection from './AboutMeSection';

export default function AboutMe() {
    return (
        <section id="about-me">
            <div id="header">
                <img src={profileImg} alt="Foto de perfil"/>
                <div id="header-description">
                    <h2>Sobre mim</h2>
                    <p>Mariana Seiko Fukuoka<br/>18 anos</p>
                </div>
            </div>
            <p className='about-me-description'>Estudante de Análise e Desenvolvimento de Sistemas dedicada a aprender novas tecnologias! Atualmente meu foco é no front-end, mas pretendo desenvolver habilidades full-stack e me especializar no back-end futuramente.</p>
            <div id="about-me-buttons-box">
                <a target="_blank" href="https://www.linkedin.com/in/mariana-seiko-fukuoka-456323314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Conecte-se</a>
                <a target="_blank" href="https://docs.google.com/document/d/1ivE8mO_nuzd8aWrSJgDH30GYVZZ-I9Tj7TyTpLD5APs/edit?usp=sharing">Currículo</a>
            </div>
            <AboutMeSection
                sectionName="academic"
                title="Formação"
                subtitle="Análise e Desenvolvimento de Sistemas"
            >
                Faculdade de Tecnologia (FATEC) Jundiaí <br/>
                Fev 2024 - Atual <br/>
                Tecnólogo
            </AboutMeSection>
            <AboutMeSection
                sectionName="experience"
                title="Experiência"
                subtitle="Trabalho voluntário em desenvolvimento web"
            >
                Organização Mulheres de Fases <br/>
                Out 2024 - Dez 2024 <br/>
                Ministração de aulas de desenvolvimento web para alunos da rede pública utilizando HTML, CSS e JavaScript
            </AboutMeSection>
        </section>
    );
}