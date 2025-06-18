// import redirectArrow from "../assets/images/north-east-arrow.svg"
import { useContext } from "react";
import ArrowIcon from "../ui/ArrowIcon";
import ThemesContext from "../context/themes";
import { Link } from "react-router-dom";


function ProjectView({ projectImage, projectTitle, projectLink }) {
    const { isDarkEnabled } = useContext(ThemesContext);

    return (
        <div className='project-container relative bg-shadow size-full rounded-[30px] overflow-hidden'>
            <img className="size-full object-cover rounded-[30px]" src={projectImage} alt="project image" />

            {/* <a href={projectLink} target="_blank" rel="noopener noreferrer"> */}
            <Link to={`${projectLink}`} >

                <div className={` ${isDarkEnabled ? "outline-[2.4px]" : "outline-0 border border-slate-100"}
                title-container absolute h-[36px]  bg-background rounded-full flex bottom-[14px] left-[14px]
                outline hover:outline-[5px] outline-project-outline transition-[outline] duration-350 cursor-pointer
                items-center justify-center p-2
                `}
                >

                    <span className="title-text poppins-regular text-[0.89rem] px-2">{projectTitle}</span>
                    <ArrowIcon />
                </div>
            </Link>
        </div>
    )
}

export default ProjectView;