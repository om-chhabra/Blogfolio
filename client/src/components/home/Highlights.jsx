import { CodeBracketIcon } from "@heroicons/react/24/solid";
const projects = [
  {
    title: "Blogfolio",
    subtitle: "MERN Stack",
    description:
      "An extension of my resume and a place to share insights.Implemented backend & DB with Admin auth using JWT, enabling efficient data management for projects and blog posts. Leveraged React to create engaging experience & clean user interface.",
    link: "https://github.com/om-chhabra/blogfolio",
    image: "/blogfolio.png",
  },
  {
    title: "Kaali-Peeli",
    subtitle: "React Native + IoT",
    description:
      "Project currently in the works, it is a cross-platform mobile application designed for hailing local cabs (called kaali-peeli in Hindi from their colour translated as black & yellow, here in Mumbai.) These cabs come with a fare meter built-in, which will be modernised by integrating IoT sensors to ensure reliable & robust data collection & communication.",
    link: "https://github.com/om-chhabra/kaali-peeli",
    image: "/kaali-peeli.jpg",
  },
  {
    title: "WiFi Person Detector",
    subtitle: "IoT & ML with Python",
    description:
      "Computes real-time estimates (score: 85%) on the number of people in a room using WiFi Networks in Environment. Involved with data collection (RSSI) by an Embedded System, posting data to a self hosted server. Data then fetched to create a Machine Learning Model which is exported and attached to real time server data.",
    link: "https://github/om-chhabra/wifi-person-detector",
    image: "/wifi-person.webp",
  },
  {
    title: "Life Expectancy - Predictive Analytics",
    subtitle: "Python & Data Science Libraries",
    description:
      "Analysing factors correlated with WHO Life-expectancy data & fitting the data into an ML Model (Score: 93.5%) Data preprocessed and Exploratory Data Analysis carried out to visualise the data and find trends. Features with more correlation chosen to be fit into the model and principal components obtained.",
    link: "https://github.com/om-chhabra/life-expectancy",
    image: "/life-expectancy.png",
  },
];
export default function Highlights() {
  return (
    <section id="projects" className="body-font">
      <div className="container p-8 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-12">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the most massive & innovative projects I've worked
            on.
          </p>
        </div>
        <div className="flex flex-col items-center -m-4">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="p-8">
              <div className="flex relative w-full aspect-video">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl border-solid border-2 border-teal"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-grey opacity-0 hover:opacity-100 rounded-2xl">
                  <h2 className="tracking-widest text-sm title-font font-medium text-teal mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
