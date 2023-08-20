export default function Connect() {
  return (
    <section id="contact" className="py-12">
      <div className="items-center text-center mb-2">
        <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Connect with me.
        </h2>
        <p className="leading-relaxed text-lg xl:w-2/4 lg:w-3/4 mx-auto">
          Want to collaborate? Get in touch here.
        </p>
      </div>
      <div className="container px-5 md:py-10 py-0 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="md:block w-3/5 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 items-end justify-start relative hidden">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Mumbai+City+District,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <div className="md:mx-0 mx-auto items-center justify-center">
          <h3 className="font-semibold lg:text-xl text-lg mt-8">EMAIL:</h3>
          <a href="mailto:omchhabra2003@gmail.com">
            <h3 className="font-bold lg:text-2xl text-xl text-teal hover:text-teall mb-12">
              omchhabra2003@gmail.com
            </h3>
          </a>
          <h3 className="font-semibold lg:text-xl text-lg">PHONE:</h3>
          <a href="tel:+917977256016">
            <h3 className="font-bold lg:text-2xl text-xl text-teal hover:text-teall mb-12">
              +91 7977256016
            </h3>
          </a>
          <h3 className="font-semibold lg:text-x text-lg">WHERE:</h3>
          <h3 className="font-bold lg:text-2xl text-xl text-teal mb-16">
            Mumbai City
          </h3>
        </div>
      </div>
    </section>
  );
}
