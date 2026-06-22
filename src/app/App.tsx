import { useState } from "react";
import {
  Shield, Heart, Star, Check, ChevronDown, ChevronRight,
  Phone, Mail, MapPin, Users, Activity, Stethoscope,
  Clock, Globe, ArrowRight, Baby, Zap, Award,
  Building2, HeartPulse, Leaf, Eye, Brain, Ambulance,
  Pill, Microscope, Home, Sparkles, TrendingUp,
  CheckCircle2, X, Menu, Facebook, Twitter, Instagram,
  Linkedin, Youtube, ChevronUp, LifeBuoy, BadgeCheck,
  CircleDollarSign, Syringe, FlaskConical, Bone,
  ScanLine, Dna, HeartHandshake, ShieldCheck,
  MonitorHeart, Smile, Star as StarIcon,
  Plus,
  Flame
} from "lucide-react";

import familyHero from "../assets/family-hero.png";
import aaLogo from "../assets/aa-logo.png";
import essentialBrochure from "../assets/essential-cover.pdf";
import acrossLogo from "../assets/acrossassist-logo.png";
import essentialPdf from "../assets/essential-policy.pdf";
import plusPdf from "../assets/plus-policy.pdf";
import comprehensivePdf from "../assets/comprehensive-policy.pdf";
import premiumPdf from "../assets/premium-policy.pdf";

type Screen = "home" | "essential" | "plus" | "comprehensive" | "premium" | "design-system";


const brochures = {
  essential: essentialPdf,
  plus: plusPdf,
  comprehensive: comprehensivePdf,
  premium: premiumPdf,
};

// ─── Shared helpers ────────────────────────────────────────────────────────────

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const ORANGE = "#FF7A00";
const BLUE = "#0B3B8F";
const GREEN = "#16a34a";
const PURPLE = "#7c3aed";

// ─── Navbar ────────────────────────────────────────────────────────────────────

