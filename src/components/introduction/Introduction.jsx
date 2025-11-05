import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import '@fortawesome/fontawesome-free/css/all.min.css';


// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Status",
    description: "Student",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "5+",
  },
  {
    id: 3,
    title: "Professional Experience",
    description: "1+ Months",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Mohamed Sajid
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a <span className="bg-highlight">Software Engineer</span> based in
            Colombo, Sri Lanka. I specialize in building robust, efficient, and
            user-friendly web applications and Mobile Applications combining clean code with thoughtful
            design to deliver seamless digital experiences.
          </p>
          <p className="text-center lg:text-start">
            <a
               className="
               btn btn-xs xxs:btn-lg text-white bg-blue-600 hover:bg-blue-700 
               transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl 
               inline-flex items-center gap-2 animate-fadeInUp
               "              
                href="https://www.linkedin.com/in/mohamed-sajid-se"  // replace with your LinkedIn profile URL
                target="_blank"  // opens in new tab
                rel="noopener noreferrer"  // security best practice
            >
              Connect
              <i className="fas fa-paper-plane"></i> {/* Font Awesome icon */}
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
