function Hero() {
    return (
        <section className="pt-8 space-y-6">
            <div className="inline-block bg-indigo-500/10 text-indigo-300 text-xs font-bold px-4 py-1.5 rounded-full border border-indigo-500/30">
                Available for freelance
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                I turn complex back-end logic <br />
                into <span className="gradient-text">seamless front-end</span> experiences.
            </h2>

            {/* Typing effect simulation */}
            <div className="flex items-center gap-2 text-slate-300 font-code text-sm bg-[#16181F] w-fit px-5 py-3 rounded-lg border border-[#2A2D3A]">
                <span className="text-green-400">$</span>
                Currently building with <span className="text-cyan-400 font-bold">[ React.js ]</span>
                <span className="animate-pulse">▌</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
                <a href="/MarkJoshuaSanchez_CV.pdf" download className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition shadow-lg shadow-indigo-600/20">
                    Download CV
                </a>
                <button className="border border-[#2A2D3A] hover:border-indigo-400 text-slate-300 hover:text-white font-bold py-3 px-8 rounded-xl transition">
                    View Work ↓
                </button>
            </div>
        </section>
    )
}

export default Hero