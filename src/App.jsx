import { useState } from "react";

/* ---------- EDIT ME: all replaceable content lives here ---------- */
const CONFIG = {
  phone: "+91 90804 16637",
  whatsapp: "919080416637",
  email: "parameswarimiras@gmail.com",
  pdfUrl: "/Detailed-Property-Brochure.pdf", // put the file in /public
  mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3931.910765350564!2d77.101705!3d9.773617999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNDYnMjUuMCJOIDc3wrAwNicwNi4xIkU!5e0!3m2!1sen!2sin!4v1792515451113!5m2!1sen!2sin",
  formAction: "https://formspree.io/f/YOUR_FORM_ID",
  heroImg: "/hero.jpg",
  // Replace with /gallery/photo-N.jpg once your files are in /public/gallery
  //photo: (n) => `https://placehold.co/1080x1920/webp?text=Photo+${n}`,
  photo: (n) => `/gallery/photo-${n}.webp`,
  photoCount: 49,
  //shorts: Array.from({ length: 14 }, (_, i) => `YOUTUBE_SHORT_ID_${i + 1}`),
  shorts: [
    "rBnbOd5eJf4",
"EXE0vMkkEDE",
"MZQsEPVDx58",
"XsatgGOYsg8",
"0ZQKuJI21os",
"RhF0k-J38TI",
"IzvUWQEmlKQ",
"3RuPnlHbfnU",
"bJUly7jdhFg",
"-G-82pkg1kA",
    // ... keep adding the rest of your 14 IDs here
  ],
};

const CROPS = [
  { icon: "🌿", name: "Cardamom", qty: "1500 plants", note: "45 days · ₹ 1,00,000" },
  { icon: "⚫", name: "Black pepper", qty: "500 vines" },
  { icon: "🌳", name: "Teak", qty: "10 teak · 3 white teak · 15 ordinary" },
  { icon: "☕", name: "Coffee", qty: "70 plants", note: "₹ 800" },
  { icon: "🍫", name: "Cocoa", qty: "20 plants" },
  { icon: "🍈", name: "Jackfruit", qty: "100 trees", note: "1,500 fruits" },
  { icon: "🥭", name: "Mango", qty: "35 trees" },
  { icon: "🥥", name: "Coconut", qty: "6 trees", note: "600 × 20 = 12,000" },
  { icon: "🌸", name: "Clove", qty: "7 trees", note: "Yearly once · ₹ 10,000" },
  { icon: "🌰", name: "Nutmeg", qty: "15 seedlings", note: "₹ 30,000" },
  { icon: "💊", name: "Thalikka (medicine tree)", qty: "30 trees", note: "₹ 7,000" },
  { icon: "🌴", name: "Arecanut (betel)", qty: "120 palms", note: "50 gr = ₹ 15,000" },
  { icon: "🫚", name: "Dry ginger", qty: "1500 plants" },
];

const PAINS = [
  ["Noise, traffic, smog", "Swap the 7 a.m. commute for birdsong and cool, clean forest air."],
  ["Screens with no horizon", "Take calls under a canopy. Fibre-grade internet is a short upgrade away."],
  ["Savings that sit still", "Own trees that crop every year: spices, fruit, coffee and timber."],
];

