export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-24 bg-brand-bg border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-3xl mb-4 tracking-tighter">YOGAPERSON</h2>
          <p className="text-sm text-charcoal/50 max-w-sm font-sans">
            Capturing yoga, energy, and presence through timeless photography. 
            Documenting the soul of movement across the globe.
          </p>
        </div>
        
        <div className="flex flex-col md:items-end gap-6 text-sm uppercase tracking-[0.2em]">
          <div className="flex gap-10">
            <a href="https://instagram.com/yogaperson" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">Instagram</a>
            <a href="#" className="hover:text-sage transition-colors">Portfolio</a>
            <a href="#" className="hover:text-sage transition-colors">Contact</a>
          </div>
          <div className="text-[10px] text-charcoal/30">
            &copy; {new Date().getFullYear()} YOGAPERSON. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
