import AlternateLayout from "../ui/AlternateLayout";
import ArrowIcon from "../ui/ArrowIcon";
import project2p from "../assets/images/project2/examfusion-portrait.png"
import project2l from "../assets/images/project2/examfusion-landscape.png"
import project2l1 from "../assets/images/project2/examfusion-title.png"
import project2s from "../assets/images/project2/examfusion-logo.png"
import project2s1 from "../assets/images/project2/examfusion-logo-1.png"
// examfusion-logo-1
function Project2Page() {
    return (
        <AlternateLayout>
            <div className="about-content poppins-regular w-full sm:w-[375px] px-[32px] py-[60px] lg:px-[60px] lg:w-[1200px] md:w-[800px] md:px-[16px] ">
                <h1 className="poppins-bold text-[2.2rem] mb-2">ExamFusion</h1>
                <div className="flex flex-col md:flex-row gap-9 md:gap-4">

                    <div className="flex-1">
                        <h2 className=" mb-6 text-[1.6rem] font-medium leading-[140%] tracking-[0.5px]">
                            A real-time exam platform with AI-driven test creation,
                            live proctoring, and performance analytics.
                        </h2>

                        <a
                            href="https://github.com/j5US/examonline-client"
                            target="_blank" rel="noopener noreferrer"
                            className="w-fit flex items-center gap-1 bg-close-btn-bg self-start py-2 px-4 rounded-full font-medium text-[0.97rem]
                            outline outline-[2.4px] outline-nav-border hover:bg-btn-hover-setting cursor-pointer transition-all duration-200">
                            Github <ArrowIcon />
                        </a>
                    </div>

                    <div className="flex-1 space-y-6">
                        <p className=" text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                            ExamFusion is a full-stack, real-time online exam platform developed by me and a
                            teammate as part of our MCA final year project.
                        </p>
                        <p className=" text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                            It enables educators to create, distribute, and monitor tests with real-time
                            updates and robust security features. Test links are automatically shared via email
                            through <AccentedText value="Brevo SMTP" /> integration, while <AccentedText value="Socket.IO" />&apos;s
                            socket-based communication supports live monitoring. The platform implements
                            proctoring through copy-paste and dev tools blocking, and
                            leverages <AccentedText value="DeepFace" /> and <AccentedText value="OpenCV" /> for face detection
                            and exam presence validation. Performance insights are visualized through interactive
                            dashboards powered by <AccentedText value="Chart.js" />.
                        </p>

                        <p className=" text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                            On the technical side, ExamFusion combines a <AccentedText value="React" /> frontend with
                            a <AccentedText value="Node.js" /> backend, while offloading proctoring logic
                            to a modular <AccentedText value="FastAPI" /> service. It features AI-assisted
                            test generation using <AccentedText value="Gemini" />, enabling dynamic and context-aware
                            question creation. <AccentedText value="Redis" /> handles real-time caching and session data, and
                            the <AccentedText value="Google Sheets API" /> provides scalable, lightweight data storage.
                            Containerized with <AccentedText value="Docker" />, the system is built for efficiency,
                            modularity, and ease of deployment—showcasing our ability to deliver a secure, AI-integrated,
                            real-time assessment solution.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-content w-full h-[650px] sm:w-[375px] sm:h-[736px] md:w-[800px] md:h-[408px] lg:w-[1200px] lg:h-[576px] p-4 grid gap-[16px] sm:grid-cols-2 md:grid-cols-4 mb-28">
                <div className=" overflow-hidden col-span-2 md:col-span-2 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover" src={project2l1} alt="website-image" />
                </div>
                <div className=" overflow-hidden col-span-1 max-md:row-span-3 md:col-span-1 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full" src={project2s} alt="website-image" />

                </div>
                <div className=" overflow-hidden col-span-1 row-span-6  md:col-span-1 md:row-span-2 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-fill object-top" src={project2p} alt="website-image" />

                </div>
                <div className=" overflow-hidden col-span-1 max-md:hidden md:col-span-2 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover object-top" src={project2l} alt="website-image" />

                </div>
                <div className=" overflow-hidden col-span-1 max-md:row-span-3 md:col-span-1 md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover" src={project2s1} alt="website-image" />

                </div>

                <div className=" overflow-hidden col-span-2 md:hidden md:rounded-[30px] max-md:rounded-[20px] cursor-pointer  ">
                    <img className="overflow-hidden size-full object-cover object-top" src={project2l} alt="website-image" />

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

export default Project2Page;
