function Projects() {
    return (
        <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
                <i className="ri-folder-3-fill p-1 text-yellow-300"></i>Featured Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-auto md:auto-rows-[minmax(180px,auto)] gap-5">

                {/* Big Card */}
                <div className="glass p-6 rounded-2xl flex flex-col justify-between group cursor-pointer md:col-span-2 md:row-span-2">
                    <div>
                        <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">OJT/Internship</span>
                        <h4 className="text-xl font-bold mt-4 group-hover:text-indigo-400 transition">MBC Station Monitoring Dashboard</h4>
                        <p className="text-slate-400 text-sm">Real-time monitoring dashboard for radio stations nationwide - live station status, remote access integration, and an interactive Philippines map. Deployed and used in production by MBC Radio.</p>
                    </div>
                    <div className="flex gap-3 text-sm mt-4">
                        <span className="text-cyan-300">#PHP</span>
                        <span className="text-cyan-300">#MySQL</span>
                        <span className="text-cyan-300">#JavaScript</span>
                    </div>
                </div>

                {/* Small Card 1 */}
                <div className="glass p-5 rounded-2xl group cursor-pointer flex flex-col">
                    <span className="text-xs bg-[#2A2D3A] px-2 py-0.5 rounded self-start">Client Project/Freelance</span>
                    <h4 className="font-bold mt-3 group-hover:text-indigo-400 transition">Hizon's Cakes & Pastries - Sales Inventory System</h4>
                    <p className="text-slate-400 text-xs mt-1">Lightweight sales & inventory tracker for a single-user small business.</p>
                    <div className="mt-2 text-xs text-cyan-300">#JavaScript</div>
                </div>

                {/* Small Card 2 */}
                <div className="glass p-5 rounded-2xl group cursor-pointer flex flex-col">
                    <span className="text-xs bg-[#2A2D3A] px-2 py-0.5 rounded self-start">Landing Page</span>
                    <h4 className="font-bold mt-3 group-hover:text-indigo-400 transition">AISAT Portal</h4>
                    <p className="text-slate-400 text-xs mt-1">Short one-liner about what it's for (school portal / org page, etc.)</p>
                    <div className="mt-2 text-xs text-cyan-300">#HTML #CSS #JavaScript</div>
                </div>

                {/* Wide card */}
                <div className="col-span-1 sm:col-span-2 glass p-5 rounded-2xl flex items-center justify-between group cursor-pointer">
                    <div>
                        <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">School Project</span>
                        <h4 className="font-bold mt-2 group-hover:text-indigo-400 transition">Inventory Management System</h4>
                        <p className="text-slate-400 text-sm">Desktop inventory system built for a school requirement.</p>
                        <div className="mt-4 text-xs text-cyan-300">#VisualBasic #Desktop</div>
                    </div>
                    <div className="text-3xl text-slate-600">→</div>
                </div>
            </div>
        </section>
    )
}

export default Projects