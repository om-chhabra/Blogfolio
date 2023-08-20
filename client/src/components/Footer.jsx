import { Link } from "react-router-dom";
export default function Footer({ usePath }) {
  return (
    <>
      <footer className="mt-24 mb-4">
        <div className="px-4 md:px-24 container mx-auto">
          <nav className="grid grid-cols-3 gap-x-20 text-center md:text-left">
            <ul className="flex flex-col items-center md:items-start">
              <li className="inline-block mb-3 uppercase relative text-teal">
                Navigate
              </li>
              <li className="mb-2 inline-block">
                <Link className="underline-offset-2 hover:underline" to="/">
                  Home
                </Link>
              </li>
              {usePath() === "/" ? (
                <>
                  <li className="mb-2 inline-block">
                    <Link
                      className="underline-offset-2 hover:underline"
                      to="/#projects"
                      reloadDocument
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="mb-2 inline-block">
                    <Link
                      className="underline-offset-2 hover:underline"
                      to="/#contact"
                      reloadDocument
                    >
                      Connect
                    </Link>
                  </li>
                </>
              ) : null}
              <li className="mb-2 inline-block">
                <Link
                  className="underline-offset-2 hover:underline"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li className="mb-2 inline-block">
                <a
                  className="underline-offset-2 hover:underline"
                  target="_blank"
                  href="https://docs.google.com/document/d/16RVbT5x57XkVXRNbrxQFt_ucTtKgl_Idkr_qqtUD2os/edit?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>

            <ul>
              <li className="inline-block mb-3 uppercase relative text-teal">
                Socials
              </li>
              <li className="mb-2 block">
                <a
                  className="underline-offset-2 hover:underline"
                  href="https://github.com/om-chhabra"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li className="mb-2 block">
                <a
                  className="underline-offset-2 hover:underline"
                  href="https://www.linkedin.com/in/om-chhabra/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-2 block">
                <a
                  className="underline-offset-2 hover:underline"
                  href="https://www.threads.net/@omchhabra"
                  target="_blank"
                >
                  Threads
                </a>
              </li>
              <li className="mb-2 block">
                <a
                  className="underline-offset-2 hover:underline"
                  href="https://www.instagram.com/omchhabra/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
            <ul>
              <li className="inline-block mb-3 uppercase relative text-teal">
                Thanks!
              </li>
              <li className="mb-2 block">Made with ❤ by @Om </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
