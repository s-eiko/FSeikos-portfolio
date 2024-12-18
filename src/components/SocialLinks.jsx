export default function SocialLinks({linkRef, imgSrc, alt, children, ...props}) {
    return (
        <div className="social-element" {...props}>
            <a href={linkRef} target="_blank">
                <img src={imgSrc} alt={alt} className='icons' />
            </a>
            {children !== undefined ? (
                <a href={linkRef} target="_blank">
                    <p>{children}</p> 
                </a>
            ) : ''}
        </div>
    );
}