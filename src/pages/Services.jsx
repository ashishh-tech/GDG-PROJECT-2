function Services() {
  const base = import.meta.env.BASE_URL;
  const services = [
    {
      tag: 'Narrative',
      title: 'Script Writing',
      description: "Transforming complex ideas into compelling human narratives. We don't just write scripts; we build the emotional scaffolding for your brand's story.",
      image: `${base}images/services_script.png`,
      imageFirst: false,
    },
    {
      tag: 'Production',
      title: 'Video Editing',
      description: 'Precision-cut visuals that command attention. Our editing process focuses on rhythm, pacing, and color science to evoke specific responses.',
      image: `${base}images/services_video.png`,
      imageFirst: true,
    },
    {
      tag: 'Growth',
      title: 'Digital Marketing',
      description: 'Advanced ecosystem integration for absolute autonomy and optimized performance across channels. High quality lead generation.',
      image: `${base}images/services_marketing.png`,
      imageFirst: false,
    },
  ];

  return (
    <div>
      <section className="bg-lightbg px-6 md:px-12 py-16 md:py-24">
        <p className="font-inter font-medium text-base text-green mb-3">Capabilities</p>
        <h1 className="font-manrope font-extrabold text-4xl md:text-5xl lg:text-6xl text-dark mb-5">
          Precision in Execution.
        </h1>
        <p className="font-inter text-lg md:text-xl text-gray max-w-2xl">
          We create digital experiences that transcend the ordinary. Our services are the architectural pillars.
        </p>
      </section>

      <section className="px-6 md:px-12 py-12">
        {services.map((service, index) => (
          <div key={index} className={`flex flex-col ${service.imageFirst ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16 mb-20 lg:mb-32`}>
            <div className="w-full lg:w-1/2">
              <p className="font-inter text-sm text-primary font-medium mb-3">{service.tag}</p>
              <h2 className="font-manrope font-bold text-3xl md:text-4xl text-dark mb-5">{service.title}</h2>
              <p className="font-inter text-lg text-gray leading-8">{service.description}</p>
            </div>
            <div className="w-full lg:w-1/2 h-[280px] md:h-[380px] bg-capsule rounded-2xl overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Services;
