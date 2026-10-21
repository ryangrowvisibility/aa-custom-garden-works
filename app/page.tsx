import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(661) 379-9664";
const TEL = "tel:+16613799664";
const SMS = "sms:+16613799664";
const MAPS = "https://www.google.com/maps/search/?api=1&query=AA%20custom%20garden%20works&query_place_id=ChIJ6UaO-f1p6oARt2WW53w4ydY";
const FB = "https://www.facebook.com/p/AA-custom-garden-works-100057291715336";
const IG = "https://www.instagram.com/aacustomgardenworks661";
const ND = "https://nextdoor.com/pages/aa-custom-garden-works-llc-bakersfield-ca";

const services = [
  { icon: "grid", name: "Concrete Patios, Walkways & Driveways", text: "Patios to sit out on, walkways that connect the yard, and driveway work. Many of Jose's customers come back for a second and third concrete job, which says more about the finish than we can." },
  { icon: "box", name: "Block Walls", text: "Cinder block walls for privacy, boundaries and raised areas. A block wall is often the first step of a bigger backyard plan, and the crew builds it with the rest of the project in mind." },
  { icon: "sun", name: "Artificial Turf", text: "Synthetic lawn that stays green through a Bakersfield summer without the water bill. The crew levels the ground first, including sloped yards, so the turf lies flat and drains properly." },
  { icon: "home", name: "Full Backyard Renovations", text: "Patio additions, gazebos, upgraded flower beds and putting greens, designed with your family. Jose suggests ideas along the way that turn a single project into a backyard you love.", featured: true },
  { icon: "drop", name: "Irrigation", text: "Sprinkler and drip irrigation for beds and lawns, installed alongside the hardscape so everything is watered and nothing is dug up twice." },
  { icon: "hammer", name: "Demolition & Site Work", text: "Removal of old concrete, walls and plantings, plus grading and site prep, so the new work starts on a solid, level base." },
];

const featured = { name: "Adrianna S.", job: "Full backyard renovation", text: "It started as a cinder block wall. With Jose guiding every step, it grew into a concrete patio addition, a gazebo, upgraded flower beds and a putting green. The whole backyard is transformed." };

const reviews = [
  { name: "Nicole M.", job: "Concrete, three projects", text: "She has hired Jose three times. He shows up when he says he will, and his whole crew takes pride in the work, unlike contractors she used before." },
  { name: "Eva P.", job: "Sloped yard leveling", text: "A hard-working, respectful crew, there on time every morning. Leveling the slight hillside came out perfect and on schedule." },
  { name: "Connor A.", job: "Block walls, irrigation, demolition", text: "Years of jobs together: block walls, irrigation, site work and demolition. Always on time, clean and fairly priced." },
  { name: "Gonzalo T.", job: "Concrete and artificial lawn", text: "Used Jose for his own concrete project, then for his son's concrete and turf." },
  { name: "Jorge M.", job: "Artificial turf", text: "Very happy with how Jose's turf installation turned out." },
];

const steps = [
  { title: "Call or text Jose", text: "Tell him what you want to change in your yard. A few photos of the space are a big help." },
  { title: "Walk the yard together", text: "Jose comes out, measures, listens to how your family uses the space, and suggests options." },
  { title: "Clear quote and plan", text: "You get a straightforward price and a plan. Big makeovers can be done in phases, starting with a wall or patio." },
  { title: "The crew builds it", text: "On time every morning, respectful of your home, and cleaning up as they go." },
  { title: "Final walk-through", text: "You walk the finished yard with Jose and make sure everything is right." },
];

const faqs = [
  { q: "Do you work in my part of Bakersfield?", a: "AA Custom Garden Works is a Bakersfield company and works on homes across the city. Call to confirm your neighbourhood if you are on the edge of town." },
  { q: "Can you do a big backyard in stages?", a: "Yes. Several customers started with one job, like a block wall or a patio, and added a gazebo, turf, flower beds or a putting green later. Jose will plan the first phase so the later ones fit." },
  { q: "My yard is sloped. Can you still put in turf or a patio?", a: "Yes. The crew levels the ground first. One customer's slight hillside was leveled and finished on schedule." },
  { q: "Will Jose help with the design?", a: "Yes. Customers say his suggestions are what turned a small job into a full transformation. Bring your ideas and he will add his." },
  { q: "Do you clean up when the job is done?", a: "Yes. Reviews consistently mention a clean site, and demolition and haul-away are part of what the crew does." },
  { q: "How do I get a quote?", a: `Call or text ${PHONE}. Describe the project and send a few photos, and Jose will set up a time to look at the yard.` },
];