/* ---------- Small components ---------- */
function Short({ id, n }) {
  const [on, setOn] = useState(false);
  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-forest">
      {on ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={`Plantation walkthrough short ${n}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button onClick={() => setOn(true)} className="absolute inset-0 grid place-items-center" aria-label={`Play short ${n}`}>
          <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gold text-xl text-forest">▶</span>
        </button>
      )}
    </div>
  );
}

const Section = ({ id, title, intro, children, dark }) => (
  <section id={id} aria-labelledby={`${id}-h`} className={`px-5 py-16 md:py-24 ${dark ? "bg-forest text-mist" : ""}`}>
    <div className="mx-auto max-w-6xl">
      <h2 id={`${id}-h`} className="max-w-2xl text-3xl font-bold md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 max-w-2xl text-lg opacity-80">{intro}</p>}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

/* ---------- App ---------- */
export default function App() {
const [form, setForm] = useState({ name: "", phone: "", country: "", message: "" });
const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

const submit = (e) => {
  e.preventDefault();
  const text =
    `Hi, I am interested in the Work From Forest plantation.\n` +
    `Name: ${form.name}\nPhone: ${form.phone}\nLiving in: ${form.country}\n${form.message}`;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
};
const field = "mt-1 w-full rounded-lg border border-forest/30 bg-white px-4 py-3 font-normal";
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-10">
        <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 text-mist">
          <span className="font-display text-lg font-bold">Work From Forest</span>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#yield">Yield</a><a href="#gallery">Gallery</a><a href="#location">Location</a><a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative grid min-h-[100svh] items-end bg-forest bg-cover bg-center px-5 pb-16 pt-32 text-mist" style={{ backgroundImage: `url(${CONFIG.heroImg})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/20" />
          <div className="relative mx-auto w-full max-w-6xl">
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-7xl md:text-8xl">Own Your Ultimate<br /> Remote Workspace</h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl">
              For Sale: A fully operational, yielding plantation in Kerala. Trade the 7 a.m. commute and city smog for canopy living where your laptop connects effortlessly, and your land pays you back.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-gold px-7 py-3 font-semibold text-forest">Schedule a Buyer's Tour</a>
              <a href={CONFIG.pdfUrl} className="rounded-full border border-mist/60 px-7 py-3 font-semibold">Download brochure</a>
            </div>
          </div>
        </section>

        {/* Why */}
        <Section id="why" title="The city takes. This land gives.">
          <div className="grid gap-6 md:grid-cols-3">
            {PAINS.map(([t, d]) => (
              <article key={t} className="border-l-4 border-moss pl-5">
                <h3 className="text-xl font-bold">{t}</h3>
                <p className="mt-2 opacity-80">{d}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-lg">
            Built for urban professionals, NRIs, NROs and expatriates who want a peaceful rural base and a turnkey agricultural investment, already planted and bearing. 
          </p>
        </Section>

        {/* Yield */}
        <Section id="yield" dark title="A Diversified Yield Portfolio." intro="A mature, mixed plantation: spices, fruit, beverage crops, medicinal trees and timber, all on one property.">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CROPS.map((c) => (
              <li key={c.name} className="rounded-2xl bg-mist/10 p-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">{c.icon}</span>
                  <h3 className="text-xl font-bold">{c.name}</h3>
                </div>
                <p className="mt-3 text-lg font-semibold text-gold">{c.qty}</p>
                {c.note && <p className="text-sm opacity-80">{c.note}</p>}
              </li>
            ))}
          </ul>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {["No monkey disturbance", "No elephant disturbance", "Just 200 metres from the main road"].map((a) => (
              <li key={a} className="rounded-2xl border border-gold p-5 text-center text-lg font-semibold">✓ {a}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm opacity-60">Yield and price figures are owner-supplied estimates. Verify on site before investing.</p>
        </Section>

        {/* Photos */}
        <Section id="gallery" title="Walk the land" intro={`${CONFIG.photoCount} photos, shot in portrait for your phone.`}>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: CONFIG.photoCount }, (_, i) => (
              <img key={i} src={CONFIG.photo(i + 1)} loading="lazy" width="1080" height="1920"
                alt={`Plantation view ${i + 1}: agricultural and forest land for sale in Kerala`}
                className="aspect-[9/16] w-full rounded-xl bg-forest/10 object-cover" />
            ))}
          </div>
        </Section>

        {/* Shorts */}
        <Section id="videos" dark title="See it in motion" intro="Short walkthroughs. Tap to play.">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-7">
            {CONFIG.shorts.map((id, i) => <Short key={id} id={id} n={i + 1} />)}
          </div>
        </Section>

        {/* Location */}
        <Section id="location" title="200 metres from the main road" intro="Enjoy deep forest isolation without the logistical nightmare—the property is located just 200 metres from the main road, making it primed for high-speed fibre internet.">
          <div className="aspect-video overflow-hidden rounded-2xl bg-forest/10">
            <iframe src={CONFIG.mapSrc} title="Property location on Google Maps" className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </Section>

        {/* Brochure */}
        <section id="brochure" aria-labelledby="brochure-h" className="bg-moss px-5 py-16 text-center text-white">
          <h2 id="brochure-h" className="text-3xl font-bold md:text-4xl">Get the detailed property PDF</h2>
          <p className="mx-auto mt-3 max-w-xl">Plant counts, yields, boundaries and documents in one file.</p>
          <a href={CONFIG.pdfUrl} target="_blank" rel="noopener" download className="mt-8 inline-block rounded-full bg-forest px-8 py-3 font-semibold">Download brochure (PDF)</a>
        </section>

        {/* Contact */}
        <Section id="contact" title="Plan your visit" intro="Send us a message on WhatsApp. We will reply at a time that suits your time zone.">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-3 text-lg">
              <p><a href={`tel:${CONFIG.phone.replace(/\s/g, "")}`} className="font-semibold underline">{CONFIG.phone}</a></p>
              <p><a href={`mailto:${CONFIG.email}`} className="font-semibold underline">{CONFIG.email}</a></p>
              <p className="pt-4 text-sm opacity-70">
                NRI, OCI and foreign-national eligibility to buy or lease agricultural land is restricted under Indian law (FEMA and Kerala land rules). Speak to a qualified lawyer before committing.
              </p>
            </div>
            <form onSubmit={submit} className="space-y-4">
  <label className="block text-sm font-semibold">Your name
    <input required className={field} value={form.name} onChange={set("name")} autoComplete="name" />
  </label>
  <label className="block text-sm font-semibold">Phone or WhatsApp (with country code)
    <input required type="tel" className={field} value={form.phone} onChange={set("phone")} autoComplete="tel" />
  </label>
  <label className="block text-sm font-semibold">Country you live in
    <input className={field} value={form.country} onChange={set("country")} />
  </label>
  <label className="block text-sm font-semibold">Message
    <textarea rows="4" className={field} value={form.message} onChange={set("message")} />
  </label>
  <button type="submit" className="rounded-full bg-forest px-8 py-3 font-semibold text-mist">Send on WhatsApp</button>
</form>
          </div>
        </Section>
      </main>

      <footer className="bg-ink px-5 py-8 text-center text-sm text-mist/70">
        <p>© {new Date().getFullYear()} Work From Forest. Independent listing, not affiliated with the Kerala Forest Department.</p>
      </footer>
    </>
  );
}
