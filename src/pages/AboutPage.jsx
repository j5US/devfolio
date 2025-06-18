import SkillTiles from '../components/SkillTiles';
import AlternateLayout from '../ui/AlternateLayout';
function AboutPage() {

    return (
        <AlternateLayout>
            <div className="about-content w-[648px] py-[60px] px-[24px] flex flex-col gap-8
                max-md:w-[375px] max-sm:w-[320px]
            ">
                <h1 className="poppins-bold text-[2.2rem]">The road from learning to doing.</h1>

                <span className="bg-close-btn-bg self-start py-2 px-4 rounded-full font-medium text-[0.97rem]
                outline outline-[2.4px] outline-nav-border">
                    Dec 12, 2024
                </span>

                <h3 className='text-[1.4rem] poppins-semibold'>My story</h3>

                <p className=" text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                    I got my first computer when I was 12. At the time, I didn&apos;t know much about
                    programming, but I was captivated by games like Grand Theft Auto: Vice City
                    and Prince of Persia. While these games were a source of entertainment, I never
                    imagined that they&apos;d lay the foundation for my future in technology. My
                    initial years with a computer were more about playing games and exploring digital
                    worlds than about understanding the inner workings of computers.
                </p>

                <p className="text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                    It wasn&apos;t until I reached college that I started to realize the true potential of
                    computer science. I began experimenting with small projects using simple HTML and
                    JavaScript and quickly discovered how powerful web development could be. To deepen
                    my understanding, I took The Complete JavaScript Course by Jonas Schmedtmann. The
                    course was a game-changer, providing the structure and knowledge I needed to
                    enhance my skills and approach projects with more confidence. From that point on,
                    I was hooked.
                </p>

                <h3 className='text-[1.4rem] poppins-semibold'>What I do now</h3>

                <p className="text-pretty poppins-regular leading-[170%] tracking-[0.4px]">
                    Now I&apos;m a sophomore at Chandigarh University, focusing on full-stack
                    web development and working on projects to enhance my skills.
                </p>

                <h3 className='text-[1.4rem] poppins-semibold'>Stack I use</h3>

                <div>
                    {/* <InfiniteSlider /> */}
                    <SkillTiles/>
                </div>

                <h3 className='text-[1.4rem] poppins-semibold'>Education</h3>

                <div className="text-divretty poppins-regular leading-[170%] tracking-[0.4px]">
                    <ul className='space-y-2'>
                        <li>
                            <span className='mr-1 font-medium'>Master of Computer Applications</span>
                            at Chandigarh University (2023 - 2025).
                        </li>
                        <li>
                            <span className='mr-1 font-medium'>Bachelor of Computer Applications</span>
                            at University of Engineering and Management, Kolkata (2019 - 2022).
                        </li>

                    </ul>
                </div>


            </div>
            <br />
        </AlternateLayout>
    );
}


export default AboutPage;