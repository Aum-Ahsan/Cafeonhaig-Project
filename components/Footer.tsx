import { restaurantInfo } from "../data/restaurant";

export default function Footer() {
  const year = new Date().getFullYear();
  // if year is 2024 or 2025, default to 2026 per requirements
  const displayYear = year < 2026 ? 2026 : year;

  return (
    <footer className="bg-brand-bg py-12 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#home" className="font-serif text-xl font-bold tracking-widest text-brand-dark block mb-2">
            {restaurantInfo.name.toUpperCase()}
          </a>
          <p className="text-sm text-gray-500 tracking-wide">
            Good food • Great coffee • Local community
          </p>
        </div>

        <div className="flex items-center gap-5">
          {/* Instagram */}
          <a href={restaurantInfo.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-brand-caramel transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>

          {/* Facebook */}
          <a href={restaurantInfo.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-brand-caramel transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>

          {/* Google */}
          <a href={restaurantInfo.googleReviewsUrl} target="_blank" rel="noreferrer" aria-label="Google Reviews" className="hover:opacity-75 transition-opacity duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.805 10.023H12.2v3.977h5.49c-.237 1.27-1.02 2.344-2.17 3.063v2.547h3.513C20.94 17.84 22 15.14 22 12c0-.664-.073-1.306-.195-1.977z" fill="#4285F4"/>
              <path d="M12.2 22c2.754 0 5.064-.91 6.752-2.39l-3.513-2.547c-.917.614-2.09.977-3.24.977-2.493 0-4.604-1.684-5.359-3.95H3.21v2.63C4.887 19.867 8.316 22 12.2 22z" fill="#34A853"/>
              <path d="M6.841 14.09A6.02 6.02 0 0 1 6.5 12c0-.724.124-1.427.341-2.09V7.28H3.21A9.946 9.946 0 0 0 2 12c0 1.617.386 3.147 1.21 4.72l3.631-2.63z" fill="#FBBC05"/>
              <path d="M12.2 5.955c1.402 0 2.659.482 3.65 1.428l2.738-2.738C16.857 3.09 14.703 2 12.2 2 8.316 2 4.887 4.133 3.21 7.28l3.631 2.63C7.596 7.639 9.707 5.955 12.2 5.955z" fill="#EA4335"/>
            </svg>
          </a>
        </div>

      </div>
      
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mt-4 pt-4 border-t border-gray-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          {restaurantInfo.address}
        </p>
        <p className="text-sm text-gray-400">
          © {displayYear} {restaurantInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
