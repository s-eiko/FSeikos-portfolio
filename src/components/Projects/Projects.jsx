import mundoInvertidoImg from '../../assets/images/projects-preview/mundo-invertido.png';
import spidermanImg from '../../assets/images/projects-preview/spiderman-multiverse.png';
import yugiohImg from '../../assets/images/projects-preview/yugioh-jokenpo.png';

import Project from "./Project";
import SeeProjects from '../SeeProjects';

export default function Projects() {
    return (
        <section id="projects">
                <h2>Principais projetos</h2>
                <div id='projects-container'>
                    <Project
                        title="Mundo Invertido"
                        imgSrc={mundoInvertidoImg}
                        alt="Preview do projeto Mundo Invertido"
                        description="Página web com theme switcher inspirada na série Stranger Things. A página inclui um formulário de inscrição integrado a um banco de dados Firebase."
                        siteRef="https://s-eiko.github.io/Mundo-invertido/"
                        codeRef="https://github.com/s-eiko/Mundo-invertido"
                    />
                    <Project
                        title="Multiverso Spiderman"
                        imgSrc={spidermanImg}
                        alt="Preview do projeto Multiverso Spiderman"
                        description="Site sobre o multiverso dos filmes do Homem Aranha, com o objetivo de apresentar todos os filmes, atores principais e diretores."
                        siteRef="https://spider-multiverse.pages.dev/"
                        codeRef="https://github.com/s-eiko/Spider-multiverse"
                    />
                    <Project
                        title="Yu-Gi-Oh! JoKenPo"
                        imgSrc={yugiohImg}
                        alt="Preview do projeto Yu-Gi-Oh! JoKenPo"
                        description="Jogo de Jo-ken-po inspirado nos personagens de Yu-Gi-Oh! Ao invés do convencional pedra, papel e tesoura, use cartas para jogar."
                        siteRef="https://s-eiko.github.io/YuGiOh-jokenpo-game/"
                        codeRef="https://github.com/s-eiko/YuGiOh-jokenpo-game"
                    />
                    <SeeProjects/>
                </div>
        </section>
    );
}