function About() {
    return (
        <section className="glass rounded-2xl p-0 overflow-hidden border border-[#2A2D3A]">
            <div className="bg-[#16181F] px-5 py-3 border-b border-[#2A2D3A] flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-slate-500 text-xs ml-4 font-code">markjoshuasanchez23@gmail.com:~$ cat about.md</span>
            </div>
            <div className="p-6 font-code text-sm text-slate-300 leading-relaxed">
                <p>
                    <span className="text-green-400">markjoshuasanchez23@gmail.com</span>:
                    <span className="text-blue-400">~</span>$ cat about.md
                </p>
                <p className="mt-2 text-slate-400">&gt; Intern at MBC Media Group — built and deployed a station monitoring
                    dashboard now used company-wide.</p>
                <p className="text-slate-400">&gt; Built inventory & sales systems for small businesses (Hizon's Cakes
                    and Pastries).</p>
                <p className="text-slate-400">
                    &gt; Currently migrating my portfolio from vanilla HTML/Tailwind to <span className="text-yellow-300">React.js</span>
                </p>
                <p className="mt-3 text-indigo-400">✔️ Full-Stack Development: PHP, MySQL, JavaScript, React.js</p>
                <p className="mt-3 text-indigo-400">✔️ Practical Systems: Inventory, sales tracking & real-time dashboards</p>
                <p className="mt-3 text-indigo-400">✔️ Also comfortable outside the web: built a desktop inventory system in VB</p>
            </div>
        </section>
    )
}

export default About