import { useState, useEffect, useRef } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const StarIcon = () => (
  <svg className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const TagIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const heroSlides = [
  {
    id: 1,
    title: "Welcome to ZAA MUR Business",
    subtitle: "Where Luxury Meets Commerce",
    description: "Pakistan's most premium B2B wholesale experience. Save time, money & hassle with white-glove service.",
    cta: "Create Free Account",
    ctaSecondary: "Explore Products",
    badge: "✦ EXCLUSIVE MEMBERSHIP",
    gradient: "from-[#0071CE] via-[#004F9F] to-[#001F5B]",
    accent: "#FFC220",
    image: "/images/hero-bg.jpg",
  },
  {
    id: 2,
    title: "Express Delivery",
    subtitle: "As Fast As 1 Hour",
    description: "From office supplies to groceries — get premium products delivered to your door with real-time tracking.",
    cta: "Shop Express Now",
    ctaSecondary: "Learn More",
    badge: "⚡ LIGHTNING FAST",
    gradient: "from-[#001F5B] via-[#0071CE] to-[#0090E0]",
    accent: "#FFC220",
    image: "/images/delivery-hero.jpg",
  },
  {
    id: 3,
    title: "Bulk Business Savings",
    subtitle: "Up to 40% Off",
    description: "Exclusive wholesale pricing for registered businesses. The more you buy, the more you save — guaranteed.",
    cta: "View Bulk Deals",
    ctaSecondary: "Register Business",
    badge: "💎 PREMIUM SAVINGS",
    gradient: "from-[#004F9F] via-[#0071CE] to-[#00A0E0]",
    accent: "#FFC220",
    image: "/images/grocery-bulk.jpg",
  },
];

const categories = [
  { name: "Office Supplies", icon: "🖊️", count: "2,400+ items", color: "from-blue-600 to-blue-800", image: "/images/office-supplies.jpg" },
  { name: "Technology", icon: "💻", count: "1,800+ items", color: "from-slate-700 to-slate-900", image: "/images/tech-products.jpg" },
  { name: "Cleaning & Janitorial", icon: "✨", count: "900+ items", color: "from-cyan-600 to-blue-700", image: "/images/cleaning-supplies.jpg" },
  { name: "Grocery & Pantry", icon: "🛒", count: "3,200+ items", color: "from-blue-700 to-indigo-900", image: "/images/grocery-bulk.jpg" },
  { name: "Furniture", icon: "🪑", count: "650+ items", color: "from-amber-700 to-yellow-900", image: "/images/office-supplies.jpg" },
  { name: "Safety & Health", icon: "🛡️", count: "1,100+ items", color: "from-green-700 to-teal-900", image: "/images/cleaning-supplies.jpg" },
];

const features = [
  { icon: <TruckIcon />, title: "1-Hour Express Delivery", desc: "Premium same-day delivery across Quetta with real-time tracking and white-glove handling.", color: "text-[#0071CE]" },
  { icon: <ShieldIcon />, title: "Verified Business Pricing", desc: "Exclusive wholesale rates only for verified businesses. Transparent pricing, zero hidden fees.", color: "text-[#004F9F]" },
  { icon: <TagIcon />, title: "Bulk Discount Engine", desc: "Dynamic pricing that rewards volume. Save up to 40% on bulk orders above threshold.", color: "text-[#FFC220]" },
  { icon: <UsersIcon />, title: "Dedicated Account Manager", desc: "Your personal ZAA MUR business concierge, available 6 days a week for premium support.", color: "text-[#0071CE]" },
];

const featuredProducts = [
  { name: "Executive Leather Notebook Set", price: "PKR 4,500", original: "PKR 6,200", rating: 4.9, reviews: 312, badge: "BESTSELLER", img: "📓" },
  { name: "Premium Wireless Headset Pro", price: "PKR 18,999", original: "PKR 25,000", rating: 4.8, reviews: 198, badge: "NEW ARRIVAL", img: "🎧" },
  { name: "Smart Office Chair Ergonomic", price: "PKR 42,000", original: "PKR 58,000", rating: 4.7, reviews: 87, badge: "HOT DEAL", img: "🪑" },
  { name: "Industrial Sanitizer 5L Pack", price: "PKR 2,800", original: "PKR 3,800", rating: 4.9, reviews: 521, badge: "BULK DEAL", img: "🧴" },
  { name: "4K Business Webcam Ultra", price: "PKR 12,500", original: "PKR 16,000", rating: 4.8, reviews: 143, badge: "TRENDING", img: "📷" },
  { name: "Bulk Copy Paper A4 (10 Ream)", price: "PKR 3,200", original: "PKR 4,400", rating: 4.6, reviews: 674, badge: "BESTSELLER", img: "📄" },
];

const testimonials = [
  { name: "Ahmed Raza", role: "CEO, TechVision Quetta", text: "ZAA MUR Business transformed our procurement. Same-day delivery and bulk pricing saves us 35% monthly.", avatar: "AR", stars: 5 },
  { name: "Fatima Baloch", role: "Operations Manager, Pearl Corp", text: "The most professional B2B platform in Balochistan. The account manager service is absolutely top-tier.", avatar: "FB", stars: 5 },
  { name: "Khalid Mengal", role: "Director, GreenLeaf Industries", text: "Unmatched quality and pricing. Our entire office runs on ZAA MUR supplies. Highly recommended!", avatar: "KM", stars: 5 },
];

const stats = [
  { value: "50,000+", label: "Products Available" },
  { value: "2,800+", label: "Business Clients" },
  { value: "98.7%", label: "Satisfaction Rate" },
  { value: "1 Hour", label: "Express Delivery" },
];

// ─── Components ───────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#001F5B] text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#FFC220]">
              <MapPinIcon />
              <span className="hidden sm:inline text-white/80">A1 City, Phase 1, Brewery Road Quetta, Balochistan</span>
            </span>
            <a href="tel:03442977259" className="flex items-center gap-1.5 text-white/80 hover:text-[#FFC220] transition-colors">
              <PhoneIcon />
              <span>03442977259</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-white/70 text-xs">
            <span className="hidden md:flex items-center gap-1">⚡ Express 1-Hour Delivery Available</span>
            <span className="text-[#FFC220] font-semibold cursor-pointer hover:underline">Sign In</span>
            <span>|</span>
            <span className="text-[#FFC220] font-semibold cursor-pointer hover:underline">Register</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-900/10" : "bg-white shadow-lg"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0071CE] to-[#001F5B] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-black text-lg tracking-tight">ZM</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFC220] rounded-full flex items-center justify-center">
                  <span className="text-[8px] font-bold text-[#001F5B]">B</span>
                </div>
              </div>
              <div>
                <div className="font-black text-xl text-[#001F5B] leading-none tracking-tight">ZAA MUR</div>
                <div className="text-[10px] text-[#0071CE] font-semibold tracking-[0.2em] uppercase">Business</div>
              </div>
            </div>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Search 50,000+ premium business products..."
                  className="w-full pl-5 pr-14 py-3.5 border-2 border-[#0071CE]/20 rounded-2xl text-sm focus:outline-none focus:border-[#0071CE] bg-slate-50 placeholder-slate-400 transition-all duration-300 focus:bg-white focus:shadow-lg focus:shadow-blue-500/10"
                />
                <button className="absolute right-1 top-1 bottom-1 px-4 bg-gradient-to-r from-[#0071CE] to-[#004F9F] rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center">
                  <SearchIcon />
                </button>
              </div>
            </div>

            {/* Nav actions */}
            <div className="flex items-center gap-4">
              <button className="hidden lg:flex items-center gap-2 text-sm font-semibold text-[#001F5B] hover:text-[#0071CE] transition-colors">
                <span>Products</span>
                <ChevronRightIcon />
              </button>
              <button className="relative p-2 rounded-xl hover:bg-blue-50 transition-all duration-300 group">
                <CartIcon />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FFC220] rounded-full text-[10px] font-black text-[#001F5B] flex items-center justify-center">{cartCount}</span>
              </button>
              <button
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0071CE] to-[#004F9F] text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-xl hover:bg-blue-50">
                {menuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Category nav */}
          <div className="hidden md:flex items-center gap-8 pb-3 overflow-x-auto scrollbar-hide">
            {["Office Supplies", "Technology", "Cleaning", "Grocery & Pantry", "Furniture", "Safety & Health", "Breakroom", "Paper & Print"].map((cat) => (
              <button key={cat} className="text-sm font-medium text-slate-600 hover:text-[#0071CE] whitespace-nowrap transition-colors pb-1 border-b-2 border-transparent hover:border-[#0071CE]">
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-6 space-y-4 shadow-2xl">
            <div className="relative">
              <input type="text" placeholder="Search products..." className="w-full pl-4 pr-12 py-3 border-2 border-[#0071CE]/20 rounded-xl text-sm focus:outline-none focus:border-[#0071CE] bg-slate-50" />
              <button className="absolute right-1 top-1 bottom-1 px-3 bg-[#0071CE] rounded-lg text-white flex items-center">
                <SearchIcon />
              </button>
            </div>
            {["Office Supplies", "Technology", "Cleaning", "Grocery & Pantry", "Furniture"].map((cat) => (
              <div key={cat} className="flex items-center justify-between py-2 border-b border-slate-100 text-sm font-medium text-slate-700">
                <span>{cat}</span>
                <ChevronRightIcon />
              </div>
            ))}
            <button className="w-full py-3 bg-gradient-to-r from-[#0071CE] to-[#004F9F] text-white font-bold rounded-xl">Get Started Free</button>
          </div>
        )}
      </nav>
    </>
  );
}

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const next = (current + 1) % heroSlides.length;
    timerRef.current = setTimeout(() => {
      goTo(next);
    }, 5500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current]);

  const slide = heroSlides[current];

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "90vh" }}>
      {/* BG Image with overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${animating ? "opacity-0" : "opacity-100"}`}
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-85`} />

      {/* Decorative patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-[#FFC220]/10 blur-2xl" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-white/5 blur-xl" />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ minHeight: "90vh" }}>
        <div className={`max-w-3xl transition-all duration-500 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC220]/20 border border-[#FFC220]/40 text-[#FFC220] text-xs font-bold tracking-widest mb-6">
            {slide.badge}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {slide.title}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FFC220] mb-6">{slide.subtitle}</h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl leading-relaxed">{slide.description}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#FFC220] text-[#001F5B] font-black rounded-2xl text-base hover:bg-yellow-300 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/30 hover:-translate-y-1">
              {slide.cta}
              <ArrowRightIcon />
            </button>
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl text-base border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
              {slide.ctaSecondary}
            </button>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-[#FFC220]">{stat.value}</div>
                <div className="text-xs text-white/60 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-3 bg-[#FFC220]" : "w-3 h-3 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      <button
        onClick={() => goTo((current - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={() => goTo((current + 1) % heroSlides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300"
      >
        <ChevronRightIcon />
      </button>
    </section>
  );
}

function StatsBar() {
  return (
    <div className="bg-gradient-to-r from-[#FFC220] via-yellow-400 to-[#FFC220] py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-yellow-500/30">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4 py-1">
              <div className="text-2xl md:text-3xl font-black text-[#001F5B]">{s.value}</div>
              <div className="text-xs font-semibold text-[#001F5B]/70 tracking-wider uppercase mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0071CE]/10 text-[#0071CE] text-xs font-bold tracking-widest mb-4">
            ✦ SHOP BY CATEGORY
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#001F5B] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Everything Your Business Needs
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">Premium products across every category, curated for the modern Balochistan enterprise.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
              </div>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <h3 className="text-white font-black text-xl leading-tight">{cat.name}</h3>
                <p className="text-white/70 text-sm mt-1">{cat.count}</p>
                <div className="mt-3 flex items-center gap-2 text-[#FFC220] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>Shop Now</span>
                  <ChevronRightIcon />
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#0071CE]/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#FFC220]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC220]/20 text-[#001F5B] text-xs font-bold tracking-widest mb-4">
            ✦ WHY CHOOSE ZAA MUR
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#001F5B] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Luxury Business Advantage
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">Designed for forward-thinking businesses that refuse to compromise on quality or efficiency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group p-8 rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-100 hover:border-[#0071CE]/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className={`${f.color} mb-6 group-hover:scale-110 transition-transform duration-300 inline-block`}>
                {f.icon}
              </div>
              <h3 className="font-black text-[#001F5B] text-lg mb-3 leading-tight">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>

              <div className="mt-6 flex items-center gap-1 text-[#0071CE] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <ChevronRightIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryBanner() {
  return (
    <section className="relative overflow-hidden py-0 my-0">
      <div
        className="relative min-h-72 flex items-center"
        style={{ backgroundImage: "url(/images/delivery-hero.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B]/95 via-[#0071CE]/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC220]/20 border border-[#FFC220]/40 text-[#FFC220] text-xs font-bold tracking-widest mb-5">
              ⚡ EXPRESS DELIVERY
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Delivered to Your Door<br />
              <span className="text-[#FFC220]">In Just 1 Hour</span>
            </h2>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              From hydration stations to office tech — ZAA MUR's premium express network covers all of Quetta with real-time GPS tracking.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-3 px-7 py-4 bg-[#FFC220] text-[#001F5B] font-black rounded-2xl hover:bg-yellow-300 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/30 hover:-translate-y-1">
                Shop Express Now
                <ArrowRightIcon />
              </button>
              <button className="px-7 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                Track My Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0071CE]/10 text-[#0071CE] text-xs font-bold tracking-widest mb-4">
              ✦ FEATURED PRODUCTS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#001F5B]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Curated For Excellence
            </h2>
          </div>
          <button className="flex items-center gap-2 text-[#0071CE] font-semibold hover:gap-3 transition-all duration-300">
            View All Products <ChevronRightIcon />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, i) => (
            <div
              key={product.name}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Product image area */}
              <div className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 h-52 flex items-center justify-center overflow-hidden">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-500">{product.img}</span>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${product.badge === "BESTSELLER" ? "bg-[#0071CE] text-white" : product.badge === "NEW ARRIVAL" ? "bg-emerald-500 text-white" : product.badge === "HOT DEAL" ? "bg-red-500 text-white" : product.badge === "TRENDING" ? "bg-purple-500 text-white" : "bg-[#FFC220] text-[#001F5B]"}`}>
                    {product.badge}
                  </span>
                </div>
                <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#0071CE] hover:text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Product info */}
              <div className="p-5">
                <h3 className="font-bold text-[#001F5B] mb-2 leading-tight group-hover:text-[#0071CE] transition-colors">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  <span className="text-xs text-slate-400 ml-1">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black text-[#001F5B]">{product.price}</span>
                    <span className="text-sm text-slate-400 line-through ml-2">{product.original}</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-[#0071CE] to-[#004F9F] text-white text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#001F5B] via-[#0071CE] to-[#004F9F] relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#FFC220]/10 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid2)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC220]/20 border border-[#FFC220]/30 text-[#FFC220] text-xs font-bold tracking-widest mb-4">
            ✦ CLIENT VOICES
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Trusted by Quetta's Best
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">Businesses across Balochistan rely on ZAA MUR for their premium procurement needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.stars)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-white/85 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFC220] to-yellow-500 flex items-center justify-center font-black text-[#001F5B] text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-white/50 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0071CE]/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC220]/20 text-[#001F5B] text-xs font-bold tracking-widest mb-6">
          ✦ STAY AHEAD
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#001F5B] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Exclusive Deals for Members
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-10">
          Join 2,800+ Quetta businesses receiving weekly curated deals, early access to new arrivals, and exclusive member-only discounts.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-700 font-bold text-lg">
            ✓ Welcome to ZAA MUR Business! Check your inbox.
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <MailIcon />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your business email address"
                className="w-full pl-12 pr-5 py-4 border-2 border-[#0071CE]/20 rounded-2xl focus:outline-none focus:border-[#0071CE] bg-slate-50 text-sm transition-all"
              />
            </div>
            <button
              onClick={() => email && setSubmitted(true)}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0071CE] to-[#004F9F] text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Subscribe Free
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#001F5B] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0071CE] to-[#FFC220] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-lg">ZM</span>
                </div>
              </div>
              <div>
                <div className="font-black text-2xl leading-none tracking-tight">ZAA MUR</div>
                <div className="text-[10px] text-[#FFC220] font-semibold tracking-[0.2em] uppercase">Business</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Pakistan's most premium B2B wholesale platform. Serving businesses across Balochistan with luxury-grade products and white-glove service.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPinIcon />
                <span>A1 City, Phase 1, Brewery Road<br />Quetta, Balochistan</span>
              </div>
              <a href="tel:03442977259" className="flex items-center gap-3 text-sm text-white/60 hover:text-[#FFC220] transition-colors">
                <PhoneIcon />
                <span>03442977259</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MailIcon />
                <span>support@zaamur.com.pk</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Products", links: ["Office Supplies", "Technology", "Cleaning", "Grocery & Pantry", "Furniture", "Safety & Health"]
            },
            {
              title: "Business", links: ["Create Account", "Business Pricing", "Bulk Orders", "Account Manager", "Corporate Plans"]
            },
            {
              title: "Support", links: ["Track Your Order", "Returns Policy", "Help Center", "Contact Us", "Delivery Areas"]
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-black text-sm tracking-wider uppercase text-[#FFC220] mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/55 text-sm hover:text-white transition-colors hover:pl-1 inline-block duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} ZAA MUR Business. All rights reserved. A1 City, Phase 1, Brewery Road, Quetta, Balochistan.
            </p>
            <div className="flex items-center gap-6 text-white/40 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center gap-3">
              {["FB", "TW", "IN", "YT"].map((s) => (
                <div key={s} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white/60 hover:bg-[#0071CE] hover:text-white transition-all duration-300 cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#0071CE] via-[#FFC220] to-[#0071CE]" />
    </footer>
  );
}

function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}>
      <a href="tel:03442977259" className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-[#0071CE] to-[#004F9F] text-white font-bold rounded-2xl shadow-2xl shadow-blue-900/40 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
        <div className="w-8 h-8 rounded-xl bg-[#FFC220] flex items-center justify-center">
          <PhoneIcon />
        </div>
        <div className="text-left">
          <div className="text-[10px] text-white/60 leading-none">Call Now</div>
          <div className="text-sm font-black">03442977259</div>
        </div>
      </a>
    </div>
  );
}

function BenefitsBanner() {
  return (
    <div className="bg-white border-y border-slate-100 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "⚡", title: "1-Hour Delivery", sub: "Express across Quetta" },
            { icon: "💎", title: "Premium Quality", sub: "Curated business products" },
            { icon: "🔒", title: "Secure Payments", sub: "100% safe & encrypted" },
            { icon: "🤝", title: "Dedicated Support", sub: "Your personal manager" },
          ].map((b) => (
            <div key={b.title} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-11 h-11 rounded-2xl bg-[#0071CE]/10 flex items-center justify-center text-xl group-hover:bg-[#0071CE] transition-colors duration-300 flex-shrink-0">
                {b.icon}
              </div>
              <div>
                <div className="font-bold text-[#001F5B] text-sm">{b.title}</div>
                <div className="text-slate-400 text-xs">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <HeroSlider />
      <StatsBar />
      <BenefitsBanner />
      <CategoryGrid />
      <FeaturesSection />
      <DeliveryBanner />
      <FeaturedProducts />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
