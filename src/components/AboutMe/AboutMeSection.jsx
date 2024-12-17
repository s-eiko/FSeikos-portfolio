export default function AboutMeSection({sectionName, title, subtitle, children, ...props}) {
    return (
        <section id={sectionName} {...props}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p id={`${sectionName}-description`}>{children}</p>
        </section>
    );
}