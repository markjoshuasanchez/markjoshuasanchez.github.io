function TechStack() {
    return (
        <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
                <i className="ri-flashlight-line p-1 text-yellow-300"></i>Tech Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="glass p-6 rounded-2xl">
                    <div className="text-2xl mb-3">
                        <i className="ri-html5-line pr-2"></i>
                        <i className="ri-css3-fill pr-2"></i>
                        <i className="ri-javascript-fill pr-2"></i>
                        <i className="ri-tailwind-css-fill pr-2"></i>
                        <i className="ri-reactjs-fill pr-2"></i>
                    </div>
                    <h4 className="font-bold text-white">Frontend</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-[#2A2D3A] px-3 py-1 rounded-full text-cyan-300">HTML</span>
                        <span className="text-xs bg-[#2A2D3A] px-3 py-1 rounded-full text-cyan-300">CSS</span>
                        <span className="text-xs bg-[#2A2D3A] px-3 py-1 rounded-full text-cyan-300">JavaScript</span>
                        <span className="text-xs bg-[#2A2D3A] px-3 py-1 rounded-full text-cyan-300">Tailwind</span>
                        <span className="text-xs bg-[#2A2D3A] px-3 py-1 rounded-full text-cyan-300">React.js</span>
                    </div>
                </div>

                <div className="glass p-6 rounded-2xl">
                    <div className="text-2xl mb-3">
                        <i className="ri-php-line pr-2"></i>
                        <i className="ri-java-fill pr-2"></i>
                    </div>
                    <h4 className="font-bold text-white">Backend</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-[#2A2D3A] px-3 py-1 rounded-full text-indigo-300">Php</span>
                        <span className="text-xs bg-[#2A2D3A] px-3 py-1 rounded-full text-indigo-300">Java</span>
                        <span className="text-xs bg-[#2A2D3A] px-3 py-1 rounded-full text-indigo-300">Python</span>
                    </div>
                </div>

                <div className="glass p-6 rounded-2xl">
                    <div className="text-2xl mb-3">
                        <i className="ri-database-2-fill pr-2"></i>
                    </div>
                    <h4 className="font-bold text-white">Database & DevOps</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-[#2A2D3A] px-3 py-1 rounded-full text-yellow-300">PostgreSQL</span>
                        <span className="text-xs bg-[#2A2D3A] px-3 py-1 rounded-full text-yellow-300">MySQL</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack