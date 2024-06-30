

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
        <div className="text-center sm:text-left">
          <p>Is a practice committed to helping patients be pain-free, we are always accepting resumes from those clinicians and administrative staff who pride themselves on accepting new challenges</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Physiotherapist
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 ml-4">
              Chiropractor
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 ml-4">
              Registered Massage Therapist
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 ml-4">
              Osteopathic Manual Practitioner
            </a>
          </div>
        </div>
        <div className="text-center sm:text-left ml-4 sm:ml-8 mt-4 sm:mt-0">
          <p>Competitive Per Treatment</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Compensation
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 ml-4">
              Additional Income
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 ml-4">
              Through Enhanced Treatment Modalities
            </a>
          </div>
        </div>
        <div className="text-center sm:text-left ml-4 sm:ml-8 mt-4 sm:mt-0">
          <p>FAQ</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Massage Expert
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 ml-4">
              Provincial
            </a>
          </div>
        </div>
        <div className="flex items-center mt-4 sm:mt-0">
          <a href="#" className="flex items-center">
            <img src="https://play.google.com/static/images/branding/product/1x/googleplay_logo_120.png" alt="Google Play" className="w-10 h-10" />
            <span className="ml-2 text-gray-400 hover:text-gray-300">
              Get it on Google Play
            </span>
          </a>
          <a href="#" className="flex items-center ml-4">
            <img src="https://store-images.s-microsoft.com/image/apps.12022.9007199266534970.4e4cf1b5-b424-443e-8290-965e23703800.b655e103-8a1e-416a-8e1f-a1c5985033f4?w=240&h=240&q=80&mode=crop&background=%23FFFFFF" alt="Microsoft Store" className="w-10 h-10" />
            <span className="ml-2 text-gray-400 hover:text-gray-300">
              Download on the Microsoft Store
            </span>
          </a>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>Design By Morbius</p>
      </div>
    </footer>
  );
};

export default Footer;