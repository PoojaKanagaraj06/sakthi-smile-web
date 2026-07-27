export const CLINIC = {
  name: "Sakthi Dental Clinic",
  tagline: "Specialized Dental Care for Women, Children & Families",
  phone: "+91 98765 43210",
  emergencyPhone: "+91 90000 00000",
  email: "care@sakthidental.com",
  address: "12, MG Road, T. Nagar, Chennai, Tamil Nadu 600017",
  hours: [
    { day: "Mon – Fri", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  socials: { instagram: "#", facebook: "#", youtube: "#" },
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const WHY_CHOOSE = [
  {
    icon: "shield",
    title: "All-in-One Care",
    text: "General, cosmetic, pediatric and surgical dentistry — everything under one roof.",
  },
  {
    icon: "award",
    title: "Experienced Doctors",
    text: "A team of specialists led by Dr. Anupriya with 20+ years of clinical excellence.",
  },
  {
    icon: "heart",
    title: "Patient-Centric Approach",
    text: "Gentle, personalized treatment plans designed around your comfort and goals.",
  },
  {
    icon: "sparkle",
    title: "Technology-Driven",
    text: "Digital imaging, laser dentistry and modern sterilization for safer outcomes.",
  },
];

export const HOME_SERVICES = [
  { title: "Tooth Extraction", desc: "Painless removal with modern anesthesia protocols." },
  { title: "Tooth Filling", desc: "Tooth-coloured composite restorations that blend naturally." },
  { title: "Artificial Complete Denture", desc: "Custom fit dentures for confident smiles." },
  { title: "Teeth Cleaning", desc: "Professional scaling to remove plaque and tartar." },
  { title: "Bleaching", desc: "Safe in-office whitening for brighter, whiter teeth." },
  { title: "Orthodontic Treatment", desc: "Braces & aligners for perfectly aligned smiles." },
];

export const TREATMENTS = [
  { title: "Teeth Cleaning & Scaling", desc: "Deep cleaning to restore gum health and freshness." },
  { title: "Tooth Filling", desc: "Aesthetic composite fillings that last." },
  { title: "Tooth Extraction", desc: "Safe, minimally-invasive extractions." },
  { title: "Artificial Complete Denture", desc: "Precision-fit full dentures." },
  { title: "Dental Implants", desc: "Permanent tooth replacement with titanium implants." },
  { title: "Laser Dentistry", desc: "Bloodless, precise laser-assisted procedures." },
  { title: "Root Canal Therapy", desc: "Single-sitting painless RCT with digital tools." },
  { title: "Wisdom Tooth Extraction", desc: "Expert surgical removal of impacted teeth." },
  { title: "Fixed Partial Denture", desc: "Bridges to fill missing teeth gaps." },
  { title: "Teeth Whitening", desc: "Professional bleaching for a radiant smile." },
  { title: "Veneers", desc: "Ultra-thin porcelain shells for a perfect smile." },
  { title: "Pediatric Dentistry", desc: "Kid-friendly care in a comforting environment." },
  { title: "Flap Surgery", desc: "Advanced gum surgery for periodontal health." },
  { title: "Orthodontic Braces", desc: "Metal and ceramic braces for alignment." },
  { title: "Clear Aligners", desc: "Invisible aligners for discreet correction." },
];

export const DOCTORS = [
  { name: "Dr. Anupriya", role: "Founder & Chief Dental Surgeon", exp: "20+ Years" },
  { name: "Dr. Ananya Iyer", role: "Endodontist", exp: "12 Years" },
  { name: "Dr. Meera Subramanian", role: "Orthodontist", exp: "10 Years" },
  { name: "Dr. Arvind Kumar", role: "Oral Surgeon", exp: "14 Years" },
  { name: "Dr. Sneha N", role: "Pediatric Dentist", exp: "8 Years" },
  { name: "Dr. Srinivas Rohit Ramanujam", role: "Prosthodontist", exp: "11 Years" },
  { name: "Dr. Balu", role: "Implantologist", exp: "15 Years" },
  { name: "Dr. Vikram Raj Kishore", role: "Cosmetic Dentist", exp: "9 Years" },
  { name: "Dr. Ajay Kumar", role: "Periodontist", exp: "10 Years" },
];

export const FACILITIES = [
  { title: "Digital X-Ray Suite", text: "Low-radiation imaging for accurate diagnosis." },
  { title: "Sterilization Zone", text: "Autoclave-grade sterilization for every instrument." },
  { title: "Kids' Play Corner", text: "A cheerful space so little ones feel at ease." },
  { title: "Private Consultation", text: "Comfortable, confidential consult rooms." },
];

export const TESTIMONIALS = [
  {
    name: "Priya R.",
    role: "Patient",
    text: "Dr. Anupriya and her team made my root canal completely painless. The clinic feels warm and reassuring.",
  },
  {
    name: "Karthik S.",
    role: "Patient",
    text: "Best dental experience I've had. Modern facility, friendly staff and honest pricing.",
  },
  {
    name: "Meenakshi V.",
    role: "Parent",
    text: "My daughter actually looks forward to her dental visits. The pediatric team is wonderful.",
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 15000, suffix: "+", label: "Happy Smiles" },
  { value: 9, suffix: "", label: "Expert Specialists" },
  { value: 50, suffix: "+", label: "Treatments Offered" },
];

export const FAQS = [
  { q: "Why does my tooth hurt suddenly?", a: "Sudden tooth pain can be caused by cavities, cracked teeth, exposed dentin or infection. Book a consultation for an accurate diagnosis." },
  { q: "How often should I get scaling done?", a: "For most adults, professional scaling every 6 months is ideal to prevent gum disease and tartar buildup." },
  { q: "Are tooth fillings painful?", a: "Modern composite fillings are performed under local anesthesia and are virtually painless." },
  { q: "How long does a root canal take?", a: "Most root canals are completed in a single sitting of 45–90 minutes with modern rotary techniques." },
  { q: "At what age should braces be considered?", a: "An orthodontic evaluation is recommended by age 7, though braces are commonly placed between 11–14." },
  { q: "Do wisdom teeth always need removal?", a: "Only if they are impacted, causing pain, infection or crowding. Not every wisdom tooth needs extraction." },
  { q: "What's the best oral hygiene routine?", a: "Brush twice a day, floss daily, use a fluoride toothpaste and rinse — plus a dental check-up every 6 months." },
  { q: "Why are my teeth sensitive to cold?", a: "Sensitivity is often due to enamel erosion or gum recession. Desensitizing treatments and fluoride can help." },
  { q: "Am I a candidate for dental implants?", a: "Most adults with good bone density and general health qualify. A CBCT scan confirms eligibility." },
  { q: "Which toothbrush should I use?", a: "A soft-bristled brush is best for enamel and gums. Electric brushes can be more effective for plaque removal." },
];

export const PRIVACY_SECTIONS = [
  { title: "Information Collection", text: "We collect basic contact details (name, email, phone) and medical history strictly for providing dental care." },
  { title: "Cookies", text: "Our website uses minimal cookies to enable core features and understand aggregate site usage." },
  { title: "Data Usage", text: "Your data is used only to schedule appointments, provide treatment and communicate reminders." },
  { title: "Security", text: "All records are stored in encrypted systems accessible only to authorized clinic staff." },
  { title: "Information Sharing", text: "We never sell your data. Sharing occurs only with your consent or when legally required." },
  { title: "Children's Privacy", text: "For patients under 18, treatment records are managed with parental/guardian consent." },
  { title: "Policy Changes", text: "Any updates to this policy will be posted on this page with a revised effective date." },
  { title: "Acceptance", text: "By using our services, you agree to the terms outlined in this Privacy Policy." },
  { title: "Contact", text: "For any privacy-related questions, reach us at care@sakthidental.com or +91 98765 43210." },
];
