import githubImg from '../assets/images/icons/github.png';
import linkedinImg from '../assets/images/icons/linkedin.png';

import SocialLinks from "./SocialLinks";

export default function Contact() {
    return (
        <section id="contact">
            <h2>Contate-me</h2>
            <p>Contate-me para um serviço ou conecte-se comigo:</p>
            <div id="contact-box">
                <SocialLinks linkRef="https://github.com/s-eiko" imgSrc={githubImg} alt="Ícone do GitHub">GitHub</SocialLinks>
                <SocialLinks linkRef="https://www.linkedin.com/in/mariana-seiko-fukuoka-456323314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" imgSrc={linkedinImg} alt="Ícone do Linkedin">Linkedin</SocialLinks>
            </div>
            <div id='email-box'>
                <a target="_blank" href="mailto:mariana.sfukuoka@outlook.com" id="email-button">mariana.sfukuoka@outlook.com</a>
            </div>
        </section>
    );
}