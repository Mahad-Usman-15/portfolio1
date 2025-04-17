"use client"

type Skills = {
    id: number;
    skill: string;
    des: string;
};

const skills: Skills[] = [
    {
        id: 0,
        skill: "HTML",
        des: "Markup language for building web pages.",
    },
    {
        id: 1,
        skill: "CSS",
        des: "Styling language for designing web pages.",
    },
    {
        id: 2,
        skill: "Tailwind CSS",
        des: "Utility-first CSS framework for rapid UI development.",
    },
    {
        id: 3,
        skill: "Next js",
        des: "React framework for server-rendered applications.",
    },
    {
        id: 4,
        skill: "Typescript",
        des: "Typed superset of JavaScript for better tooling.",
    },
    {
        id: 5,
        skill: "C Language",
        des: "Foundational programming language for system development.",
    },{
        id: 6,
        skill: "Python",
        des: "A versatile programming language used for artificial intelligence."
    }
];

export default function AboutUs() {
    const handleDownload = () => {
        try {
            const link = document.createElement("a");
            link.href = "/Mahadusman.pdf";
            link.download = "Mahadusman.pdf"; // Better filename with spaces replaced
            link.target = "_blank"; // Open in new tab if download fails
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Download failed:", error);
            // Optional: Add user feedback here
        }
    };

    return (
        <div id="section2" className="border-t-2  mt-4 lg:mt-8">
            {/* Add min-h-screen to ensure full height on shorter screens */}
            <div className=" min-h-screen flex justify-start items-center flex-col gap-6 lg:gap-10 ml-0 lg:ml-28 mt-2 p-4">
                {/* About Me Section */}
                <div className="mt-12 lg:mt-4 text-left w-full">
                    <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400 mt-2">
                        About Me
                    </h1>
                    <h2 className="font-semibold text-blue-900 text-2xl mt-4">
                        I M <br />
                        <span className="typing-animation text-3xl font-bold text-blue-900">
                            Mahad Usman
                        </span>
                    </h2>
                    <p className="text-xl sm:text-2xl font-semibold text-blue-800 mt-2">
                        A 16-year-old student currently studying at Saqib Public School, pursuing my
                        matriculation. <br className="hidden sm:block" /> Currently, I am also enrolled
                        in GIAIC, where I’m exploring advanced programming and tech <br className="hidden sm:block" />
                        concepts to further enhance my knowledge and skills.
                    </p>
                </div>

                {/* Personal Details Section */}
                <div className="text-left w-full">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full max-w-4xl">
                        <div>
                            <ul className="text-xl sm:text-2xl font-semibold text-blue-500 space-y-2">
                                <li>
                                    <b>Date Of Birth</b> | 07th October, 2008
                                </li>
                                <li>
                                    <b>Age</b> | 16 yrs
                                </li>
                                <li>
                                    <b>Residence</b> | Karachi, Pakistan
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-xl sm:text-2xl font-semibold text-blue-500 space-y-2">
                                <li>
                                    <b>Email</b> | mahadusman2008@gmail.com
                                </li>
                                <li>
                                    <b>Github</b> | Mahad-Usman-15
                                </li>
                                <li>
                                    <b>Freelance</b> | Available
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Download CV Button */}
                <div className="w-full flex justify-start">

        <button
        onClick={handleDownload}
            className="w-32 h-12 text-white font-bold bg-blue-900 hover:bg-transparent hover:text-blue-900 hover:border hover:border-blue-900 transition-all duration-300 ease-in-out"
        >
            Download CV
        </button>
    
</div>
            </div>

            {/* Skills Section */}
            <div className="p-2 ml-0 lg:ml-32 mt-0 lg:mt-2 lg:mb-2">
                <div>
                    <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400 mt-2">
                        Skills
                    </h1>
                    <ul className="mt-4 text-blue-700 text-xl">
                        <li>Communication skills</li>
                        <li>Time Management</li>
                        <li>Photo Editing</li>
                        <li>Short Video Editing</li>
                    </ul>
                </div>

                <div className="mb-6 mt-4 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400">
                    <h3>Specializing In</h3>
                </div>

                {/* Responsive Grid for Skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <h4 className="text-blue-900 font-bold text-xl mb-2">{skill.skill}</h4>
                            <p className="text-blue-700">{skill.des}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}