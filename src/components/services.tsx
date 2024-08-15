import Image from "next/image";
import Link from "next/link";
import ContactUsButton from "./buttons/contactus"
import Card from "./cards/servicescard"

const Services: React.FC = () => {
    return (
        <section className="services">
        <div className="services__container container">
          <h2>Services</h2>
          <ul>
            <li>
              <Card title="Website Audit and Analysis">
                <ul>
                  <li>Comprehensive analysis of website structure, navigation, and user experience.</li>
                  <li>Detailed Lighthouse report for performance, SEO, and accessibility insights.</li>
                  <li>Heat map testing to understand user behaviour and optimise layout.</li>
                  <li>User testing to identify pain points and areas for improvement.</li>
                </ul>
                <ContactUsButton>Learn More</ContactUsButton>
              </Card>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Services;