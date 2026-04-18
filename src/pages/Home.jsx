import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

      {/* hero section */}
      <section className="flex flex-col lg:flex-row items-center bg-lightbg min-h-[500px] lg:min-h-[700px] px-6 md:px-12 py-16 lg:py-0">
        
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-fadeInUp">
          <div className="inline-block bg-capsule text-primary font-inter font-semibold text-sm px-5 py-2 rounded-full mb-6">
            Digital Presence
          </div>
          
          <h1 className="font-manrope font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-dark leading-tight mb-6">
            Elevating Brand <br />
            Stories <span className="text-primary">With Intent.</span>
          </h1>
          
          <p className="font-inter text-lg md:text-xl text-gray leading-8 max-w-xl mb-8">
            We don't just build websites; we curate experiences. Our intentional 
            use of space and typography mirrors our own commitment to excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="inline-block text-center font-manrope font-semibold text-lg bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors">
              Explore Services
            </Link>
            <Link to="/case-studies" className="inline-block text-center font-manrope font-semibold text-lg bg-white text-dark border border-border px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">
              View Methodology
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[45%] h-[300px] md:h-[400px] lg:h-[500px]">
          <img 
            src="/images/hero-architecture.png" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* toolkit section */}
      <section className="bg-white px-6 md:px-12 py-20 md:py-28">
        <div className="mb-16">
          <p className="font-inter font-medium text-base text-green mb-2">Capabilities</p>
          <h2 className="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl text-dark">
            The Precision Toolkit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-cardbg rounded-xl p-10 md:p-12 hover:shadow-lg transition-shadow">
            <h3 className="font-manrope font-semibold text-2xl text-dark mb-5">Script Writing</h3>
            <p className="font-inter text-base text-gray leading-7">
              Transforming complex ideas into compelling human narratives that engage and inspire action.
            </p>
          </div>
          <div className="bg-cardbg rounded-xl p-10 md:p-12 hover:shadow-lg transition-shadow">
            <h3 className="font-manrope font-semibold text-2xl text-dark mb-5">Digital Marketing</h3>
            <p className="font-inter text-base text-gray leading-7">
              Advanced ecosystem integration for absolute autonomy and optimized performance across channels.
            </p>
          </div>
          <div className="bg-cardbg rounded-xl p-10 md:p-12 hover:shadow-lg transition-shadow">
            <h3 className="font-manrope font-semibold text-2xl text-dark mb-5">Product Design</h3>
            <p className="font-inter text-base text-gray leading-7">
              Creating intuitive digital products that marry ergonomic function with minimum-grade aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* featured projects */}
      <section className="bg-lightbg px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-14 gap-4">
          <div>
            <p className="font-inter font-medium text-base text-green mb-2">Selected Work</p>
            <h2 className="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl text-dark">
              Featured Projects
            </h2>
          </div>
          <Link to="/case-studies" className="font-inter font-semibold text-lg text-primary hover:underline">
            View All Work →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-5 hover:shadow-lg transition-shadow">
            <img src="/images/case-interior.png" alt="Lumira Atelier" className="w-full h-[250px] md:h-[350px] object-cover rounded-xl" />
            <div className="mt-6">
              <p className="font-inter font-semibold text-sm text-primary mb-2">Digital Presence</p>
              <h3 className="font-manrope font-bold text-2xl text-dark">Lumira Atelier</h3>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 hover:shadow-lg transition-shadow">
            <img src="/images/case-furniture.png" alt="Kinetic Retail" className="w-full h-[250px] md:h-[350px] object-cover rounded-xl" />
            <div className="mt-6">
              <p className="font-inter font-semibold text-sm text-primary mb-2">E-Commerce</p>
              <h3 className="font-manrope font-bold text-2xl text-dark">Kinetic Retail</h3>
            </div>
          </div>
        </div>
      </section>

      {/* cta banner */}
      <section className="bg-white px-6 md:px-12 py-20 md:py-28">
        <div className="bg-dark rounded-3xl flex flex-col items-center justify-center text-center px-6 py-16 md:py-24">
          <h2 className="font-manrope font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to redefine your <span className="text-primary">narrative?</span>
          </h2>
          <p className="font-inter text-lg text-border mb-8">
            We are currently accepting new projects. Let's build something extraordinary together.
          </p>
          <Link to="/contact" className="font-manrope font-semibold text-lg bg-primary text-white px-10 py-4 rounded-xl hover:bg-blue-800 transition-colors">
            Start a Project
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
