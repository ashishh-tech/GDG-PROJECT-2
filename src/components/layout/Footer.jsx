import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-footerbg border-t border-border px-6 md:px-12 py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        <div>
          <div className="font-manrope font-extrabold text-2xl text-dark mb-4">PRECISION.</div>
          <p className="font-inter text-lg text-gray leading-7">
            Transforming complex ideas into<br />
            compelling human narratives.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div>
            <h3 className="font-manrope font-bold text-xl text-dark mb-5">Navigation</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="font-inter text-base text-gray hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="font-inter text-base text-gray hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="font-inter text-base text-gray hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="font-inter text-base text-gray hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-manrope font-bold text-xl text-dark mb-5">Studio</h3>
            <ul className="flex flex-col gap-3">
              <li className="font-inter text-base text-gray">123 Creative Blvd</li>
              <li className="font-inter text-base text-gray">Austin, TX 78701</li>
              <li className="font-inter text-base text-gray">hello@precision.agency</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="font-inter text-sm text-gray">© 2024 The Precision Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