function Navbar({ screen, setScreen }: { screen: Screen; setScreen: (s: Screen) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks: { label: string; screen?: Screen }[] = [
    { label: "Plans", screen: "home" },
    { label: "Claims" },
    { label: "Support" },
    { label: "Design System", screen: "design-system" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <button
  onClick={() => setScreen("home")}
  className="flex justify-center items-center w-full"
>
  <img
    src={aaLogo}
    alt="Across Assist"
    className="h-14 w-auto"
  />
</button>

        {/* Desktop nav */}
        {/* <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => link.screen && setScreen(link.screen)}
              className="text-sm font-medium text-slate-600 hover:text-[#FF7A00] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div> */}

        {/* CTA */}
        {/* <div className="hidden lg:flex items-center gap-3">
          <button className="text-sm font-semibold px-5 py-2 rounded-xl border-2 transition-all hover:bg-slate-50"
            style={{ borderColor: BLUE, color: BLUE }}>
            Login
          </button>
          <button
            onClick={() => setScreen("home")}
            className="text-sm font-semibold px-5 py-2 rounded-xl text-white transition-all hover:opacity-90 shadow-md"
            style={{ background: `linear-gradient(135deg, ${ORANGE}, #ff9a3c)` }}
          >
            Get a Quote
          </button>
        </div> */}

        {/* Mobile menu */}
        {/* <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button> */}
      </div>

      {/* {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border px-8 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => { link.screen && setScreen(link.screen); setMenuOpen(false); }}
              className="text-sm font-medium text-slate-700 text-left py-2"
            >
              {link.label}
            </button>
          ))}
          <button className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white w-full"
            style={{ background: ORANGE }}>
            Get a Quote
          </button>
        </div>
      )} */}
    </nav>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────

function Footer({ setScreen }: { setScreen: (s: Screen) => void }) {
  const cols = [
    {
      title: "About",
      links: ["Our Story", "Mission & Vision", "Leadership Team", "Media & Press", "Careers"],
    },
    {
      title: "Plans",
      links: ["Essential Cover", "Plus Cover", "Comprehensive Cover", "Premium Cover", "Compare Plans"],
    },
    {
      title: "Claims",
      links: ["File a Claim", "Track Claim", "Cashless Network", "Reimbursement", "Claim FAQs"],
    },
    {
      title: "Support",
      links: ["Help Center", "Live Chat", "Call Us", "Email Support", "Hospital Locator"],
    },
  ];

  return (
    <footer style={{ background: BLUE }} className="text-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
                <img
                  src={acrossLogo}
                  alt="Across Assist"
                  className="h-10 w-10 rounded-full object-cover border border-slate-200"
                  
                />
              <div>
                <div className="text-[15px] font-bold">Across Assist</div>
                <div className="text-[11px] text-white/60">Health & Wellness</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Protecting families across India with comprehensive health and wellness coverage.
            </p>
            {/* <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <button key={i} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div> */}
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <button className="text-sm text-white/65 hover:text-white transition-colors text-left">{link}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">© 2026 Across Assist. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Grievance"].map((item) => (
              <button key={item} className="text-xs text-white/50 hover:text-white/80 transition-colors">{item}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What is the waiting period for pre-existing diseases?",
    a: "Pre-existing diseases are covered after a waiting period of 2 years from the policy start date.",
  },
  {
    q: "Is there a waiting period for maternity benefits?",
    a: "Yes. Maternity benefits become available after a waiting period of 9 months.",
  },
  {
    q: "What maternity benefits are covered?",
    a: "Normal delivery expenses are covered up to ₹35,000 and C-section expenses are covered up to ₹50,000.",
  },
  {
    q: "Are pre-natal and baby day one expenses covered?",
    a: "No. Pre-natal cover and baby day one cover are not included under this plan.",
  },
  {
    q: "Are AYUSH treatments covered?",
    a: "Yes. AYUSH treatments are covered up to 50% of the Sum Insured.",
  },
  {
    q: "Is domiciliary hospitalization covered?",
    a: "Yes. Domiciliary hospitalization is covered up to 30% of the Sum Insured.",
  },
 {
    q: "What wellness benefits are included?",
    a: "The plan includes unlimited doctor consultations, pharmacy discounts up to 15%, diagnostic discounts up to 30%, and 2 nutrition sessions annually.",
  },
   {
    q: "What is the room rent eligibility?",
    a: "Normal room charges are covered up to 2% of the Sum Insured and ICU charges up to 4% of the Sum Insured.",
  },
   {
    q: "Are advanced treatments covered?",
    a: "Yes. Stem Cell Therapy, Robotic Surgery, Gamma Knife/Cyberknife Surgery, Remicade/Avastin Injection, and Oral Chemotherapy are covered up to the Sum Insured.",
  },
   {
    q: "Is emergency ambulance service covered?",
    a: "Yes. Emergency ambulance expenses are covered up to ₹2,500 per event.",
  },
 {
    q: "What is the entry age for this plan?",
    a: "Adults aged 18 to 65 years are eligible for coverage.",
  },
  {
    q: "Does the plan include Critical Illness Benefit Cover?",
    a: "Yes. Critical Illness Benefit Cover is included under the plan.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 bg-[#f8faff]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#fff4ea", color: ORANGE }}>
            Got Questions?
          </span>
          <h2 className="text-3xl font-bold mb-3" style={{ color: BLUE }}>Frequently Asked Questions</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Everything you need to know about your health coverage</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-border transition-all">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-semibold text-[15px] text-slate-800">{faq.q}</span>
                <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all"
                  style={{ background: open === i ? ORANGE : "#f1f5f9" }}>
                  {open === i
                    ? <ChevronUp className="w-4 h-4 text-white" />
                    : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Comparison Table ─────────────────────────────────────────────────────────

const comparisonRows = [
  { feature: "Hospitalization Cover", essential: "₹3 Lakh", plus: "₹5 Lakh", comprehensive: "₹7 Lakh", premium: "₹10 Lakh" },
  { feature: "Annual Premium Starting From", essential: "₹2,999", plus: "₹3,499", comprehensive: "₹3,699", premium: "₹4,299" },
  { feature: "Best For", essential: "Individuals", plus: "Young Families", comprehensive: "Growing Families", premium: "Maximum Protection" },
  { feature: "Coverage Level", essential: "Essential", plus: "Enhanced", comprehensive: "Comprehensive", premium: "Premium" },
  { feature: "Financial Protection", essential: "Good", plus: "Better", comprehensive: "Best Value", premium: "Highest" },
  { feature: "Medical Expense Buffer", essential: "Basic", plus: "Moderate", comprehensive: "Strong", premium: "Maximum" },
  { feature: "Wellness Benefits", essential: true, plus: true, comprehensive: true, premium: true },
  { feature: "Critical Illness Benefit", essential: true, plus: true, comprehensive: true, premium: true },
  { feature: "Maternity Benefit", essential: true, plus: true, comprehensive: true, premium: true },
  { feature: "Advanced Treatments", essential: true, plus: true, comprehensive: true, premium: true },
];

function ComparisonCell({ value, color }: { value: string | boolean; color: string }) {
  if (value === true) return <CheckCircle2 className="w-5 h-5 mx-auto" style={{ color }} />;
  if (value === false) return <X className="w-4 h-4 mx-auto text-slate-300" />;
  return <span className="text-sm font-semibold text-slate-700">{value}</span>;
}

function ComparisonTable({ setScreen }: { setScreen: (s: Screen) => void }) {
  const plans = [
    { label: "Essential", color: BLUE, screen: "essential" as Screen },
    { label: "Plus", color: ORANGE, screen: "plus" as Screen },
    { label: "Comprehensive", color: GREEN, screen: "comprehensive" as Screen },
    { label: "Premium", color: PURPLE, screen: "premium" as Screen },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#f0f4ff", color: BLUE }}>
            Plan Comparison
          </span>
          <h2 className="text-3xl font-bold mb-3" style={{ color: BLUE }}>Find the Right Fit</h2>
          <p className="text-slate-500">Side-by-side comparison of all Across Assist plans</p>
        </div>

        <div className="overflow-x-auto rounded-[24px] border border-border shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="py-5 px-6 text-left text-sm font-semibold text-slate-500 w-48">Coverage Feature</th>
                {plans.map((p) => (
                  <th key={p.label} className="py-5 px-6 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: p.color + "20" }}>
                        <Shield className="w-4 h-4" style={{ color: p.color }} />
                      </div>
                      <span className="text-sm font-bold" style={{ color: p.color }}>{p.label}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="py-4 px-6 text-sm font-medium text-slate-700">{row.feature}</td>
                  {plans.map((p) => (
                    <td key={p.label} className="py-4 px-6 text-center">
                      <ComparisonCell value={row[p.label.toLowerCase() as keyof typeof row]} color={p.color} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-slate-50">
                <td className="py-4 px-6" />
                {plans.map((p) => (
                  <td key={p.label} className="py-4 px-6 text-center">
                    <button
                      onClick={() => setScreen(p.screen)}
                      className="text-xs font-semibold px-4 py-2 rounded-xl text-white transition-all hover:opacity-90"
                      style={{ background: p.color }}
                    >
                      View Plan →
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─── Home Screen ───────────────────────────────────────────────────────────────

const planCards = [
  {
    id: "essential" as Screen,
    name: "Essential Cover",
    tagline: "₹3 Lakh Hospitalization Cover",
    color: BLUE,
    lightBg: "#f0f4ff",
    badge: null,
    icon: Shield,
    description: "Affordable entry-level protection.",
    benefits: ["Wellness Benefits", "Critical Illness Cover", "Advanced Treatments"],
  },
  {
    id: "plus" as Screen,
    name: "Plus Cover",
    tagline: "₹5 Lakh Hospitalization Cover",
    color: ORANGE,
    lightBg: "#fff4ea",
    badge: "Most Popular",
    icon: Users,
    description: "More coverage for added peace of mind.",
    benefits: ["Wellness Benefits", "Critical Illness Cover", "Advanced Treatments"],
  },
  {
    id: "comprehensive" as Screen,
    name: "Comprehensive Cover",
    tagline: "₹7 Lakh Hospitalization Cover",
    color: GREEN,
    lightBg: "#f0fdf4",
    badge: "Best Value",
    icon: HeartPulse,
    description: "Higher Protection at Exceptional value.",
    benefits: ["Wellness Benefits", "Critical Illness Cover", "Advanced Treatments"],
  },
  {
    id: "premium" as Screen,
    name: "Premium Cover",
    tagline: "₹10 Lakh Hospitalization Cover",
    color: PURPLE,
    lightBg: "#faf5ff",
    badge: "Maximum Protection",
    icon: Award,
    description: "Maximum Protection with the Highest cover.",
    benefits: [ "Wellness Benefits", "Critical Illness Cover", "Advanced Treatments"],
  },
];

const trustBadges = [
  { icon: Users, label: "5000+", sub: "Families Protected" },
  { icon: Building2, label: "Network", sub: "Cashless Hospitals" },
  { icon: Clock, label: "24x7", sub: "Assistance" },
  { icon: Globe, label: "Pan India", sub: "Coverage" },
];

const whyCards = [
  { icon: Building2, title: "All-in-One Protection", desc: "Health, wellness and hospitalization coverage in a single plan." },
  { icon: Leaf, title: "Wellness Benefits Included", desc: "Doctor consultations, diagnostics, pharmacy discounts, and nutrition sessions." },
  { icon: HeartPulse, title: "Mordern Treatment Coverage", desc: "Protection for advanced and specialized medical treatments." },
  { icon: Clock, title: "Flexible Coverage Choices", desc: "Choose the coverage amount that fits your needs and budget." },
  { icon: Flame, title: "Family Care Benefits", desc: "Includes maternity and critical illness-related benefits." },
  { icon: Globe, title: "Affordable Premiums", desc: "Comprehensive protection at a competitive annual cost." },
];

// const scenarios = [
//   {
//     icon: Ambulance,
//     title: "Emergency Hospitalization",
//     name: "Rajesh Sharma, 38 — Mumbai",
//     story: "Rajesh suffered a sudden cardiac event requiring emergency angioplasty. His Family Cover settled the entire ₹4.2 lakh bill cashlessly.",
//     saved: "₹4.2 Lakh",
//     tag: "Cardiac Care",
//     color: ORANGE,
//     img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=250&fit=crop&auto=format",
//   },
//   {
//     icon: Baby,
//     title: "Maternity & Newborn Care",
//     name: "Priya & Anil Mehta — Pune",
//     story: "Priya's Comprehensive Plan covered ₹1.8 lakh in C-section delivery costs and her newborn's first-year vaccinations — no out-of-pocket spend.",
//     saved: "₹1.8 Lakh",
//     tag: "Maternity",
//     color: GREEN,
//     img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
//   },
//   {
//     icon: HeartPulse,
//     title: "Critical Illness Diagnosis",
//     name: "Arjun Nair, 45 — Bengaluru",
//     story: "Diagnosed with Stage 2 kidney failure, Arjun received a ₹7 lakh lump-sum from his Premium Cover, funding treatment and protecting family savings.",
//     saved: "₹7 Lakh",
//     tag: "Critical Illness",
//     color: PURPLE,
//     img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=250&fit=crop&auto=format",
//   },
// ];

// const testimonials = [
//   {
//     name: "Sunita Kapoor",
//     location: "Delhi",
//     rating: 5,
//     text: "The claim process was seamless. Within 48 hours of discharge, everything was settled. Across Assist truly puts families first.",
//     plan: "Family Cover",
//     avatar: "SK",
//     color: ORANGE,
//   },
//   {
//     name: "Dr. Vikram Patel",
//     location: "Ahmedabad",
//     rating: 5,
//     text: "As a doctor, I recommend Across Assist to my patients. The network coverage and AYUSH integration is exceptional.",
//     plan: "Comprehensive Cover",
//     avatar: "VP",
//     color: GREEN,
//   },
//   {
//     name: "Meena Iyer",
//     location: "Chennai",
//     rating: 5,
//     text: "Wellness benefits alone paid for my annual gym membership and dietitian sessions. This is more than just insurance.",
//     plan: "Premium Cover",
//     avatar: "MI",
//     color: PURPLE,
//   },
// ];

function HomeScreen({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[620px] flex items-center"
        style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #1a4fa8 50%, #0d2f6e 100%)` }}>
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
            style={{ background: ORANGE, filter: "blur(60px)" }} />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full opacity-10"
            style={{ background: "#60a5fa", filter: "blur(40px)" }} />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left */}
            <div>
              {/* <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20"
                style={{ background: "rgba(255,122,0,0.15)", color: "#ffb46b" }}>
                <ShieldCheck className="w-3.5 h-3.5" /> IRDAI Certified · Trusted by 5000+ Families
              </span> */}
              <h1 className="text-5xl font-bold text-white leading-tight mb-5">
                Health Protection<br />
                <span style={{ color: "#ffb46b" }}>Made Simple</span>
              </h1>
              <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-md">
                Comprehensive Health &amp; Wellness Coverage for Individuals and Families — cashless, nationwide, always there.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => {
                    document.getElementById("plans-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-7 py-3.5 rounded-2xl text-white font-bold text-base shadow-xl hover:opacity-90 transition-all flex items-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${ORANGE}, #ff9a3c)` }}
                >
                  Explore Plans <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-7 py-3.5 rounded-2xl font-bold text-base border-2 border-white/30 text-white hover:bg-white/10 transition-all">
                  Know More
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {trustBadges.map((b) => (
                  <div key={b.label} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2.5">
                    <b.icon className="w-4 h-4 flex-shrink-0" style={{ color: "#ffb46b" }} />
                    <div>
                      <div className="text-xs font-bold text-white leading-none">{b.label}</div>
                      <div className="text-[10px] text-white/60 leading-none mt-0.5">{b.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — family image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-[420px]">
                <img
                  src={familyHero}
                  alt="Happy healthy Indian family"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#fff4ea" }}>
                  <Shield className="w-5 h-5" style={{ color: ORANGE }} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Sum Assured up to</div>
                  <div className="text-lg font-bold" style={{ color: BLUE }}>₹10 Lakh</div>
                </div>
              </div>

              {/* <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" style={{ color: GREEN }} />
                <span className="text-xs font-semibold text-slate-700">Claim Settled in 48h</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── Plan Cards ── */}
      <section id="plans-section" className="py-20 bg-[#f8faff]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: "#fff4ea", color: ORANGE }}>
              Choose Your Plan
            </span>
            <h2 className="text-3xl font-bold mb-3" style={{ color: BLUE }}>Choose Your Coverage Amount</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Choose the hospitalization coverage amount that best suits your needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {planCards.map((plan) => (
              <div key={plan.id}
                className="relative bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-border">
                {/* Top color band */}
                <div className="h-2 w-full" style={{ background: plan.color }} />

                {plan.badge && (
                  <div className="absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full text-white shadow"
                    style={{ background: plan.color }}>
                    {plan.badge}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: plan.lightBg }}>
                    <plan.icon className="w-6 h-6" style={{ color: plan.color }} />
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: plan.color }}>
                    {plan.tagline}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-800">{plan.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{plan.description}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 flex-shrink-0" style={{ color: plan.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() =>{ setScreen(plan.id);
                      window.scrollTo(0,0);
                      }
                    }
                    className="w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ background: plan.color, color: "#fff" }}
                  >
                    View Plan <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <ComparisonTable setScreen={setScreen} />

      {/* ── Why Across Assist ── */}
      <section className="py-20 bg-[#f8faff]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: "#f0f4ff", color: BLUE }}>
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold mb-3" style={{ color: BLUE }}>Why Across Assist?</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Built around you — not just your policy number.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card) => (
              <div key={card.title} className="bg-white rounded-[24px] p-7 shadow-sm border border-border hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                  style={{ background: "#fff4ea" }}>
                  <card.icon className="w-6 h-6" style={{ color: ORANGE }} />
                </div>
                <h3 className="text-base font-bold mb-2 text-slate-800">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Protection Scenarios ── */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: "#fff4ea", color: ORANGE }}>
              Real Stories
            </span>
            <h2 className="text-3xl font-bold mb-3" style={{ color: BLUE }}>Real-Life Protection Scenarios</h2>
            <p className="text-slate-500 max-w-xl mx-auto">See how Across Assist protected real families in their most vulnerable moments.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {scenarios.map((s) => (
              <div key={s.title} className="rounded-[24px] overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <div className="relative h-48 bg-slate-100">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, rgba(0,0,0,0.6), transparent)` }} />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full text-white" style={{ background: s.color }}>
                      {s.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-base font-bold text-slate-800 mb-1">{s.title}</h3>
                  <div className="text-xs font-semibold mb-3" style={{ color: s.color }}>{s.name}</div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{s.story}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-slate-500">Amount Covered</span>
                    <span className="text-xl font-bold" style={{ color: s.color }}>{s.saved}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Testimonials ── */}
      {/* <section className="py-20" style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #1a4fa8 100%)` }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-white/20"
              style={{ background: "rgba(255,122,0,0.15)", color: "#ffb46b" }}>
              Customer Love
            </span>
            <h2 className="text-3xl font-bold text-white mb-3">Trusted by Thousands of Families</h2>
            <p className="text-white/60 max-w-xl mx-auto">Real experiences from people who count on Across Assist every day.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 backdrop-blur rounded-[24px] p-7 border border-white/15">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" style={{ color: "#ffb46b" }} />
                  ))}
                </div>
                <p className="text-white/85 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: t.color }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-white/50">{t.location} · {t.plan}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="rounded-[32px] p-12 text-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${ORANGE} 0%, #ff9a3c 100%)` }}>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3 relative">Ready to Protect What Matters Most?</h2>
            <p className="text-white/80 mb-8 relative max-w-md mx-auto">
              Join 5,000+ families who sleep peacefully knowing they're covered. Get your personalized plan in under 5 minutes.
            </p>
            <div className="flex items-center justify-center gap-4 relative">
              <button
                type="button"
                onClick={() => {
                  window.location.hash = "plans-section";
                }}
                className="px-8 py-3.5 bg-white rounded-2xl font-bold text-base hover:shadow-lg transition-all"
              >
                Explore Plans
              </button>
              <button className="px-8 py-3.5 rounded-2xl font-bold text-base border-2 border-white text-white hover:bg-white/10 transition-all">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


// ─── Coverage Donut Chart (SVG) ────────────────────────────────────────────────

function CoverageDonut({ themeColor, segments }: {
  themeColor: string;
  segments: { label: string; pct: number; color: string }[];
}) {
  const cx = 150, cy = 150, r = 100, sw = 32;
  const circ = 2 * Math.PI * r;
  let cumPct = 0;
  const gap = 2;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10">
      <div className="relative flex-shrink-0">
        <svg width="300" height="300" viewBox="0 0 300 300">
          {segments.map((seg, i) => {
            const dashLen = ((seg.pct / 100) * circ) - gap;
            const dashOffset = -(cumPct / 100) * circ + circ / 4;
            cumPct += seg.pct;
            return (
              <circle
                key={i}
                cx={cx} cy={cy} r={r}
                fill="none"
                stroke={seg.color}
                strokeWidth={sw}
                strokeDasharray={`${dashLen} ${circ - dashLen}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
              />
            );
          })}
          <circle cx={cx} cy={cy} r={r - sw / 2 - 8} fill="white" />
          <text x={cx} y={cy - 10} textAnchor="middle" fontSize="13" fontWeight="600" fill="#64748b" fontFamily="Poppins">
            Full
          </text>
          <text x={cx} y={cy + 10} textAnchor="middle" fontSize="13" fontWeight="600" fill="#64748b" fontFamily="Poppins">
            Coverage
          </text>
          <text x={cx} y={cy + 28} textAnchor="middle" fontSize="11" fill="#94a3b8" fontFamily="Poppins">
            Snapshot
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-1 gap-3 flex-1">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: seg.color }} />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-slate-700">{seg.label}</span>
                <span className="text-xs font-bold" style={{ color: seg.color }}>{seg.pct}%</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${seg.pct}%`, background: seg.color }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Plan Detail Page (reusable) ───────────────────────────────────────────────

interface PlanConfig {
  id: Screen;
  name: string;
  sumAssured: string;
  subtitle: string;
  badge: string | null;
  themeColor: string;
  lightBg: string;
  coverageSegments: { label: string; pct: number; color: string }[];
  whatsCovers: { icon: React.ElementType; title: string; desc: string }[];
  additionalCovers: { icon: React.ElementType; title: string; desc: string }[];
  pricing: { label: string; annual: string; monthly: string }[];
  whyBuy: { icon: React.ElementType; title: string; desc: string }[];
  focus: string[];
}

function PlanDetailPage({ plan, setScreen }: { plan: PlanConfig; setScreen: (s: Screen) => void }) {
  const color = plan.themeColor;
  const lightBg = plan.lightBg;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
          <button onClick={() => setScreen("home")}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            ← Back to Plans
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {plan.badge && (
                <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full bg-white/20 text-white mb-4">
                  {plan.badge}
                </span>
              )}
              <h1 className="text-5xl font-bold text-white mb-3">{plan.name}</h1>
              <p className="text-white/70 text-lg mb-6">{plan.subtitle}</p>

              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-bold text-white">{plan.sumAssured}</span>
                <span className="text-white/60 mb-1">Sum Assured</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {plan.focus.map((f) => (
                  <span key={f} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 text-white">{f}</span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="px-8 py-3.5 rounded-2xl font-bold text-base transition-all hover:opacity-90 shadow-lg"
                  style={{ background: "#fff", color: color }}>
                  Buy Now
                </button>
                <a
                  href={brochures[plan.id as keyof typeof brochures]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-2xl font-bold text-base border-2 border-white/40 text-white hover:bg-white/10 transition-all inline-flex items-center justify-center"
                >
                  Download Brochure
                </a>
              </div>
            </div>

            {/* Shield visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full flex items-center justify-center bg-white/10 border-2 border-white/20">
                  <div className="w-48 h-48 rounded-full flex items-center justify-center bg-white/20">
                    <Shield className="w-24 h-24 text-white" strokeWidth={1.2} />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-xs text-slate-500">Sum Assured</div>
                  <div className="text-2xl font-bold" style={{ color }}>{plan.sumAssured}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Snapshot */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: lightBg, color }}>
              Coverage Breakdown
            </span>
            <h2 className="text-3xl font-bold mb-3" style={{ color: BLUE }}>Coverage Snapshot</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-[24px] p-10 shadow-lg border border-border">
            <CoverageDonut themeColor={color} segments={plan.coverageSegments} />
          </div>
        </div>
      </section> */}

      {/* What's Covered */}
      <section className="py-20" style={{ background: "#f8faff" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: lightBg, color }}>
              Inclusions
            </span>
            <h2 className="text-3xl font-bold mb-3" style={{ color: BLUE }}>What&apos;s Covered</h2>
            <p className="text-slate-500">Comprehensive protection across all major medical needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plan.whatsCovers.map((item) => (
              <div key={item.title} className="bg-white rounded-[20px] p-6 shadow-sm border border-border hover:shadow-md transition-all group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: lightBg }}>
                  <item.icon className="w-5 h-5" style={{ color }} />
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Covers */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: lightBg, color }}>
              Add-Ons
            </span>
            <h2 className="text-3xl font-bold mb-3" style={{ color: BLUE }}>Additional Covers</h2>
            <p className="text-slate-500">Additional benefits included with your Wellness Protection Plan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {plan.additionalCovers.map((item) => (
              <div key={item.title} className="flex gap-4 bg-white rounded-[20px] p-6 border-2 border-border hover:border-current transition-all group"
                style={{ "--tw-border-opacity": "1" } as React.CSSProperties}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: lightBg }}>
                  <item.icon className="w-5 h-5" style={{ color }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="coverage-section" className="py-20" style={{ background: lightBg }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: "#fff", color }}>
              Pricing
            </span>
            <h2 className="text-3xl font-bold mb-3" style={{ color: BLUE }}>Choose Your Coverage Type</h2>
            <p className="text-slate-500">Flexible options — whether you're buying solo or for the whole family.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plan.pricing.map((p, i) => (
              <div key={p.label} className={cn(
                "rounded-[24px] p-7 flex flex-col items-center text-center border-2 transition-all",
                i === 1 ? "shadow-2xl scale-105" : "bg-white shadow-md hover:shadow-lg"
              )}
                style={i === 1 ? { background: color, borderColor: color } : { borderColor: "transparent" }}>
                {i === 1 && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white mb-3">Most Chosen</span>
                )}
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4",
                  i === 1 ? "bg-white/20" : "")}
                  style={i !== 1 ? { background: lightBg } : {}}>
                  <Users className="w-6 h-6" style={{ color: i === 1 ? "#fff" : color }} />
                </div>
                <h3 className={cn("text-lg font-bold mb-2", i === 1 ? "text-white" : "text-slate-800")}>{p.label}</h3>
                <div className={cn("text-3xl font-bold mb-1", i === 1 ? "text-white" : "text-slate-900")}>{p.annual}</div>
                <div className={cn("text-xs mb-5", i === 1 ? "text-white/70" : "text-slate-400")}>per year · {p.monthly}/month</div>
                <button className={cn(
                  "w-full py-3 rounded-xl font-bold text-sm transition-all",
                  i === 1 ? "bg-white hover:bg-white/90" : "text-white hover:opacity-90"
                )}
                  style={{ color: i === 1 ? color : undefined, background: i !== 1 ? color : undefined }}>
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: lightBg, color }}>
              Why This Plan
            </span>
            <h2 className="text-3xl font-bold mb-3" style={{ color: BLUE }}>Why Buy {plan.name}?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plan.whyBuy.map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-[20px] bg-slate-50 hover:bg-white hover:shadow-md border border-border transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: lightBg }}>
                  <item.icon className="w-5 h-5" style={{ color }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="rounded-[32px] p-12 text-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}bb 100%)` }}>
            <h2 className="text-3xl font-bold text-white mb-3">Start Your {plan.name} Today</h2>
            <p className="text-white/75 mb-8 max-w-md mx-auto">
              Protect yourself and your family with {plan.sumAssured} of comprehensive health coverage. Takes less than 5 minutes.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="px-10 py-4 bg-white rounded-2xl font-bold text-base hover:shadow-lg transition-all"
                style={{ color }}>
                Buy Now — {plan.sumAssured}
              </button>
              <button className="px-10 py-4 rounded-2xl font-bold text-base border-2 border-white text-white hover:bg-white/10 transition-all">
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}

// ─── Plan Data ─────────────────────────────────────────────────────────────────

const essentialPlan: PlanConfig = {
  id: "essential",
  name: "Essential Cover",
  sumAssured: "₹3 Lakh",
  subtitle: "Reliable Protection for Everyday Healthcare Needs.",
  badge: null,
  themeColor: BLUE,
  lightBg: "#f0f4ff",
  focus: ["Hospitalization", "AYUSH Treatments", "Day Care", "Individual Cover"],
  coverageSegments: [
    { label: "Hospitalization", pct: 40, color: BLUE },
    { label: "AYUSH", pct: 20, color: "#3b82f6" },
    { label: "Ambulance", pct: 10, color: "#60a5fa" },
    { label: "Day Care", pct: 20, color: "#93c5fd" },
    { label: "Wellness", pct: 10, color: "#bfdbfe" },
  ],
  whatsCovers: [
    { icon: Building2, title: "Hospitalization Expenses", desc: "Comprehensive hospitalization coverage up to your selected Sum Insured." },
    { icon: Activity, title: "Day Care Treatments", desc: "Eligible day care procedures covered up to the Sum Insured." },
    { icon: Home, title: "Domiciliary Hospitalization", desc: "Home-based treatment coverage up to 30% of the Sum Insured." },
    { icon: Leaf, title: "AYUSH Treatment", desc: "Coverage for AYUSH treatments up to 50% of the Sum Insured." },
    { icon: Dna, title: "Stem Cell Therapy", desc: "Stem Cell Therapy expenses covered up to the Sum Insured." },
    { icon: HeartPulse, title: "Robotic Surgery", desc: "Robotic Surgery expenses covered up to the Sum Insured." },
    { icon: ScanLine, title: "Gamma Knife / Cyberknife Surgery", desc: "Advanced radiation treatment coverage up to the Summ Insured." },
    { icon: Stethoscope, title: "Critical Illness Benefit", desc: "Additional financial protection through Critical Illness Benefit Cover." },
  ],
  additionalCovers: [
    { icon: Clock, title: "Pre-existing Diseases", desc: "Covered after completion of a 2-year waiting period." },
    { icon: Baby, title: "Maternity Cover", desc:(<>Covered after a 9-month waiting period. <br/> Normal Delivery: Up to ₹35,000 <br/> C-Section Delivery: Up to ₹50,000</>)},
    { icon: Building2, title: "Room Rent", desc: (<>Normal Room: 2% of Sum Insured <br/> ICU Room: 4% of Sum Insured</>) },
    { icon: Ambulance, title: "Emergency Ambulance", desc: "Emergency ambulance expenses covered up to ₹2,500 per event." },
    { icon: HeartPulse, title: "Critical Illness", desc: "Critical Illness Benefit Cover included under the policy." },
    { icon: FlaskConical, title: "Disease Sublimits", desc: "Disease-specific sublimits apply as per policy terms and conditions." },
  ],
  pricing: [
    { label: "Individual", annual: "₹2,999", monthly: "₹249" },
    { label: "Couple", annual: "₹3,549", monthly: "₹295" },
    { label: "Family (3+)", annual: "₹5,499", monthly: "₹458" },
  ],
  whyBuy: [
    { icon: ShieldCheck, title: "Smart Financial Protection", desc: "Coverage against unexpected medical expenses." },
    { icon: Globe, title: "Routine & Emergency Care", desc: "Support for both planned and emergency healthcare needs." },
    { icon: Clock, title: "Wellnes Benefits", desc: "Doctor consultations, diagnostics, and pharmacy savings." },
    { icon: BadgeCheck, title: "Affordable Premiums", desc: "Maximum value at a budget-friendly price." },
    { icon: Heart, title: "Family Care", desc: "Maternity benefits and family-focused protection." },
    { icon: Zap, title: "Nationwide Assistance", desc: "Healthcare support available across India." },
  ],
};

const plusPlan: PlanConfig = {
  id: "plus",
  name: "Plus Cover",
  sumAssured: "₹5 Lakh",
  subtitle: "Enhanced Coverage for Greater Financial Protection.",
  badge: "Most Popular",
  themeColor: ORANGE,
  lightBg: "#fff4ea",
  focus: ["Family Protection", "Critical Illness", "Wellness Benefits", "Floater Cover"],
  coverageSegments: [
    { label: "Hospitalization", pct: 35, color: ORANGE },
    { label: "Critical Illness", pct: 20, color: "#ff9a3c" },
    { label: "AYUSH", pct: 15, color: "#ffb46b" },
    { label: "Wellness", pct: 20, color: "#ffd4a3" },
    { label: "Ambulance", pct: 10, color: "#ffebd4" },
  ],
  whatsCovers: [
    { icon: Building2, title: "Hospitalization Expenses", desc: "Comprehensive hospitalization coverage up to your selected Sum Insured." },
    { icon: Activity, title: "Day Care Treatments", desc: "Eligible day care procedures covered up to the Sum Insured." },
    { icon: Home, title: "Domiciliary Hospitalization", desc: "Home-based treatment coverage up to 30% of the Sum Insured." },
    { icon: Leaf, title: "AYUSH Treatment", desc: "Coverage for AYUSH treatments up to 50% of the Sum Insured." },
    { icon: Dna, title: "Stem Cell Therapy", desc: "Stem Cell Therapy expenses covered up to the Sum Insured." },
    { icon: HeartPulse, title: "Robotic Surgery", desc: "Robotic Surgery expenses covered up to the Sum Insured." },
    { icon: ScanLine, title: "Gamma Knife / Cyberknife Surgery", desc: "Advanced radiation treatment coverage up to the Summ Insured." },
    { icon: Stethoscope, title: "Critical Illness Benefit", desc: "Additional financial protection through Critical Illness Benefit Cover." },
  ],
  additionalCovers: [
    { icon: Clock, title: "Pre-existing Diseases", desc: "Covered after completion of a 2-year waiting period." },
    { icon: Baby, title: "Maternity Cover", desc:(<>Covered after a 9-month waiting period. <br/> Normal Delivery: Up to ₹35,000 <br/> C-Section Delivery: Up to ₹50,000</>)},
    { icon: Building2, title: "Room Rent", desc: (<>Normal Room: 2% of Sum Insured <br/> ICU Room: 4% of Sum Insured</>) },
    { icon: Ambulance, title: "Emergency Ambulance", desc: "Emergency ambulance expenses covered up to ₹2,500 per event." },
    { icon: HeartPulse, title: "Critical Illness", desc: "Critical Illness Benefit Cover included under the policy." },
    { icon: FlaskConical, title: "Disease Sublimits", desc: "Disease-specific sublimits apply as per policy terms and conditions." },
  ],
  pricing: [
    { label: "Individual", annual: "₹3,499", monthly: "₹291" },
    { label: "Couple", annual: "₹3,899", monthly: "₹324" },
    { label: "Family (3+)", annual: "₹6,499", monthly: "₹541" },
  ],
  whyBuy: [
    { icon: Users, title: "Higher Coverage Protection", desc: "₹5 Lakh Sum Insured for enhanced financial protection against medical expenses." },
    { icon: HeartPulse, title: "Family-Focused Coverage", desc: "Designed to support the healthcare needs of you and your loved ones." },
    { icon: Sparkles, title: "Wellness Benefits Included", desc: "Doctor consultations, diagnostic discounts, pharmacy savings, and nutrition sessions." },
    { icon: Globe, title: "Maternity Benefits", desc: "Maternity cover available after the applicable waiting period." },
    { icon: Zap, title: "Critical Illness Cover", desc: "Critical Illness Benefit Cover included under the plan." },
    { icon: BadgeCheck, title: "Advanced Treatment Coverage", desc: "Includes AYUSH, Stem Cell Therapy, Robotic Surgery, Gamma Knife/Cyberknife, and Oral Chemotherapy coverage." },
  ],
};

const comprehensivePlan: PlanConfig = {
  id: "comprehensive",
  name: "Comprehensive Cover",
  sumAssured: "₹7 Lakh",
  subtitle: "Higher Coverage for Stronger Healthcare Security.",
  badge: "Best Value",
  themeColor: GREEN,
  lightBg: "#f0fdf4",
  focus: ["Maternity Benefits", "Wellness Benefits", "Advanced Treatments", "Enhanced Cover"],
  coverageSegments: [
    { label: "Hospitalization", pct: 30, color: GREEN },
    { label: "Maternity", pct: 20, color: "#22c55e" },
    { label: "Advanced Treatments", pct: 20, color: "#4ade80" },
    { label: "Wellness", pct: 20, color: "#86efac" },
    { label: "Ambulance & Other", pct: 10, color: "#bbf7d0" },
  ],
  whatsCovers: [
    { icon: Building2, title: "Hospitalization Expenses", desc: "Comprehensive hospitalization coverage up to your selected Sum Insured." },
    { icon: Activity, title: "Day Care Treatments", desc: "Eligible day care procedures covered up to the Sum Insured." },
    { icon: Home, title: "Domiciliary Hospitalization", desc: "Home-based treatment coverage up to 30% of the Sum Insured." },
    { icon: Leaf, title: "AYUSH Treatment", desc: "Coverage for AYUSH treatments up to 50% of the Sum Insured." },
    { icon: Dna, title: "Stem Cell Therapy", desc: "Stem Cell Therapy expenses covered up to the Sum Insured." },
    { icon: HeartPulse, title: "Robotic Surgery", desc: "Robotic Surgery expenses covered up to the Sum Insured." },
    { icon: ScanLine, title: "Gamma Knife / Cyberknife Surgery", desc: "Advanced radiation treatment coverage up to the Summ Insured." },
    { icon: Stethoscope, title: "Critical Illness Benefit", desc: "Additional financial protection through Critical Illness Benefit Cover." },
  ],
  additionalCovers: [
    { icon: Clock, title: "Pre-existing Diseases", desc: "Covered after completion of a 2-year waiting period." },
    { icon: Baby, title: "Maternity Cover", desc:(<>Covered after a 9-month waiting period. <br/> Normal Delivery: Up to ₹35,000 <br/> C-Section Delivery: Up to ₹50,000</>)},
    { icon: Building2, title: "Room Rent", desc: (<>Normal Room: 2% of Sum Insured <br/> ICU Room: 4% of Sum Insured</>) },
    { icon: Ambulance, title: "Emergency Ambulance", desc: "Emergency ambulance expenses covered up to ₹2,500 per event." },
    { icon: HeartPulse, title: "Critical Illness", desc: "Critical Illness Benefit Cover included under the policy." },
    { icon: FlaskConical, title: "Disease Sublimits", desc: "Disease-specific sublimits apply as per policy terms and conditions." },
  ],
  pricing: [
    { label: "Individual", annual: "₹3,699", monthly: "₹308" },
    { label: "Couple", annual: "₹4,599", monthly: "₹383" },
    { label: "Family (3+)", annual: "₹7,599", monthly: "₹633" },
  ],
  whyBuy: [
    { icon: ShieldCheck, title: "Smart Financial Protection", desc: "Coverage against unexpected medical expenses." },
    { icon: Globe, title: "Routine & Emergency Care", desc: "Support for both planned and emergency healthcare needs." },
    { icon: Clock, title: "Wellnes Benefits", desc: "Doctor consultations, diagnostics, and pharmacy savings." },
    { icon: BadgeCheck, title: "Affordable Premiums", desc: "Maximum value at a budget-friendly price." },
    { icon: Heart, title: "Family Care", desc: "Maternity benefits and family-focused protection." },
    { icon: Zap, title: "Nationwide Assistance", desc: "Healthcare support available across India." },
  ],
};

const premiumPlan: PlanConfig = {
  id: "premium",
  name: "Premium Cover",
  sumAssured: "₹10 Lakh",
  subtitle: "Maximum Coverage for Complete Peace of Mind.",
  badge: "Maximum Protection",
  themeColor: PURPLE,
  lightBg: "#faf5ff",
  focus: ["Maximum Protection", "Advanced Treatments", "Premium Benefits", "Concierge Health"],
  coverageSegments: [
    { label: "Hospitalization", pct: 30, color: PURPLE },
    { label: "Advanced Treatments", pct: 25, color: "#8b5cf6" },
    { label: "Critical Illness", pct: 20, color: "#a78bfa" },
    { label: "Wellness & Maternity", pct: 15, color: "#c4b5fd" },
    { label: "Ambulance & Other", pct: 10, color: "#ddd6fe" },
  ],
  whatsCovers: [
    { icon: Building2, title: "Hospitalization Expenses", desc: "Comprehensive hospitalization coverage up to your selected Sum Insured." },
    { icon: Activity, title: "Day Care Treatments", desc: "Eligible day care procedures covered up to the Sum Insured." },
    { icon: Home, title: "Domiciliary Hospitalization", desc: "Home-based treatment coverage up to 30% of the Sum Insured." },
    { icon: Leaf, title: "AYUSH Treatment", desc: "Coverage for AYUSH treatments up to 50% of the Sum Insured." },
    { icon: Dna, title: "Stem Cell Therapy", desc: "Stem Cell Therapy expenses covered up to the Sum Insured." },
    { icon: HeartPulse, title: "Robotic Surgery", desc: "Robotic Surgery expenses covered up to the Sum Insured." },
    { icon: ScanLine, title: "Gamma Knife / Cyberknife Surgery", desc: "Advanced radiation treatment coverage up to the Summ Insured." },
    { icon: Stethoscope, title: "Critical Illness Benefit", desc: "Additional financial protection through Critical Illness Benefit Cover." },
  ],
  additionalCovers: [
    { icon: Clock, title: "Pre-existing Diseases", desc: "Covered after completion of a 2-year waiting period." },
    { icon: Baby, title: "Maternity Cover", desc:(<>Covered after a 9-month waiting period. <br/> Normal Delivery: Up to ₹35,000 <br/> C-Section Delivery: Up to ₹50,000</>)},
    { icon: Building2, title: "Room Rent", desc: (<>Normal Room: 2% of Sum Insured <br/> ICU Room: 4% of Sum Insured</>) },
    { icon: Ambulance, title: "Emergency Ambulance", desc: "Emergency ambulance expenses covered up to ₹2,500 per event." },
    { icon: HeartPulse, title: "Critical Illness", desc: "Critical Illness Benefit Cover included under the policy." },
    { icon: FlaskConical, title: "Disease Sublimits", desc: "Disease-specific sublimits apply as per policy terms and conditions." },
  ],
  pricing: [
    { label: "Individual", annual: "₹4,299", monthly: "₹358" },
    { label: "Couple", annual: "₹5,299", monthly: "₹441" },
    { label: "Family (3+)", annual: "₹8,900", monthly: "₹741" },
  ],
  whyBuy: [
    { icon: ShieldCheck, title: "Smart Financial Protection", desc: "Coverage against unexpected medical expenses." },
    { icon: Globe, title: "Routine & Emergency Care", desc: "Support for both planned and emergency healthcare needs." },
    { icon: Clock, title: "Wellnes Benefits", desc: "Doctor consultations, diagnostics, and pharmacy savings." },
    { icon: BadgeCheck, title: "Affordable Premiums", desc: "Maximum value at a budget-friendly price." },
    { icon: Heart, title: "Family Care", desc: "Maternity benefits and family-focused protection." },
    { icon: Zap, title: "Nationwide Assistance", desc: "Healthcare support available across India." },
  ],
};

const PLAN_MAP: Record<string, PlanConfig> = {
  essential: essentialPlan,
  plus: plusPlan,
  comprehensive: comprehensivePlan,
  premium: premiumPlan,
};

// ─── Design System Page ────────────────────────────────────────────────────────

function DesignSystemPage() {
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("family");
  const [checked, setChecked] = useState(true);

  const colorPalette = [
    { name: "Orange Primary", hex: "#FF7A00", bg: "bg-[#FF7A00]" },
    { name: "Orange Light", hex: "#FFF4EA", bg: "bg-[#FFF4EA]" },
    { name: "Blue Secondary", hex: "#0B3B8F", bg: "bg-[#0B3B8F]" },
    { name: "Blue Light", hex: "#F0F4FF", bg: "bg-[#F0F4FF]" },
    { name: "Green Accent", hex: "#16A34A", bg: "bg-[#16A34A]" },
    { name: "Green Light", hex: "#F0FDF4", bg: "bg-[#F0FDF4]" },
    { name: "Purple Accent", hex: "#7C3AED", bg: "bg-[#7C3AED]" },
    { name: "Purple Light", hex: "#FAF5FF", bg: "bg-[#FAF5FF]" },
    { name: "Slate 800", hex: "#1E293B", bg: "bg-slate-800" },
    { name: "Slate 500", hex: "#64748B", bg: "bg-slate-500" },
    { name: "Slate 200", hex: "#E2E8F0", bg: "bg-slate-200" },
    { name: "White", hex: "#FFFFFF", bg: "bg-white border border-slate-200" },
  ];

  const badges = [
    { label: "Most Popular", color: ORANGE, bg: "#fff4ea" },
    { label: "Best Value", color: GREEN, bg: "#f0fdf4" },
    { label: "Max Protection", color: PURPLE, bg: "#faf5ff" },
    { label: "IRDAI Approved", color: BLUE, bg: "#f0f4ff" },
    { label: "New", color: "#fff", bg: ORANGE },
    { label: "Cashless", color: "#fff", bg: GREEN },
  ];

  const spacingScale = [1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32];

  const shadowLevels = [
    { name: "sm", cls: "shadow-sm", desc: "Cards, input fields" },
    { name: "md", cls: "shadow-md", desc: "Elevated cards, dropdowns" },
    { name: "lg", cls: "shadow-lg", desc: "Modals, popovers" },
    { name: "xl", cls: "shadow-xl", desc: "Hero elements, badges" },
    { name: "2xl", cls: "shadow-2xl", desc: "Featured cards, CTAs" },
  ];

  const icons = [Shield, Heart, Users, Activity, Building2, HeartPulse, Baby, Globe, Clock, Leaf, Ambulance, Microscope, Award, Sparkles, Zap, CheckCircle2, Phone, Mail, MapPin, Star];

  return (
    <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16 space-y-20">
      <div>
        <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
          style={{ background: "#fff4ea", color: ORANGE }}>
          Design System
        </span>
        <h1 className="text-4xl font-bold mb-3" style={{ color: BLUE }}>Across Assist Design System</h1>
        <p className="text-slate-500 text-lg">A complete reference for colors, typography, components, and patterns.</p>
      </div>

      {/* ── Colors ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: BLUE }}>Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {colorPalette.map((c) => (
            <div key={c.name} className="rounded-[16px] overflow-hidden shadow-sm border border-border">
              <div className={`h-20 ${c.bg}`} />
              <div className="p-3 bg-white">
                <div className="text-xs font-semibold text-slate-700 mb-0.5">{c.name}</div>
                <div className="text-[10px] font-mono text-slate-400">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Typography ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: BLUE }}>Typography — Poppins</h2>
        <div className="bg-white rounded-[24px] p-10 border border-border shadow-sm space-y-6">
          {[
            { label: "Display / H1", cls: "text-5xl font-bold", text: "Health Protection Made Simple" },
            { label: "Heading / H2", cls: "text-3xl font-bold", text: "Coverage for Every Life Stage" },
            { label: "Sub-heading / H3", cls: "text-xl font-semibold", text: "Essential Cover — Individuals" },
            { label: "Card Title / H4", cls: "text-base font-bold", text: "Cashless Hospitalization" },
            { label: "Body Regular", cls: "text-sm font-normal text-slate-600", text: "Comprehensive coverage that adapts to your family's health journey at every stage of life." },
            { label: "Caption / Label", cls: "text-xs font-semibold text-slate-500 uppercase tracking-wider", text: "MOST POPULAR · IRDAI CERTIFIED" },
            { label: "Micro", cls: "text-[10px] font-semibold text-slate-400 uppercase tracking-widest", text: "per year · pan india coverage" },
          ].map((t) => (
            <div key={t.label} className="flex items-baseline gap-6 pb-6 border-b border-border last:border-0 last:pb-0">
              <div className="w-40 flex-shrink-0 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{t.label}</div>
              <div className={t.cls}>{t.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Buttons ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: BLUE }}>Buttons</h2>
        <div className="bg-white rounded-[24px] p-10 border border-border shadow-sm">
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-7 py-3 rounded-2xl text-white text-sm font-bold shadow-md hover:opacity-90 transition-all"
              style={{ background: `linear-gradient(135deg, ${ORANGE}, #ff9a3c)` }}>
              Primary Button
            </button>
            <button className="px-7 py-3 rounded-2xl text-white text-sm font-bold shadow-md hover:opacity-90 transition-all"
              style={{ background: BLUE }}>
              Secondary Button
            </button>
            <button className="px-7 py-3 rounded-2xl text-sm font-bold border-2 hover:bg-slate-50 transition-all"
              style={{ borderColor: ORANGE, color: ORANGE }}>
              Outline Orange
            </button>
            <button className="px-7 py-3 rounded-2xl text-sm font-bold border-2 hover:bg-slate-50 transition-all"
              style={{ borderColor: BLUE, color: BLUE }}>
              Outline Blue
            </button>
            <button className="px-7 py-3 rounded-2xl text-sm font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all">
              Ghost Button
            </button>
            <button className="px-5 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all flex items-center gap-2"
              style={{ background: GREEN }}>
              <Check className="w-4 h-4" /> With Icon
            </button>
          </div>

          {/* Sizes */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-white" style={{ background: ORANGE }}>XS</button>
            <button className="px-5 py-2 rounded-xl text-xs font-bold text-white" style={{ background: ORANGE }}>Small</button>
            <button className="px-7 py-3 rounded-2xl text-sm font-bold text-white" style={{ background: ORANGE }}>Medium</button>
            <button className="px-9 py-4 rounded-2xl text-base font-bold text-white" style={{ background: ORANGE }}>Large</button>
            <button className="px-12 py-5 rounded-2xl text-lg font-bold text-white" style={{ background: ORANGE }}>XL</button>
          </div>
        </div>
      </section>

      {/* ── Cards ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: BLUE }}>Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Plan card */}
          <div className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-border">
            <div className="h-2 w-full" style={{ background: ORANGE }} />
            <div className="p-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "#fff4ea" }}>
                <Shield className="w-5 h-5" style={{ color: ORANGE }} />
              </div>
              <div className="text-xs font-semibold mb-0.5 uppercase tracking-wide" style={{ color: ORANGE }}>Best for Families</div>
              <h3 className="text-base font-bold mb-2 text-slate-800">Plus Cover</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">Complete family protection with floater benefits and critical illness cover.</p>
              <button className="w-full py-2.5 rounded-xl text-xs font-bold text-white" style={{ background: ORANGE }}>View Plan →</button>
            </div>
          </div>

          {/* Info card */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-border">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: "#f0f4ff" }}>
                <HeartPulse className="w-5 h-5" style={{ color: BLUE }} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">Cashless Hospitalization</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Direct settlement with 10,000+ network hospitals across India.</p>
              </div>
            </div>
          </div>

          {/* Testimonial card */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-border">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4 fill-current" style={{ color: "#ffb46b" }} />)}
            </div>
            <p className="text-sm text-slate-600 italic mb-4">"Claim settled in 48 hours. Truly puts families first."</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white" style={{ background: ORANGE }}>SK</div>
              <div>
                <div className="text-xs font-bold text-slate-700">Sunita Kapoor</div>
                <div className="text-[10px] text-slate-400">Delhi · Family Cover</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Badges ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: BLUE }}>Badges</h2>
        <div className="bg-white rounded-[24px] p-8 border border-border shadow-sm flex flex-wrap gap-3">
          {badges.map((b) => (
            <span key={b.label} className="text-xs font-bold px-4 py-1.5 rounded-full"
              style={{ color: b.color, background: b.bg }}>
              {b.label}
            </span>
          ))}
          {/* Status badges */}
          <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-green-100 text-green-700">● Active</span>
          <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700">● Pending</span>
          <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-red-100 text-red-700">● Expired</span>
          <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-slate-100 text-slate-500">● Inactive</span>
        </div>
      </section>

      {/* ── Form Elements ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: BLUE }}>Form Elements</h2>
        <div className="bg-white rounded-[24px] p-10 border border-border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {/* Text input */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">Full Name</label>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="e.g. Rajesh Kumar"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm outline-none transition-all focus:border-[#FF7A00] bg-slate-50"
              />
            </div>

            {/* Select */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">Plan Type</label>
              <select
                value={selectVal}
                onChange={(e) => setSelectVal(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm outline-none bg-slate-50 focus:border-[#FF7A00] appearance-none"
              >
                <option value="essential">Essential Cover</option>
                <option value="plus">Plus Cover</option>
                <option value="comprehensive">Comprehensive Cover</option>
                <option value="premium">Premium Cover</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">Date of Birth</label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm outline-none bg-slate-50 focus:border-[#FF7A00]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">Mobile Number</label>
              <div className="flex">
                <span className="px-3 py-3 bg-slate-100 border-2 border-r-0 border-slate-200 rounded-l-xl text-sm text-slate-500">+91</span>
                <input type="tel" placeholder="9876543210"
                  className="flex-1 px-4 py-3 rounded-r-xl border-2 border-slate-200 text-sm outline-none bg-slate-50 focus:border-[#FF7A00]" />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChecked(!checked)}
                className="w-5 h-5 rounded-md flex items-center justify-center border-2 transition-all flex-shrink-0"
                style={{ background: checked ? ORANGE : "transparent", borderColor: checked ? ORANGE : "#cbd5e1" }}
              >
                {checked && <Check className="w-3 h-3 text-white" />}
              </button>
              <label className="text-sm text-slate-600 cursor-pointer" onClick={() => setChecked(!checked)}>
                I agree to the <span style={{ color: ORANGE }}>Terms & Privacy Policy</span>
              </label>
            </div>

            {/* Submit */}
            <button className="px-8 py-3 rounded-xl font-bold text-white text-sm hover:opacity-90 transition-all"
              style={{ background: `linear-gradient(135deg, ${ORANGE}, #ff9a3c)` }}>
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* ── Icons ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: BLUE }}>Icon Library (Lucide React)</h2>
        <div className="bg-white rounded-[24px] p-8 border border-border shadow-sm">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
            {icons.map((Icon, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                <Icon className="w-6 h-6" style={{ color: i % 4 === 0 ? ORANGE : i % 4 === 1 ? BLUE : i % 4 === 2 ? GREEN : PURPLE }} />
                <span className="text-[9px] text-slate-400 text-center leading-tight">{Icon.displayName || Icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shadows ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: BLUE }}>Shadow Scale</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {shadowLevels.map((s) => (
            <div key={s.name} className={`bg-white rounded-[20px] p-6 ${s.cls} border border-transparent`}>
              <div className="text-sm font-bold text-slate-700 mb-1">shadow-{s.name}</div>
              <div className="text-xs text-slate-400">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Spacing ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: BLUE }}>Spacing Scale (Tailwind)</h2>
        <div className="bg-white rounded-[24px] p-8 border border-border shadow-sm">
          <div className="space-y-3">
            {spacingScale.map((n) => (
              <div key={n} className="flex items-center gap-4">
                <span className="text-xs font-mono text-slate-400 w-8 text-right">{n}</span>
                <div className="h-5 rounded" style={{ width: `${n * 4}px`, background: ORANGE, opacity: 0.8 }} />
                <span className="text-xs text-slate-400">{n * 4}px</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Border Radius ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: BLUE }}>Border Radius</h2>
        <div className="flex flex-wrap gap-6">
          {[
            { label: "sm · 8px", cls: "rounded-lg" },
            { label: "md · 12px", cls: "rounded-xl" },
            { label: "lg · 16px", cls: "rounded-2xl" },
            { label: "xl · 20px", cls: "rounded-[20px]" },
            { label: "2xl · 24px", cls: "rounded-[24px]" },
            { label: "full", cls: "rounded-full" },
          ].map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-2">
              <div className={`w-20 h-20 bg-[#FF7A00] ${r.cls}`} />
              <span className="text-xs text-slate-500">{r.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── App (Router) ──────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");

  const renderScreen = () => {
    if (screen === "home") return <HomeScreen setScreen={setScreen} />;
    if (screen === "design-system") return <DesignSystemPage />;
    const plan = PLAN_MAP[screen];
    if (plan) return <PlanDetailPage plan={plan} setScreen={setScreen} />;
    return <HomeScreen setScreen={setScreen} />;
  };

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar screen={screen} setScreen={setScreen} />
      <main>
        {renderScreen()}
      </main>
      <Footer setScreen={setScreen} />
    </div>
  );
}
