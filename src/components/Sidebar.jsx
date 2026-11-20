function Sidebar() {
    return (
        <aside className="hidden md:flex md:flex-col md:w-[28%] lg:w-[25%] h-screen sticky top-0 py-8 border-r border-[#2A2D3A] pl-10 pr-10">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 p-1 glow-border mb-6">
                <div className="w-full h-full rounded-full bg-[#0A0B0E] flex items-center justify-center text-4xl font-bold text-white">
                    MS
                </div>
            </div>

            {/* Name & Tagline */}
            <h1 className="text-3xl font-extrabold tracking-tight">Mark Joshua C. Sanchez</h1>
            <p className="text-indigo-400 font-semibold text-sm mt-1">Full Stack Developer</p>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                Building scalable APIs & seamless UIs.
            </p>

            {/* Navigation */}
            <nav className="mt-10 flex flex-col space-y-4 text-slate-400 font-medium">
                <a href="#" className="text-white flex items-center gap-3 hover:text-indigo-400 transition">
                    <span className="w-1 h-6 bg-indigo-500 rounded-full"></span> Home
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-indigo-400 transition">
                    <span className="w-1 h-6 bg-transparent rounded-full"></span> Projects
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-indigo-400 transition">
                    <span className="w-1 h-6 bg-transparent rounded-full"></span> About / Workflow
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-indigo-400 transition">
                    <span className="w-1 h-6 bg-transparent rounded-full"></span> Contact
                </a>
            </nav>

            {/* Socials */}
            <div className="mt-auto flex gap-5 text-slate-500 text-xl pb-8">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=markjoshuasanchez23@gmail.com&su=Portfolio%20Inquiry" target="_blank" className="hover:text-indigo-400 transition"><i className="ri-mail-fill"></i></a>
                <a href="https://www.facebook.com/markjoshua.sanchez.906" target="_blank" className="hover:text-indigo-400 transition"><i className="ri-facebook-fill"></i></a>
                <a href="https://www.facebook.com/markjoshua.sanchez.906" target="_blank" className="hover:text-indigo-400 transition"><i className="ri-messenger-fill"></i></a>
            </div>
        </aside>
    )
}

export default Sidebar