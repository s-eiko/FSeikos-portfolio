import cssImg from '../../assets/images/icons/css.png';
import jsImg from '../../assets/images/icons/java-script.png';
import htmlImg from '../../assets/images/icons/html.png';

import Technology from "./Technology";

export default function Technologies() {
    return (
        <section id="technologies">
            <h2>Tecnologias e Ferramentas</h2>
            <div id="technologies-box">
                <Technology linkRef="https://developer.mozilla.org/pt-BR/docs/Web/CSS" imgScr={cssImg} alt="Ícone do CSS">CSS</Technology>
                <Technology linkRef="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" imgScr={jsImg} alt="Ícone do JavaScript">JavaScript</Technology>
                <Technology linkRef="https://developer.mozilla.org/pt-BR/docs/Web/HTML" imgScr={htmlImg} alt="Ícone do HTML">HTML</Technology>
            </div>
        </section>
    );
}