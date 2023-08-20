import { CpuChipIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
export default function Skills() {
  const skills = [
    ["javascript", "Javascript"],
    ["react", "React"],
    ["redux", "Redux"],
    ["tailwindcss", "Tailwind"],
    ["vitejs", "Vite"],
    ["nodejs", "Node.js"],
    ["express", "Express"],
    ["linux", "Linux"],
    ["git", "Git"],
    ["github", "GitHub"],
    ["firebase", "Firebase"],
    ["mongodb", "MongoDB"],
    ["mysql", "MySQL"],
    ["python", "Python"],
    ["jupyter", "Jupyter"],
    ["numpy", "NumPy"],
    ["pandas", "Pandas"],
    ["scikitlearn", "Scikit-Learn"],
    ["raspberrypi", "Raspberry Pi"],
    ["arduino", "Arduino"],
    ["aws", "AWS"],
    ["java", "Java"],
  ];
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-4">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h2 className="sm:text-4xl text-3xl font-bold title-font text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here is the wide range of tools I have been learning and using for
            my projects.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-grey rounded flex p-4 h-full items-center">
                <Icon
                  className="w-6 h-6 flex-shrink-0 mr-8"
                  icon={
                    skill[0] == "firebase"
                      ? `logos:${skill[0]}`
                      : skill[0] == "aws"
                      ? `skill-icons:aws-dark`
                      : `devicon:${skill[0]}`
                  }
                />
                <span className="title-font font-medium text-white">
                  {skill[1]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
