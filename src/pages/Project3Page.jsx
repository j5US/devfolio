import AlternateLayout from "../ui/AlternateLayout";
import ArrowIcon from "../ui/ArrowIcon";
import project3l from "../assets/images/project3/natours_landscape.png"
import project3p from "../assets/images/project3/natours_portrait.png"
import project3l1 from "../assets/images/project3/natours_title.png"
import project3s from "../assets/images/project3/natours_logo.png"
import project3s1 from "../assets/images/project3/natours_logo_1.png"

function Project3Page() {
    return (
        <AlternateLayout>
            <div className="about-content poppins-regular w-full sm:w-[375px] px-[32px] py-[60px] lg:px-[60px] lg:w-[1200px] md:w-[800px] md:px-[16px] ">
                <h1 className="poppins-bold text-[2.2rem] mb-2">Natours</h1>
                <div className="flex flex-col md:flex-row gap-9 md:gap-4">

                    <div className="flex-1">
                        <h2 className=" mb-6 text-[1.6rem] font-medium leading-[140%] tracking-[0.5px]">
                            A full-stack tour booking app with secure payments and user authentication.
                        </h2>

                        <a
                            href="https://natours-app-7ddr.onrender.com/"
                            target="_blank" rel="noopener noreferrer"
                            className="w-fit flex items-center gap-1 bg-close-btn-bg self-start py-2 px-4 rounded-full font-medium text-[0.97rem]
                            outline outline-[2.4px] outline-nav-border hover:bg-btn-hover-setting cursor-pointer transition-all duration-200">
                            Web <ArrowIcon />
                        </a>
                    </div>

                    <div className="flex-1 space-y-6">
                        <p className=" text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                            Natours is a full-featured e-commerce application for booking guided tours, developed as a
                            full-stack project using <AccentedText value="Node.js" />, <AccentedText value="MongoDB" />,
                            and <AccentedText value="Pug" /> for server-side rendering. The platform allows users to
                            browse available tours, view detailed itineraries, and complete bookings through a streamlined,
                            responsive interface. A secure user authentication and authorization system was implemented
                            using <AccentedText value="JWT" /> (JSON Web Tokens), ensuring protected access to
                            user accounts and admin functionalities with a 99.9% login success rate.
                        </p>
                        <p className=" text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                            The application also features a fully integrated payment system via the <AccentedText value="Razorpay API" />,
                            enabling users to complete transactions safely and efficiently—contributing to a 25% increase in successful
                            payment completions. Backend services are structured following modern REST API conventions, and the use
                            of <AccentedText value="MongoDB" /> provides flexible, scalable data handling. Natours demonstrates solid backend
                            architecture, secure session handling, and a clean, server-rendered user interface optimized for real-world
                            commerce applications.
                        </p>

                    </div>
                </div>
            </div>
            <div className="about-content w-full h-[650px] sm:w-[375px] sm:h-[736px] md:w-[800px] md:h-[408px] lg:w-[1200px] lg:h-[576px] p-4 grid gap-[16px] sm:grid-cols-2 md:grid-cols-4 mb-28">
                <div className=" overflow-hidden col-span-2 md:col-span-2 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover" src={project3l1} alt="website-image" />
                </div>
                <div className=" overflow-hidden col-span-1 max-md:row-span-3 md:col-span-1 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full" src={project3s} alt="website-image" />

                </div>
                <div className=" overflow-hidden col-span-1 row-span-6  md:col-span-1 md:row-span-2 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-fill object-top" src={project3p} alt="website-image" />

                </div>
                <div className=" overflow-hidden col-span-1 max-md:hidden md:col-span-2 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover object-top" src={project3l} alt="website-image" />

                </div>
                <div className=" overflow-hidden col-span-1 max-md:row-span-3 md:col-span-1 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover" src={project3s1} alt="website-image" />

                </div>

                <div className=" overflow-hidden col-span-2 md:hidden md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover object-top" src={project3l} alt="website-image" />

                </div>
            </div>
        </AlternateLayout>
    );
}

function AccentedText({ value }) {
    return (
        <span className="text-pretty font-medium">
            {value}
        </span>
    );
}

export default Project3Page;
