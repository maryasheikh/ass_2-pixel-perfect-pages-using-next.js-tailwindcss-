export default function Jobs()  {
    return (
      <div>
           <section id="Skills" className="bg-blue-50 py-11 h-svh">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-pink-400 font-serif ">Skills</h1>
          </div>
  
          {/* Skill Boxes */}
          <div className="flex justify-evenly text-center flex-wrap gap-9 font-serif">
            {/* Frontend Development */}
            <div className="boxes border-2 border-pink-600 rounded-2xl shadow-lg w-[308px] h-[342px] bg-pink-50 hover:scale-110 transition-transform duration-200 ease-in">
              <h1 className="underline mt-2 text-lg font-bold text-pink-700 ">Frontend Development</h1>
              <div className="skills-icon flex justify-center my-10 text-5xl space-x-8">
                <i className="devicon-html5-plain-wordmark colored"></i>
                <i className="devicon-css3-plain-wordmark colored"></i>
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original colored"></i>
              </div>
              <div className="skill-box-para text-sm font-bold text-blue-900">
                <p>
                Develops websites using web <br/>
                technologies <br/>
                like HTML, CSS, React, and JavaScript, <br/>
                enabling users to visit and engage with <br/>
                the sites through an attractive  <br/>
                user interface.
                </p>
              </div>
            </div>
  
            {/* Backend Development */}
            <div className="boxes border-2 border-pink-600 rounded-2xl shadow-lg w-[308px] h-[342px] bg-pink-50 hover:scale-110 transition-transform duration-200 ease-in">
              <h1 className="underline mt-2 text-lg font-bold text-pink-700">Backend Deployment</h1>
              <div className="skills-icon flex justify-center my-10 text-5xl space-x-8">
                <i className="devicon-python-plain colored"></i>
                <i className="devicon-nodejs-plain colored"></i>
                <i className="devicon-mongodb-plain-wordmark colored"></i>
              </div>
              <div className="skill-box-para text-sm font-bold text-blue-900">
                <p>
                Design and manage the systems that handle data and execute
                functions on websites, such as admin panels and dashboards.
                </p>
              </div>
            </div>
  
            {/* Tools */}
            <div className="boxes border-2 border-pink-600 rounded-2xl shadow-lg w-[308px] h-[342px] bg-pink-50 hover:scale-110 transition-transform duration-200 ease-in">
              <h1 className="underline mt-2 text-lg font-bold text-pink-700">Tools</h1>
              <div className="skills-icon flex justify-center my-10 text-5xl space-x-8">
                <i className="devicon-git-plain-wordmark colored"></i>
                <i className="devicon-visualstudio-plain colored"></i>
                <i className="devicon-docker-plain-wordmark colored"></i>
              </div>
              <div className="skill-box-para text-sm font-bold text-blue-900">
                <p>I particularly enjoy using tools <br/>
                     that help with managing version <br/>
                     control systems efficiently  <br/>
                     editing code, and orchestrating <br/>
                     containers for seamless application <br/>
                     deployment and scaling.
                     </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  
    );
  };