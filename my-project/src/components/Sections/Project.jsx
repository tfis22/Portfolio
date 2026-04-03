

export const Projects =() => {
    
    return(
        <section id="Projects" className="min-h-screen flex items-center justify-center py-20">

            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">B2C E-commerce Web Application</h3>
                        <p className="text-gray-400 mb-4">
                            A responsive e-commerce web application that enables users to browse products, add items to a cart, and manage orders. Focused on smooth user experience and efficient state management.
                        </p>
                        <div>
                            {["React","HTMl","CSS","Javascript"].map((tech,key)=>(
                                <span
                                key={key}
                                 className="bg-blue-500/10 text-blue-500 pyy-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all   
                                ">
                                {tech}
                                </span>
                            ))}

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:tect-blue-200 transition-colors my-4">View Project </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">SkillBridge</h3>
                        <p className="text-gray-400 mb-4">
                            A full-stack web platform designed to connect users with skill-based opportunities. Contributed to both frontend and backend development, focusing on usability and system structure.
                        </p>
                        <div>
                            {["React","TailwindCSS","Node.JS","Javascript","MOngoDB"].map((tech,key)=>(
                                <span
                                key={key}
                                 className="bg-blue-500/10 text-blue-500 pyy-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all   
                                ">
                                {tech}
                                </span>
                            ))}

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:tect-blue-300 transition-colors my-4">View Project </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>
                        <p className="text-gray-400 mb-4">
                            A modern, responsive portfolio website built to showcase projects, skills, and experience. Emphasizes clean design, performance, and user interaction.
                        </p>
                        <div>
                            {["React","TailwindCSS","Javascript",].map((tech,key)=>(
                                <span
                                key={key}
                                 className="bg-blue-500/10 text-blue-500 pyy-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all   
                                ">
                                {tech}
                                </span>
                            ))}

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:tect-blue-300 transition-colors my-4">View Project </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">TalkChat</h3>
                        <p className="text-gray-400 mb-4">
                             A messaging web application with user authentication and resonsive UI.
                        </p>
                        <div>
                            {["React","Firebase","Javascript",].map((tech,key)=>(
                                <span
                                key={key}
                                 className="bg-blue-500/10 text-blue-500 pyy-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all   
                                ">
                                {tech}
                                </span>
                            ))}

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:tect-blue-300 transition-colors my-4">View Project </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}