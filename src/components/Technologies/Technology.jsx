export default function Technology({linkRef, imgScr, alt, children, ...props}) {
    return (
        <div className="technology-box" {...props}>
            <div className="icon-name">
                <img src={imgScr} alt={alt} className='icons' />
                <p>{children}</p>
            </div>
            <div className="know-more">
                <a target="_blank" href={linkRef}>Saiba mais</a>
            </div>
        </div>
    );
}