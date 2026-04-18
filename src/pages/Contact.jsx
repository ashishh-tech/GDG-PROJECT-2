import { useState } from 'react';
import toast from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', interest: 'product_design', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', interest: 'product_design', message: '' });
  };

  return (
    <div>
      <section className="bg-lightbg px-6 md:px-12 py-16 md:py-24">
        <p className="font-inter font-medium text-base text-green mb-3">Get in Touch</p>
        <h1 className="font-manrope font-extrabold text-4xl md:text-5xl lg:text-6xl text-dark mb-5">Let's Create Something Great</h1>
        <p className="font-inter text-lg md:text-xl text-gray max-w-2xl">Whether you're starting from scratch or scaling to the next billion, we're here to elevate your digital presence.</p>
      </section>

      <section className="bg-lightbg px-6 md:px-12 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <form onSubmit={handleSubmit} className="w-full lg:w-3/5 bg-white rounded-2xl p-8 md:p-12 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-inter font-medium text-sm text-dark">First Name</label>
                <input id="contact-firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" className="h-14 bg-inputbg border border-border rounded-lg px-5 font-inter text-sm outline-none focus:border-primary transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-inter font-medium text-sm text-dark">Last Name</label>
                <input id="contact-lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" className="h-14 bg-inputbg border border-border rounded-lg px-5 font-inter text-sm outline-none focus:border-primary transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-inter font-medium text-sm text-dark">Work Email</label>
              <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className="h-14 bg-inputbg border border-border rounded-lg px-5 font-inter text-sm outline-none focus:border-primary transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-inter font-medium text-sm text-dark">Area of Interest</label>
              <select id="contact-interest" name="interest" value={formData.interest} onChange={handleChange} className="h-14 bg-inputbg border border-border rounded-lg px-5 font-inter text-sm outline-none focus:border-primary transition-colors">
                <option value="product_design">Product Design</option>
                <option value="digital_marketing">Digital Marketing</option>
                <option value="video_production">Video Production</option>
                <option value="script_writing">Script Writing</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-inter font-medium text-sm text-dark">Tell us about your project</label>
              <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Briefly describe what you're looking to build..." rows={5} className="bg-inputbg border border-border rounded-lg p-5 font-inter text-sm outline-none focus:border-primary transition-colors resize-none" />
            </div>

            <button id="contact-submit" type="submit" className="h-14 bg-primary text-white font-manrope font-bold text-base rounded-lg hover:bg-blue-800 transition-colors">
              Send Message
            </button>
          </form>

          <div className="w-full lg:w-2/5 bg-dark rounded-2xl p-10 md:p-12 flex flex-col gap-12">
            <div>
              <h3 className="font-manrope text-xl text-gray mb-2">Email Us</h3>
              <p className="font-inter text-lg text-white">hello@precision.agency</p>
            </div>
            <div>
              <h3 className="font-manrope text-xl text-gray mb-2">Our Studio</h3>
              <p className="font-inter text-lg text-white">123 Creative Blvd, Suite 400</p>
              <p className="font-inter text-lg text-white">Austin, TX 78701</p>
            </div>
            <div>
              <h3 className="font-manrope text-xl text-gray mb-2">Call</h3>
              <p className="font-inter text-lg text-white">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
