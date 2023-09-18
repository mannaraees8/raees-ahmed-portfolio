"use client";
import Link from "next/link";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowDropright } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  let [isVisible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isActiveImage, setActiveImage] = useState("");
  const emsImages = [
    "/ems1.jpeg",
    "/ems2.jpeg",
    "/ems3.jpeg",
    "/ems4.jpeg",
    "/ems4.jpeg",
  ];

  const [expRef, expInView] = useInView({
    threshold: 0.32, // Adjust the threshold as needed
  });
  const [abtRef, abtInView] = useInView({
    threshold: 0.35, // Adjust the threshold as needed
  });
  const [prjRef, prjInView] = useInView({
    threshold: 0.35, // Adjust the threshold as needed
  });

  const [activeTheme, setActiveTheme] = useState({
    color: "",
    bgBody: "",
    textColor: "",
    bgSkillPill: "",
  });
  const [activeLinkCss, setActiveLinkCss] = useState(``);
  const [theme] = useState([
    {
      color: "gold",
      bgBody: "#000000ed",
      textColor: "text-[gold]",
      bgSkillPill: "bg-[#a8eaec30]",
    },
    {
      color: "#FC15A3", //pink
      bgBody: "#0C0203",
      textColor: "text-[#FC15A3]",
      bgSkillPill: "bg-[#ffc0cb36]",
    },
    {
      color: "#54D2D4", //green
      bgBody: "#0f172a",
      textColor: "text-[#54D2D4]",
      bgSkillPill: "bg-[#183656]",
    },
  ]);

  useEffect(() => {
    setActiveTheme({
      ...activeTheme,
      color: theme[0].color,
      bgBody: theme[0].bgBody,
      textColor: theme[0].textColor,
      bgSkillPill: theme[0].bgSkillPill,
    });
  }, []);

  useEffect(() => {
    setActiveLinkCss(`
    body{background:${activeTheme.bgBody}}
  .links-social:hover{color:${activeTheme.color}}
 .links.active{
  color:${activeTheme.color};
 }`);
  }, [activeTheme.color, activeTheme.bgBody]);

  return (
    <div className=" mx-auto xl:max-w-[80%] ">
      <style>{activeLinkCss}</style>
      <div className="flex flex-wrap justify-between min-h-screen ">
        <header className="lg:sticky lg:top-0 lg:max-w-[50%]  p-5  lg:pt-24 h-full">
          <div className=" flex flex-col gap-3 ">
            <h1 className="text-3xl lg:text-5xl font-semibold title-name">
              <span className={`hover:${activeTheme.textColor}`}>M</span>
              <span className={`hover:${activeTheme.textColor}`}>a</span>
              <span className={`hover:${activeTheme.textColor}`}>n</span>
              <span className={`hover:${activeTheme.textColor}`}>n</span>
              <span className={`hover:${activeTheme.textColor}`}>a</span>
              <span className={`hover:${activeTheme.textColor}`}>&nbsp;</span>
              <span className={activeTheme.textColor}>R</span>
              <span className={activeTheme.textColor}>a</span>
              <span className={activeTheme.textColor}>e</span>
              <span className={activeTheme.textColor}>e</span>
              <span className={activeTheme.textColor}>s</span>
              <span>&nbsp;</span>
              <span className={`hover:${activeTheme.textColor}`}>A</span>
              <span className={`hover:${activeTheme.textColor}`}>h</span>
              <span className={`hover:${activeTheme.textColor}`}>m</span>
              <span className={`hover:${activeTheme.textColor}`}>e</span>
              <span className={`hover:${activeTheme.textColor}`}>d</span>
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold">
              Full Stack Developer
            </h2>
            <p className="text-slate-400 whitespace-pre-wrap max-w-[70%] lg:text-[1.05rem]">
              I&apos;m committed to building digital experiences that are
              accessible to everyone.
            </p>
            <ul className="lg:flex flex-col text-[14px] font-semibold lg:mt-16 gap-10 cursor-pointer lg:max-w-[50%] hidden lg:visible">
              <li
                className={`links ${
                  activeLink == "about" && abtInView ? "active" : ""
                } ${abtInView ? "active" : ""}`}
                onClick={() => setActiveLink("about")}>
                <Link href="#about">ABOUT</Link>
              </li>
              <li
                className={`links ${
                  activeLink == "experience" && expInView ? "active" : ""
                } ${expInView ? "active" : ""}`}
                onClick={() => setActiveLink("experience")}>
                <Link href="#experience">EXPERIENCE</Link>
              </li>
              <li
                className={`links ${
                  activeLink == "projects" && prjInView ? "active" : ""
                } ${prjInView ? "active" : ""}`}
                onClick={() => setActiveLink("projects")}>
                <Link href="#projects">PROJECTS</Link>
              </li>
            </ul>

            <ul className="flex  font-semibold lg:mt-20 gap-5 text-2xl text-slate-400 cursor-pointer lg:max-w-[70%]">
              <li className={`links-social text-[1.3rem] relative top-[2px]`}>
                <Link
                  href="https://www.instagram.com/raees_ahmed_8499/"
                  target="_blank">
                  <BsInstagram />
                </Link>
              </li>

              <li className={`links-social`}>
                <Link
                  href="https://www.linkedin.com/in/raees-ahmed-aba50b205/"
                  target="_blank">
                  <AiFillLinkedin />
                </Link>
              </li>
              <li className={`links-social text-[1.6rem]`}>
                <Link href="mailto:mannaraees8@gmail.com" target="_blank">
                  <HiOutlineMail />
                </Link>
              </li>
            </ul>
            <div className="flex gap-3 mt-3">
              {theme.map((i, e) =>
                i.color != activeTheme.color ? (
                  <button
                    key={e}
                    className={`rounded-full h-[30px] w-[30px]`}
                    style={{ backgroundColor: `${i.color}` }}
                    onClick={() =>
                      setActiveTheme({
                        ...activeTheme,
                        color: i.color,
                        bgBody: i.bgBody,
                        textColor: i.textColor,
                        bgSkillPill: i.bgSkillPill,
                      })
                    }></button>
                ) : (
                  <span
                    className={`rounded-full h-[30px] w-[30px] `}
                    key={e}
                    style={{ backgroundColor: `${i.color}` }}>
                    <span
                      className={`rounded-full h-[30px] w-[30px] flex items-center justify-center bg-[#80808080]`}>
                      <GoCheck />
                    </span>
                  </span>
                )
              )}
            </div>
          </div>
        </header>
        <main className="max-w-full lg:max-w-[50%] flex flex-col gap-3">
          <section id="about" ref={abtRef} className={`p-5 lg:pt-24 lg:pb-14`}>
            <h3 className="text-slate-100 text-base w-full font-semibold visible lg:hidden">
              ABOUT
            </h3>
            <p className="text-slate-400 text-sm lg:text-[1.05rem] tracking-[1px]">
              Detail-oriented{" "}
              <strong className="text-slate-100">Full Stack Developer</strong>{" "}
              with 3 years of experience in software development, specializing
              in web applications and responsive design. Proven track record of{" "}
              <strong className="text-slate-100">
                optimizing web performance
              </strong>{" "}
              and delivering exceptional user experiences.
            </p>
            <p className="text-slate-400 text-sm lg:text-[1.05rem] tracking-[1px]">
              Strong proficiency in a variety of programming languages and
              frameworks. Committed to continuous learning and innovation in the
              ever-evolving field of web development.
            </p>
            <p className="text-slate-400 text-sm lg:text-[1.05rem] tracking-[1px]">
              In addition to my professional experience, I have worked as a
              <strong className="text-slate-100"> freelancer</strong>,
              collaborating with clients on various web development projects.
              Currently, I am leveraging my skills and expertise as part of a
              dynamic team at{" "}
              <strong className="text-slate-100">Lunad Digital Portal</strong>{" "}
              an advertising company, where I contribute to crafting compelling
              digital experiences.
            </p>
            <div className="flex flex-col mt-3">
              <h3 className="text-slate-100 text-base my-2 w-full font-semibold justify-between flex gap-2">
                SKILLS
                <div className=" whitespace-nowrap">
                  {!isVisible && (
                    <>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        C#
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Next.js
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Sql
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        GitHub
                      </span>
                      ...{" "}
                    </>
                  )}

                  {isVisible ? (
                    <button onClick={() => setVisible(!isVisible)}>Less</button>
                  ) : (
                    <button onClick={() => setVisible(!isVisible)}>More</button>
                  )}
                </div>
              </h3>
              {isVisible && (
                <div className="all-skills">
                  <div className="flex flex-wrap justify-between items-center">
                    <span className="text-slate-400">Languages:</span>
                    <div className="flex flex-wrap gap-3 w-full mt-2 xl:max-w-[70%]">
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        C#
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        JavaScript
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        TypeScript
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Python
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Java
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        C++
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center">
                    <span className="text-slate-400">Frontend:</span>
                    <div className="flex flex-wrap gap-3 mt-2  w-full xl:max-w-[70%]">
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        HTML/CSS3
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        React.js
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Next.js
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Vue.js
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Angular.js
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        React Native
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Recoil.Js
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Bootstrap
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Tailwind
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between  items-center">
                    <span className="text-slate-400">Backend:</span>
                    <div className="flex flex-wrap gap-3 mt-2 w-full xl:max-w-[70%]">
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        .Net
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Django
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Postgress Sql
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Odoo
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center">
                    <span className="text-slate-400">Version Control:</span>
                    <div className="flex flex-wrap gap-3 mt-2 w-full xl:max-w-[70%]">
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        GitHub
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center">
                    <span className="text-slate-400">Databases:</span>
                    <div className="flex flex-wrap gap-3 mt-2 w-full xl:max-w-[70%]">
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        MS Sql
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Postgress Sql
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center">
                    <span className="text-slate-400">Cloud Services:</span>
                    <div className="flex flex-wrap gap-3 mt-2 w-full xl:max-w-[70%]">
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Firebase
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center">
                    <span className="text-slate-400">Project Management:</span>
                    <div className="flex flex-wrap gap-3 mt-2 w-full xl:max-w-[70%]">
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Jira
                      </span>
                      <span
                        className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                        Trello
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
          <section id="experience" ref={expRef}>
            <div className="p-5 xl:px-5 xl:pb-5 xl:pt-0">
              <h3 className="text-slate-100 text-base my-2 w-full font-semibold visible lg:hidden">
                EXPERIENCE
              </h3>
              <h3 className="exp-company">Lunad Digital Portal</h3>
              <div className="flex flex-wrap w-full  gap-2">
                <span className="exp-year md:flex-1">
                  <span className="font-sans">2022</span> - PRESENT
                </span>
                <div className="flex flex-col w-full xl:max-w-[75%]">
                  <h3 className="exp-position">Full Stack Developer</h3>
                  <p className="exp-content">
                    Optimized{" "}
                    <span className="text-slate-100">SQL queries</span>,
                    reducing database response times by
                    <span className="text-slate-100"> 30%</span>, Achieved an
                    increase in code efficiency through optimization. Improving
                    user experience and performance. Enhanced desktop user
                    experience by addressing{" "}
                    <span className="text-slate-100">CLS</span> issues and
                    improving <span className="text-slate-100">LCP</span>{" "}
                    scores. Implemented performance enhancements, resulting in
                    improved{" "}
                    <span className="text-slate-100">website speed</span> and{" "}
                    <span className="text-slate-100">
                      search engine visibility
                    </span>
                    . Utilized web performance analysis tools to identify and
                    resolve bottlenecks. Increased{" "}
                    <span className="text-slate-100">well-performing URLs</span>{" "}
                    for desktop users through targeted improvements.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      .Net
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      C#
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      JavaScript
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Sql
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Bootstrap
                    </span>
                  </div>
                  <br />
                  <h3 className="exp-position">
                    Full Stack Developer
                    <p className="text-sm text-slate-400">
                      <span>Project - Odoo ERP Solution</span>
                    </p>
                  </h3>
                  <p className="exp-content">
                    Led Odoo implementation and customization, enhancing
                    internal functionality.Developed custom applications and
                    modules within the{" "}
                    <span className="text-slate-100">Odoo ERP System</span> to
                    cater to specific business needs. Created token-based{" "}
                    <span className="text-slate-100">Django XML-RPC APIs</span>{" "}
                    for seamless integration between Odoo and external
                    applications. Successfully integrated three internal
                    applications into the Odoo ecosystem, streamlining data flow
                    and improving efficiency.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Odoo
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Python
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      JavaScript
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Postgress Sql
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Xml
                    </span>
                  </div>
                  <br />
                  <h3 className="exp-position">
                    Full Stack Developer
                    <p className="text-sm text-slate-400">
                      <span>Project - Enquiry Management System</span>
                    </p>
                  </h3>
                  <p className="exp-content">
                    Designed wireframes and prototypes using{" "}
                    <span className="text-slate-100">Figma</span> for a
                    user-friendly interface. Developed robust backend APIs and
                    services using{" "}
                    <span className="text-slate-100">
                      .NET Entity Framework
                    </span>
                    , enhancing scalability and efficiency. Created mobile-first
                    responsive pages using{" "}
                    <span className="text-slate-100">Asp.net</span> and{" "}
                    <span className="text-slate-100">Next.js</span>, ensuring a
                    seamless user experience. Built Progressive Web Applications
                    <span className="text-slate-100"> (PWAs)</span> with{" "}
                    <span className="text-slate-100">
                      Network First Caching
                    </span>{" "}
                    technique to extend app accessibility across devices.
                    Developed a{" "}
                    <span className="text-slate-100">real-time</span> chat
                    module in both .NET and Next.js, implementing web
                    communication with{" "}
                    <span className="text-slate-100">Pusher.js</span>.
                    Successfully met project deadlines while maintaining
                    transparent communication with management.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      .Net
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      C#
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Sql
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      JavaScript
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Alpine.js
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Tailwind
                    </span>
                    <div className="flex flex-wrap gap-3 mt-2 relative">
                      <span>
                        <Image
                          src="/ems1.jpeg"
                          className="object-contain  rounded-2xl border-[#fff8d038]"
                          width={80}
                          height={80}
                          alt="Picture of the author "
                        />
                      </span>
                      <span className="">
                        <Image
                          src="/ems2.jpeg"
                          className="object-contain  rounded-2xl border-[#fff8d038]"
                          width={80}
                          height={80}
                          alt="Picture of the author"
                        />
                      </span>
                      <span className="">
                        <Image
                          src="/ems3.jpeg"
                          className="object-contain  rounded-2xl border-[#fff8d038]"
                          width={80}
                          height={80}
                          alt="Picture of the author"
                        />
                      </span>
                      <span className="">
                        <Image
                          src="/ems5.jpeg"
                          className="object-contain rounded-xl border-[#fff8d038]"
                          width={80}
                          height={80}
                          alt="Picture of the author"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-wrap w-full  gap-2">
                <span className="exp-year md:flex-1">
                  <span className="font-sans">Feb-2021</span> - May-2022
                </span>
                <div className="flex flex-col w-full xl:max-w-[75%]">
                  <h3 className="exp-position">
                    <div className="flex justify-between">
                      Front-End Developer{" "}
                      <small className="text-slate-400 font-normal">
                        Remote, India
                      </small>
                    </div>
                    <p className="text-sm text-slate-400">
                      <span>Project - Enquiry Management System</span>
                    </p>
                  </h3>
                  <p className="exp-content">
                    Designed and maintained website UI using Asp.net Core,
                    HTML5, CSS, and JavaScript, ensuring a user-friendly
                    interface. Enhanced user experience (UX) by implementing
                    JavaScript, Bootstrap, and Ajax for smoother
                    interactions.Created wireframes and prototypes with Figma
                    for a user-centered design approach.Consumed APIs to
                    integrate external data sources seamlessly into the web
                    applications.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      .Net
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      C#
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Sql
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      JavaScript
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Figma
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Bootstrap
                    </span>
                  </div>
                  <br />
                  <h3 className="exp-position">
                    Front-End Developer
                    <p className="text-sm text-slate-400">
                      <span>Project - Task Management System</span>
                    </p>
                  </h3>
                  <p className="exp-content">
                    Creating mobile first responsive pages using HTML5, CSS,
                    jQuery, Alpine.js, Jinja, Bootstrap. Collaborated with
                    backend developers to seamlessly consume APIs.esigned
                    wireframes and prototypes with Figma, ensuring a
                    user-centered approach to development.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Python
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Django
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Jinja
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      JavaScript
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      JQuery
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Bootstrap
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="exp-company">Freelancer</h3>
              <div className="flex flex-wrap w-full  gap-2">
                <span className="exp-year md:flex-1">
                  <span className="font-sans">Aug-2021</span> - Feb-2022
                </span>
                <div className="flex flex-col w-full xl:max-w-[75%]">
                  <h3 className="exp-position">
                    Full Stack Developer
                    <p className="text-sm text-slate-400">
                      <span>
                        Project - Shlokaa Information Management System
                      </span>
                    </p>
                  </h3>
                  <p className="exp-content">
                    Developed an internal company web application, starting from
                    requirements gathering and solution architecture. Designed
                    mobile-first, responsive pages using HTML5, CSS, and jQuery
                    for improved accessibility. Implemented business logic,
                    including product management and sales dashboards.
                    Established a robust three-tier architecture and crafted
                    efficient SQL queries.
                  </p>
                  <p
                    className={`flex ${activeTheme.textColor} items-center gap-2`}>
                    <Link href="http://shlokaa.biz" target="_blank">
                      Shlokaa
                    </Link>
                    <LiaExternalLinkAltSolid />
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      .Net
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      C#
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      CSS
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      jQuery
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Sql
                    </span>
                    <span
                      className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                      Bootstrap
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="projects" ref={prjRef}>
            <div className="p-5 xl:px-5 xl:pb-5 xl:pt-0">
              <h3 className="text-slate-100 text-base my-2 w-full font-semibold visible lg:hidden">
                PROJECTS
              </h3>
              <h3 className="exp-company">
                Real-Time Chat Application Development
              </h3>
              <p className="exp-content">
                Driven by a passion for continuous learning, I delved into the
                world of modern web development, becoming proficient in React,
                Vue, and React Native. To put my skills into practice, I
                embarked on a journey to create a fully functional chat
                application in Vue.js, leveraging Firebase for real-time chat
                functionality and converted into mobile application with react
                native. This project not only honed my skills but also
                demonstrated my commitment to building interactive and engaging
                web applications.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <span
                  className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                  Vue.js
                </span>
                <span
                  className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                  Firebase Firestore
                </span>
                <span
                  className={`skill-pill ${activeTheme.bgSkillPill} ${activeTheme.textColor}`}>
                  Tailwind
                </span>
              </div>
              <div className="flex flex-wrap gap-3 mt-2 relative">
                <span>
                  <Image
                    src="/img4.jpeg"
                    className="object-contain  rounded-2xl border-[#fff8d038]"
                    width={80}
                    height={80}
                    alt="Picture of the author "
                  />
                </span>
                <span className="">
                  <Image
                    src="/img2.jpeg"
                    className="object-contain  rounded-2xl border-[#fff8d038]"
                    width={80}
                    height={80}
                    alt="Picture of the author"
                  />
                </span>
                <span className="">
                  <Image
                    src="/img1.jpeg"
                    className="object-contain  rounded-2xl border-[#fff8d038]"
                    width={80}
                    height={80}
                    alt="Picture of the author"
                  />
                </span>
                <span className="">
                  <Image
                    src="/img3.jpeg"
                    className="object-contain rounded-xl border-[#fff8d038]"
                    width={80}
                    height={80}
                    alt="Picture of the author"
                  />
                </span>
              </div>
            </div>
            <p className="exp-content p-5 xl:px-5">
              Built with Next.js and Tailwind CSS, deployed with Vercel.
            </p>
          </section>
          <br />
        </main>
      </div>
    </div>
  );
}