const photos = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "AA Custom Garden Works",
  telephone: "+1-661-379-9664",
  image: "/images/photo3.jpg",
  areaServed: "Bakersfield, CA",
  address: { "@type": "PostalAddress", addressLocality: "Bakersfield", addressRegion: "CA", addressCountry: "US" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "46" },
  founder: { "@type": "Person", name: "Jose Bravo" },
  sameAs: [FB, IG, ND],
  hasMap: MAPS,
};

export default function Home() {
  return (
    <>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <header className="sticky top-0 z-50 border-b border-line bg-[oklch(0.988_0.012_90/.95)] backdrop-blur">
        <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between gap-6 px-5 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="AA Custom Garden Works, back to top">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-cta"><Icon name="leaf" className="h-5 w-5" /></span>
            <span className="leading-none">
              <span className="block font-heading text-[1.125rem] font-bold text-brand-deep">AA Custom Garden Works</span>
              <span className="block pt-1 text-[0.8125rem] font-semibold text-muted">Bakersfield, CA</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[1rem] font-semibold lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About Jose</a>
            <a href="#work" className="hover:text-brand">Our Work</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="num hidden text-[1.125rem] font-bold text-brand-deep xl:block">{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden !min-h-12 md:inline-flex"><Icon name="phone" className="h-5 w-5" /> Call Jose</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-12 w-12 place-items-center rounded-full bg-cta text-brand-deep md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <div>
              <p className="rise eyebrow flex items-center gap-2 text-brand"><Icon name="pin" className="h-4 w-4" /> Bakersfield, California</p>
              <h1 className="rise d1 mt-4 text-brand-deep">Backyard Concrete, Block Walls &amp; Artificial Turf in Bakersfield</h1>
              <p className="rise d2 mt-5 max-w-[34rem] text-[1.1875rem] text-muted">
                Jose Bravo and his crew build patios, walls, turf lawns and full backyard makeovers. They show up on time, clean up, charge fairly, and customers keep calling them back for the next project.
              </p>
              <div className="rise d3 mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn btn-outline"><Icon name="text" className="h-5 w-5" /> Text photos of your yard</a>
              </div>
              <div className="rise d3 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[1rem] font-semibold">
                <span className="flex items-center gap-2"><Stars className="h-5 w-5" /> <span className="num">5.0</span></span>
                <a href={MAPS} target="_blank" rel="noopener" className="underline decoration-line underline-offset-4 hover:decoration-brand">46 Google reviews</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Owner Jose Bravo on every job</span>
              </div>
            </div>
            <div className="rise d2 grid grid-cols-[1.6fr_1fr] gap-3">
              <img src="/images/photo3.jpg" alt="Backyard project by AA Custom Garden Works in Bakersfield" className="row-span-2 h-full min-h-80 w-full rounded-2xl object-cover" />
              <img src="/images/photo1.jpg" alt="Recent concrete and landscape work" className="aspect-square w-full rounded-2xl object-cover" />
              <div className="flex flex-col justify-center rounded-2xl bg-brand p-5 text-white">
                <p className="font-heading text-3xl">5.0</p>
                <Stars className="mt-1 h-4 w-4" />
                <p className="mt-2 text-[0.9375rem] text-white/80">46 Google reviews, and Jose answers every one himself</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Why Bakersfield homeowners choose AA" className="border-y border-line bg-tint">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[["thumb", "5.0 stars", "46 Google reviews"], ["repeat", "Repeat customers", "hired again and again"], ["clock", "On time", "every morning"], ["tag", "Fair pricing", "mentioned in review after review"]].map(([i, a, b]) => (
              <li key={a} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-cta"><Icon name={i} className="h-5 w-5" /></span>
                <span className="leading-tight"><span className="block font-bold text-brand-deep">{a}</span><span className="text-[0.9375rem] text-muted">{b}</span></span>
              </li>
            ))}
          </ul>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <p className="eyebrow text-brand">Services</p>
              <h2 className="mt-2 text-brand-deep">Everything your backyard needs, from one crew</h2>
              <p className="mt-4 text-muted">Hardscape, turf, irrigation and the demolition before it. One company, so the pieces fit together.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`reveal lift flex flex-col rounded-2xl border bg-white p-7 ${s.featured ? "border-2 border-brand" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-cta px-3 py-1 text-[0.8125rem] font-bold text-brand-deep">Jose&rsquo;s specialty</span>}
                  </div>
                  <h3 className="mt-5 text-brand-deep">{s.name}</h3>
                  <p className="mt-3 flex-1 text-[1.0625rem] text-muted">{s.text}</p>
                  <a href={TEL} className="cardlink mt-5 inline-flex items-center gap-2 font-bold text-brand">Call about this <Icon name="arrow" className="arrow h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-brand">Reviews</p>
                <h2 className="mt-2 text-brand-deep">Rated 5.0 from 46 Google reviews</h2>
              </div>
              <a href={MAPS} target="_blank" rel="noopener" className="btn btn-outline">Read all reviews on Google <Icon name="arrow" className="arrow h-4 w-4" /></a>
            </div>
            <figure className="reveal mt-10 grid gap-6 rounded-2xl bg-brand-deep p-8 text-white md:grid-cols-[1.5fr_1fr] md:p-12">
              <div>
                <Stars className="h-5 w-5" />
                <blockquote className="mt-4 font-heading text-[1.4rem] leading-snug md:text-[1.65rem]">&ldquo;{featured.text}&rdquo;</blockquote>
                <figcaption className="mt-5 font-semibold text-white/85">{featured.name} · {featured.job} · Google review</figcaption>
              </div>
              <img src="/images/photo4.jpg" alt="A finished Bakersfield backyard by AA Custom Garden Works" className="h-full max-h-80 w-full rounded-xl object-cover" loading="lazy" />
            </figure>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal rounded-2xl border border-line bg-white p-6">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 text-[1.0625rem]">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 leading-tight"><span className="block font-bold text-brand-deep">{r.name}</span><span className="text-[0.9375rem] text-muted">{r.job} · Google review</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal order-2 lg:order-1">
              <p className="eyebrow text-brand">About</p>
              <h2 className="mt-2 text-brand-deep">Jose Bravo builds backyards people hire him for twice</h2>
              <p className="mt-5">AA Custom Garden Works is a Bakersfield hardscape and landscape contractor owned by Jose Bravo. The crew builds concrete patios, block walls, artificial turf, irrigation and full backyard makeovers.</p>
              <p className="mt-4">The thing customers repeat most is that they came back. One homeowner hired Jose three times for concrete. Another used him for his own project and then sent him to his son&rsquo;s house. A long-time client has worked with him for years on walls, irrigation and demolition. Jose also replies personally to every review he gets.</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[["clock", "Shows up when promised", "On site on time, every morning."], ["users", "A crew that takes pride", "Respectful, hard-working, careful at your home."], ["sprout", "Design ideas included", "Suggestions that make the whole yard work."], ["check", "Clean and fairly priced", "No mess left behind, no surprise pricing."]].map(([i, t, d]) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cta/30 text-brand-deep"><Icon name={i} className="h-5 w-5" /></span>
                    <span><span className="block font-bold">{t}</span><span className="text-[1rem] text-muted">{d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
            <img src="/images/photo2.jpg" alt="Work by Jose Bravo's crew" className="reveal order-1 aspect-[4/3] w-full rounded-2xl object-cover lg:order-2 lg:aspect-[4/5]" loading="lazy" />
          </div>
        </section>

        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal">
              <p className="eyebrow text-brand">How it works</p>
              <h2 className="mt-2 text-brand-deep">Five simple steps to a new backyard</h2>
              <p className="mt-4 text-muted">No pressure and no runaround. You talk to Jose from the first call to the final walk-through.</p>
              <a href={TEL} className="btn btn-cta mt-7"><Icon name="phone" className="h-5 w-5" /> Start with a call</a>
            </div>
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal flex gap-5 rounded-2xl border border-line bg-white p-6">
                  <span className="num grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand font-heading text-xl text-white">{i + 1}</span>
                  <span><h3 className="text-brand-deep">{s.title}</h3><span className="mt-1 block text-[1.0625rem] text-muted">{s.text}</span></span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-4">
              <div><p className="eyebrow text-brand">Our work</p><h2 className="mt-2 text-brand-deep">Recent Bakersfield projects</h2></div>
              <a href={IG} target="_blank" rel="noopener" className="cardlink inline-flex items-center gap-2 font-bold text-brand"><Icon name="instagram" className="h-5 w-5" /> More on Instagram <Icon name="arrow" className="arrow h-4 w-4" /></a>
            </div>
            <div className="mt-10 columns-2 gap-3 md:columns-3 lg:columns-4">
              {photos.map((n, i) => (
                <div key={n} className="zoom mb-3 overflow-hidden rounded-xl bg-brand-soft">
                  <img src={`/images/photo${n}.jpg`} alt={`AA Custom Garden Works project photo ${i + 1}`} loading="lazy" className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="reveal">
              <p className="eyebrow text-brand">Service area</p>
              <h2 className="mt-2 text-brand-deep">Local to Bakersfield</h2>
              <p className="mt-4 text-muted">AA Custom Garden Works is a Bakersfield crew working on Bakersfield homes. If you are just outside the city, call and ask.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                <li className="flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 font-semibold"><Icon name="pin" className="h-4 w-4 text-brand" /> Bakersfield, CA</li>
              </ul>
              <a href={TEL} className="btn btn-cta mt-8"><Icon name="phone" className="h-5 w-5" /> {PHONE}</a>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-line bg-white">
              <iframe title="Map of Bakersfield, California" src="https://maps.google.com/maps?q=Bakersfield%2C%20CA&z=11&output=embed" className="h-[380px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <div className="reveal text-center"><p className="eyebrow text-brand">FAQ</p><h2 className="mt-2 text-brand-deep">Common questions</h2></div>
            <div className="reveal mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-line bg-white px-6 py-5">
                  <summary className="flex items-start justify-between gap-6 text-[1.125rem] font-bold text-brand-deep">
                    {f.q}
                    <span className="tog mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand py-16 text-white md:py-20">
          <div className="reveal mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-white">Ready to start on your backyard?</h2>
              <p className="mt-3 max-w-xl text-white/80">Call or text Jose at {PHONE}. Tell him what you have in mind, send a few photos, and he will come take a look.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" /> Text Jose</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-deep pb-28 pt-14 text-white/80 md:pb-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
          <div>
            <p className="font-heading text-xl text-white">AA Custom Garden Works</p>
            <p className="mt-3 max-w-sm text-[1rem]">Concrete, block walls, artificial turf, irrigation and backyard renovations in Bakersfield, CA. Owner: Jose Bravo.</p>
            <a href={TEL} className="num mt-5 block text-2xl font-bold text-white">{PHONE}</a>
            <div className="mt-5 flex gap-3">
              <a href={FB} target="_blank" rel="noopener" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Icon name="facebook" className="h-5 w-5" /></a>
              <a href={IG} target="_blank" rel="noopener" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Icon name="instagram" className="h-5 w-5" /></a>
              <a href={ND} target="_blank" rel="noopener" aria-label="Nextdoor" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Icon name="home" className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <p className="font-bold text-white">Services</p>
            <ul className="mt-3 space-y-1.5 text-[1rem]">{services.map((s) => <li key={s.name}><a href="#services" className="hover:text-white">{s.name}</a></li>)}</ul>
          </div>
          <div>
            <p className="font-bold text-white">Find us</p>
            <ul className="mt-3 space-y-1.5 text-[1rem]">
              <li><a href={MAPS} target="_blank" rel="noopener" className="hover:text-white">Google reviews (5.0, 46)</a></li>
              <li><a href={MAPS} target="_blank" rel="noopener" className="hover:text-white">Directions</a></li>
              <li>Bakersfield, California</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1200px] border-t border-white/15 px-5 pt-6 text-[0.9375rem] md:px-6">© {new Date().getFullYear()} AA Custom Garden Works · Bakersfield, CA</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn btn-cta !min-h-12"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn btn-outline !min-h-12"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
