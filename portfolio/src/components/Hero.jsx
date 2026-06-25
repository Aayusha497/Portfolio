function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 font-medium mb-3">Hello, I am</p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Aayusha
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6">
         Full-Stack Developer
        </h2>

        <p className="max-w-2xl text-slate-400 text-lg mb-8">
          I build responsive, user-friendly web applications using modern
          technologies. My projects focus on clean design, practical features,
          and real-world problem solving.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View Projects
          </a>

          {/* <a
            href="#contact"
            className="border border-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-800"
          >
            {/* Contact Me */}
          {/* </a> */} 
        </div>
      </div>
    </section>
  );
}

export default Hero;