export default function Project({title, imgSrc, alt, description, siteRef, codeRef, ...props}) {
    return (
        <div className="project-box" {...props}>
            <h3>{title}</h3>
            <img src={imgSrc} alt={alt} className="project-preview"/>
            <p className="project-description">{description}</p>
            <div className="project-buttons-box">
                <a target="_blank" href={siteRef}>Acessar site</a>
                <a target="_blank" href={codeRef}>Código</a>
            </div>
        </div>
    );
}