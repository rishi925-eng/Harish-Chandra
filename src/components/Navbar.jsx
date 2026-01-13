import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home, User, FlaskConical, BookOpen, Award, Phone, Menu, X,
  GraduationCap, ChevronDown, Presentation, Users, Mic, Briefcase,
  Trophy, Image, FileText, Book, Cpu, Globe, Link as LinkIcon
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const [mobileDocsOpen, setMobileDocsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#913c07] shadow-sm relative group">
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
           style={{ backgroundSize: '200% 100%', animation: 'lightSweep 2s ease-in-out' }} />
      
      <style>{`
        @keyframes lightSweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes slideFromLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @media (min-width: 1024px) { .mobile-hamburger { display: none !important; } }
      `}</style>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between relative z-10">

        {/* Left: Logo Section */}
        <div>
          {/* Increased heading from lg to text-xl/2xl for better visibility */}
          <div className="text-xl sm:text-2xl md:text-3xl font-secondary italic text-white"> 
            Dr. Harish Chandra
          </div>
          {/* Maintained small text for subtitle for hierarchy */}
          <div className="text-xs sm:text-sm text-white font-primary"> 
            Assistant Professor
          </div>
        </div>

        {/* Desktop Menu */}
        {/* Adjusted gap-2 to gap-1 to fit more items comfortably */}
        <div className="hidden lg:flex items-center gap-1 ml-auto"> 
          <NavItem to="/" icon={<Home size={16} />} label="Home" />
          <NavItem to="/profile" icon={<User size={16} />} label="Profile" />
          <NavItem to="/teaching" icon={<GraduationCap size={16} />} label="Teaching" />
          
          <div className="relative group/research" onMouseEnter={() => setResearchOpen(true)} onMouseLeave={() => setResearchOpen(false)}>
            <button className="group relative flex items-center gap-1 px-2 py-2 rounded-md text-white font-primary hover:bg-white/10 transition-all duration-300 ease-out text-sm"> {/* Reduced text to sm for desktop fit */}
              <span className="relative z-10 transition-transform duration-300 group-hover:rotate-6"><FlaskConical size={16} /></span>
              <span className="relative z-10 transition-all duration-300 group-hover:font-semibold text-sm">Research</span> {/* Added text-sm */}
              <ChevronDown size={14} className="relative z-10" />
            </button>
            
            {researchOpen && (
              <div className="absolute top-full left-0 mt-0 w-64 bg-[#563c29] shadow-lg rounded-md border border-[#913c07] overflow-hidden z-50" style={{ animation: 'slideFromLeft 0.3s ease-out' }}>
                <DropdownItem to="/research" icon={<FlaskConical size={16} />} label="Research Projects" />
                <DropdownItem to="/publications" icon={<BookOpen size={16} />} label="Publications" />
                <DropdownItem to="/workshops" icon={<Briefcase size={16} />} label="Workshop" />
                <DropdownItem to="/paper-presentation" icon={<Presentation size={16} />} label="Paper Presentation" />
                <DropdownItem to="/participation" icon={<Users size={16} />} label="Miscellaneous Participation" />
                <DropdownItem to="/talks" icon={<Mic size={16} />} label="Talk Delivered" />
                <DropdownItem to="/extra-academic-activity" icon={<Trophy size={16} />} label="Extra Academic Activity" />
              </div>
            )}
          </div>
          
          <NavItem to="/achievements" icon={<Award size={16} />} label="Achievements" />
          <NavItem to="/awarded" icon={<GraduationCap size={16} />} label="Awarded" />
          <NavItem to="/gallery" icon={<Image size={16} />} label="Gallery" />
          <NavItem to="/contact" icon={<Phone size={16} />} label="Contact" />

          <div className="relative group/docs" onMouseEnter={() => setDocsOpen(true)} onMouseLeave={() => setDocsOpen(false)}>
            <button className="group relative flex items-center gap-1 px-2 py-2 rounded-md text-white font-primary hover:bg-white/10 transition-all duration-300 ease-out text-sm"> {/* Reduced text to sm */}
              <span className="relative z-10 transition-transform duration-300 group-hover:rotate-6"><FileText size={16} /></span>
              <span className="relative z-10 transition-all duration-300 group-hover:font-semibold text-sm">Documents</span> {/* Added text-sm */}
              <ChevronDown size={14} className="relative z-10" />
            </button>

            {docsOpen && (
              <div className="absolute top-full left-0 mt-0 w-48 bg-[#563c29] shadow-lg rounded-md border border-[#913c07] overflow-hidden z-50" style={{ animation: 'slideFromLeft 0.3s ease-out' }}>
                <DropdownItem to="/Books" icon={<Book size={16} />} label="Books" />
                <DropdownItem to="/software" icon={<Cpu size={16} />} label="Software" />
              </div>
            )}
          </div>    
          <NavItem to="/resources" icon={<Globe size={16} />} label="Resources" />
          <NavItem to="/web-links" icon={<LinkIcon size={16} />} label="Web Links" />    
        </div>

        <button className="mobile-hamburger lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#563c29] border-t shadow-md relative z-10 block">
          {/* Main Mobile items use default base size */}
          <MobileNavItem to="/" label="Home" icon={<Home size={16} />} onClick={() => setOpen(false)} />
          <MobileNavItem to="/profile" label="Profile" icon={<User size={16} />} onClick={() => setOpen(false)} />
          <MobileNavItem to="/teaching" label="Teaching" icon={<GraduationCap size={16} />} onClick={() => setOpen(false)} />
          
          <div className="w-full block">
            <button onClick={() => setMobileResearchOpen(!mobileResearchOpen)} className="w-full text-left group relative flex items-center gap-3 px-6 py-3 text-white font-primary hover:bg-[#913c07] transition-all duration-300 text-base"> {/* Explicit text-base */}
              <span className="relative z-10 transition-transform duration-300 group-hover:rotate-6"><FlaskConical size={16} /></span>
              <span className="relative z-10 inline-block transition-all duration-300 flex-grow">Research</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileResearchOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileResearchOpen && (
              <div className="bg-[#3d2a1f]">
                <MobileSubNavItem to="/research" label="Research Projects" icon={<FlaskConical size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/publications" label="Publications" icon={<BookOpen size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/workshops" label="Workshop" icon={<Briefcase size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/paper-presentation" label="Paper Presentation" icon={<Presentation size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/participation" label="Miscellaneous Participation" icon={<Users size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/talks" label="Talk Delivered" icon={<Mic size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/extra-academic-activity" label="Extra Academic Activity" icon={<Trophy size={16} />} onClick={() => setOpen(false)} />
              </div>
            )}
          </div>
          
          <MobileNavItem to="/achievements" label="Achievements" icon={<Award size={16} />} onClick={() => setOpen(false)} />
          <MobileNavItem to="/awarded" label="Awarded" icon={<GraduationCap size={16} />} onClick={() => setOpen(false)} />
          <MobileNavItem to="/gallery" label="Gallery" icon={<Image size={16} />} onClick={() => setOpen(false)} />
          <MobileNavItem to="/contact" label="Contact" icon={<Phone size={16} />} onClick={() => setOpen(false)} />
          
          <div className="w-full block">
            <button onClick={() => setMobileDocsOpen(!mobileDocsOpen)} className="w-full text-left group relative flex items-center gap-3 px-6 py-3 text-white font-primary hover:bg-[#913c07] transition-all duration-300 text-base"> {/* Explicit text-base */}
              <span className="relative z-10 transition-transform duration-300 group-hover:rotate-6"><FileText size={16} /></span>
              <span className="relative z-10 inline-block transition-all duration-300 flex-grow">Documents</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileDocsOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileDocsOpen && (
              <div className="bg-[#3d2a1f]">
                <MobileSubNavItem to="/books" label="Books" icon={<Book size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/software" label="Software" icon={<Cpu size={16} />} onClick={() => setOpen(false)} />
              </div>
            )}
          </div>
          <MobileNavItem to="/resources" label="Resources" icon={<Globe size={16} />} onClick={() => setOpen(false)} />
          <MobileNavItem to="/web-links" label="Web Links" icon={<LinkIcon size={16} />} onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
};

/* --- Sub-components with size adjustments --- */

const NavItem = ({ to, icon, label }) => (
  <Link to={to} className="group relative flex items-center gap-1 px-2 py-2 rounded-md text-white font-primary hover:bg-white/10 transition-all duration-300 text-sm"> {/* Added text-sm for better desktop spacing */}
    <span className="relative z-10 transition-transform duration-300 group-hover:rotate-6">{icon}</span>
    <span className="relative z-10 transition-all duration-300">{label}</span>
  </Link>
);

const MobileNavItem = ({ to, label, onClick, icon }) => (
  <Link to={to} onClick={onClick} className="group relative flex items-center gap-3 px-6 py-3 text-white w-full block font-primary hover:bg-[#913c07] transition-all duration-300 text-base"> {/* Added text-base for mobile thumb-friendly size */}
    {icon && <span className="relative z-10 transition-transform duration-300 group-hover:rotate-6">{icon}</span>}
    <span className="relative z-10 inline-block transition-all duration-300">{label}</span>
  </Link>
);

const DropdownItem = ({ to, icon, label }) => (
  <Link to={to} className="group flex items-center gap-3 px-4 py-3 text-white font-primary hover:bg-[#913c07] transition-all duration-300 border-b border-white/10 last:border-b-0 text-sm"> {/* Kept text-sm for dropdowns */}
    <span className="transition-transform duration-300 group-hover:rotate-6 text-white">{icon}</span>
    <span className="transition-all duration-300 text-sm">{label}</span>
  </Link>
);

const MobileSubNavItem = ({ to, label, onClick, icon }) => (
  <Link to={to} onClick={onClick} className="group relative flex items-center gap-3 px-10 py-2.5 text-white bg-[#3d2a1f] w-full block font-primary hover:bg-[#913c07] transition-all duration-300 text-sm"> {/* Kept sub-items slightly smaller at text-sm */}
    {icon && <span className="transition-transform duration-300 text-white/80 group-hover:text-white group-hover:scale-110">{icon}</span>}
    <span className="relative z-10 inline-block transition-all duration-300">{label}</span>
  </Link>
);

export default Navbar;