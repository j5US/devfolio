import AlternateLayout from "../ui/AlternateLayout";
import ArrowIcon from "../ui/ArrowIcon";
import project1l from "../assets/images/project1/twow-l.png"
import project1l1 from "../assets/images/project1/two-l1.png"
import project1s from "../assets/images/project1/two-s.png"
import project1s1 from "../assets/images/project1/twow-s.png"
import project1p from "../assets/images/project1/twow-p.png"
function Project1Page() {
    return (
        <AlternateLayout>
            <div className="about-content poppins-regular w-full sm:w-[375px] px-[32px] py-[60px] lg:px-[60px] lg:w-[1200px] md:w-[800px] md:px-[16px] ">
                <h1 className="poppins-bold text-[2.2rem] mb-2">Wild Oasis</h1>
                <div className="flex flex-col md:flex-row gap-9 md:gap-4">

                    <div className="flex-1">
                        <h2 className=" mb-6 text-[1.6rem] font-medium leading-[140%] tracking-[0.5px]">
                            A pair of full-stack web apps simulating both sides of a boutique hospitality business—management and guest booking.
                        </h2>

                        <div className="flex gap-3">
                            <a
                                href="https://the-wild-oasis-gray-chi.vercel.app/dashboard"
                                target="_blank" rel="noopener noreferrer" className="w-fit flex items-center gap-1 bg-close-btn-bg self-start py-2 px-4 rounded-full font-medium text-[0.97rem]
                                outline outline-[2.4px] outline-nav-border hover:bg-btn-hover-setting cursor-pointer transition-all duration-200">
                                Wild Oasis Admin<ArrowIcon />
                            </a>

                            <a
                                href="https://the-wild-oasis-website-omega-silk.vercel.app/"
                                target="_blank" rel="noopener noreferrer" className="w-fit flex items-center gap-1 bg-close-btn-bg self-start py-2 px-4 rounded-full font-medium text-[0.97rem]
                                outline outline-[2.4px] outline-nav-border hover:bg-btn-hover-setting cursor-pointer transition-all duration-200">
                                Wild Oasis Website <ArrowIcon />
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 space-y-6">
                        <p className=" text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                            Wild Oasis is a two-part project consisting of separate full-stack web applications that
                            together model the operations and customer experience of a boutique stay business.
                        </p>

                        <p className=" text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                            The first is a business management app developed using <AccentedText value="React" />, <AccentedText value="Supabase" />, and <AccentedText value="TanStack Query" />.
                            It provides administrators with tools to manage reservations,
                            update cabin information, and monitor performance through a real-time dashboard
                            powered by Recharts. The app focuses on internal efficiency and control, offering
                            full CRUD capabilities and streamlined workflows for daily operations.
                        </p>

                        <p className=" text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                            The second application is a client-facing website built
                            with <AccentedText value="Next.js" />, <AccentedText value="Supabase" />,
                            and <AccentedText value="Auth.js" /> (<AccentedText value="NextAuth" />).
                            It offers guests a fast, SEO-optimized experience for browsing and
                            booking boutique cabins. With secure login via <AccentedText value="Google OAuth" />, users can view, create, modify,
                            and cancel reservations, all backed by real-time data updates. Together, these two apps
                            provide a complete simulation of a modern hospitality system—balancing backend management
                            needs with a smooth, responsive user experience.
                        </p>
                    </div>
                </div>

            </div>
            <div className="about-content w-full h-[650px] sm:w-[375px] sm:h-[736px] md:w-[800px] md:h-[408px] lg:w-[1200px] lg:h-[576px] p-4 grid gap-[16px] sm:grid-cols-2 md:grid-cols-4 mb-28">
                <div className=" overflow-hidden col-span-2 md:col-span-2 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover" src={project1l1} alt="website-image" />
                </div>
                <div className=" overflow-hidden col-span-1 max-md:row-span-3 md:col-span-1 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full" src={project1s} alt="website-image" />

                </div>
                <div className=" overflow-hidden col-span-1 row-span-6  md:col-span-1 md:row-span-2 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover" src={project1p} alt="website-image" />

                </div>
                <div className=" overflow-hidden col-span-1 max-md:hidden md:col-span-2 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover object-top" src={project1l} alt="website-image" />

                </div>
                <div className=" overflow-hidden col-span-1 max-md:row-span-3 md:col-span-1 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover" src={project1s1} alt="website-image" />

                </div>

                <div className=" overflow-hidden col-span-2 md:hidden md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover object-top" src={project1l} alt="website-image" />

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

export default Project1Page;
