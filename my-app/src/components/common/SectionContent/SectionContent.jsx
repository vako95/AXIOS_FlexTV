import "./SectionContent.css";

const SectionContent = ({ children }) => {
    return (
        <section className="section-content">
            {children}
        </section>
    );
}
export default SectionContent;