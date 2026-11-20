function Contact() {
    return (
        <>
            <section className="text-center py-8 border-t border-[#2A2D3A]">
                <p className="text-slate-400 text-sm">
                    <i className="ri-mail-fill pr-1"></i>Let's build something legendary
                </p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=markjoshuasanchez23@gmail.com&su=Portfolio%20Inquiry" target="_blank" className="text-2xl md:text-3xl font-bold text-indigo-400 hover:text-cyan-400 transition">
                    markjoshuasanchez23@gmail.com
                </a>
                <div className="mt-6">
                    <button className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:scale-105 transition text-white font-bold py-4 px-12 rounded-2xl shadow-2xl shadow-indigo-600/30">
                        Start a Project →
                    </button>
                </div>
            </section>

            <p className="text-center text-slate-600 text-xs border-t border-[#2A2D3A] pt-8">
                © 2026 • Built with Tailwind and React.js
            </p>
        </>
    )
}

export default Contact