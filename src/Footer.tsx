import Logo from "./assets/logo-text.png";

const Footer = () => {
  return (
    <>
      <div className="lg:container mx-auto my-16 md:my-24 px-6 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start justify-center gap-y-4">
            <img
              src={Logo}
              alt="DevStack"
              className="max-w-34.25 max-h-8"
            />

            <p className="text-gray-500 max-w-md max-[640px]:text-center">
              Curated tools, technologies and resources for developers building
              modern software.
            </p>

            <ul className="flex gap-4 font-semibold text-gray-700">
              <li>
                <a href="#github">GitHub</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#linkedin">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div className="max-[640px]:hidden flex flex-col items-center">
            <div className="text-left flex flex-col gap-2">
              <h2 className="font-bold">PRODUCT</h2>

              <ul className="flex flex-col gap-1 text-gray-700">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#technologies">Technologies</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-[640px]:hidden flex flex-col items-center">
            <div className="text-left flex flex-col gap-2">
              <h2 className="font-bold">COMPANY</h2>

              <ul className="flex flex-col gap-1 text-gray-700">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-[640px]:hidden flex flex-col items-center">
            <div className="text-left flex flex-col gap-2">
              <h2 className="font-bold">LEGAL</h2>

              <ul className="flex flex-col gap-1 text-gray-700">
                <li>
                  <a href="#privacy">Privacy & Policy</a>
                </li>
                <li>
                  <a href="#terms">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:container mx-auto px-6 lg:px-0 flex flex-row  justify-between gap-4 mt-16 lg:mt-24 mb-8 text-gray-700">
        <p>&copy; {new Date().getFullYear()} DevStack | All rights reserved</p>

        <ul className="flex gap-4">
          <li>
            <a href="#privacy">Privacy</a>
          </li>
          <li>
            <a href="#terms">Terms</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
