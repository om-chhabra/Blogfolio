import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <section id="about">
        <div className="container mx-auto flex px-10 pt-14 pb-32 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              Hello World! 👋🏽,
              <br className="lg:inline-block" />
              I'm <span className="text-teal ">Om Chhabra</span>,
              <br className="lg:inline-block" /> a Software Developer.
            </h1>
            <p className="mb-8 leading-relaxed">
              I'm an Electronics Major at D.J. Sanghvi College of Engineering,
              set to graduate in 2024. I'm most passionate in these three core
              disciplines: Software Development (with a focus on the web),
              Machine Learning & Data Science (with Python) and IoT Integration.
              I'm also broadening my horizons in Cloud Computing with AWS across
              these domains. Additionally, I'm gaining proficiency in React
              Native for cross-platform app development.
            </p>
            <div className="flex justify-center">
              <Link
                to="/#contact"
                reloadDocument
                className="inline-flex text-white bg-teal border-0 py-2 px-6 focus:outline-none hover:bg-teall rounded text-lg"
              >
                Connect with me
              </Link>
              <a
                href="https://github.com/om-chhabra?tab=repositories"
                target="_blank"
                className="ml-4 inline-flex bg-grey border-0 py-2 px-6 focus:outline-none hover:bg-grayy hover:text-white rounded text-lg"
              >
                See all my Projects
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-3xl"
              alt="Om's Potrait"
              src="/potrait.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
