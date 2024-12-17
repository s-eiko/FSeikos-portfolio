import githubImg from '../assets/images/icons/github.png';
import linkedinImg from '../assets/images/icons/linkedin.png';

import SocialLinks from './SocialLinks';

export default function Home() {
    return (
        <section id="home">
            <div id="introduction">
                <h1>Olá, sou <span id="name">Mariana Seiko Fukuoka</span></h1>
                <p id="slogan">Construindo produtos para web com as principais tecnologias do mercado</p>
            </div>
            <div id="social-box">
                <SocialLinks linkRef='https://github.com/s-eiko' imgSrc={githubImg} alt='Ícone do GitHub' />
                <SocialLinks linkRef='https://www.linkedin.com/in/mariana-seiko-fukuoka-456323314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' imgSrc={linkedinImg} alt='Ícone do Linkedin' />
            </div>
        </section>
    );
}