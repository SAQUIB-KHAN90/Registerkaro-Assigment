import companyFormation from "../assets/S1.png";
import secretarialServices from "../assets/S2.png";
import virtualOffice from "../assets/S3.png";
import complianceServices from "../assets/S4.png";
import payrollServices from "../assets/S5.png";
import bookkeeping from "../assets/S6.png";

const servicesData = [
  {
    id: 1,
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    icon: companyFormation, // Use imported variable
  },
  {
    id: 2,
    title: "Company Secretarial Services",
    description:
      "Make data-driven decisions and utilize technology to reach business goals.",
    icon: secretarialServices,
  },
  {
    id: 3,
    title: "Virtual Office Address",
    description:
      "Foster customer relationships by effectively serving your market.",
    icon: virtualOffice,
  },
  {
    id: 4,
    title: "Annual Compliance Services",
    description:
      "Turn your ideas into modern products with our design experts.",
    icon: complianceServices,
  },
  {
    id: 5,
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    icon: payrollServices,
  },
  {
    id: 6,
    title: "Bookkeeping Services",
    description:
      "Steering user behaviors with creative design, data insights & technology.",
    icon: bookkeeping,
  },
];

export default servicesData;
