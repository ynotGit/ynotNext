import { GoCheck } from 'react-icons/go';

export default function Process() {

    const designItems = [
        "Fully Responsive Website / App Design",
        "Engaging",
        "Templating",
        "Custom Themes",
        "Digital Editing",
        "Branding Design",
    ];

    const developItems = [
        "Front End / User Interfaces",
        "Server Side",
        "SEO Specialist",
        "WordPress Wizard",
        "Brochure, eCommerce, Marketing & Lead Generation Websites",
    ];

    const innovateItems = [
        "Agile Approach",
        "Fluidity",
        "Expert Support",
    ];

    return (
        <section className="py-12">
            <h2>A Trusted Process</h2>
            <p>We place the user at the heart of what we do. From concept to creation we can help with your entire web build process. Already got a project you need help on? Our creation process can help your project no matter what stage it is at.</p>

            <h2>Design</h2>
            <p>We design our digital solutions around your business needs.</p>
            <ul>
                {designItems.map((item) => (
                    <li key={item}><GoCheck className="inline" /> {item}</li>
                ))}
            </ul>

            <h2>Develop</h2>
            <p>We love to code and bringing ideas to digital life.</p>
            <ul>
                {developItems.map((item) => (
                    <li key={item}><GoCheck className="inline" /> {item}</li>
                ))}
            </ul>

            <h2>Innovate</h2>
            <p>We move and evole as your buisness needs do.</p>
            <ul>
                {innovateItems.map((item) => (
                    <li key={item}><GoCheck className="inline" /> {item}</li>
                ))}
            </ul>
        </section>
    )
}