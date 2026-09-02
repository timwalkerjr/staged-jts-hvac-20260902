## 1. Site Info

SITE_TYPE: HVAC & Home Services (Plumbing, Heating, Cooling)
HTML_LANG: en

## 2. Color Token Mapping

```
---DESIGN_MD_START---
## Visual Theme
Modern, trustworthy HVAC contractor website with deep navy and warm cream background, crisp royal blue accent highlights, and rounded pill elements.

## Colors
- background: hsl(45 33% 98%)
- foreground: hsl(240 4% 9%)
- muted-foreground: hsl(240 4% 36%)
- border: hsl(45 12% 93%)
- surface: hsl(45 18% 96%)
- primary: hsl(210 100% 29%)
- primary-foreground: hsl(0 0% 100%)
- primary-hover: hsl(210 100% 22%)
- secondary: hsl(240 50% 11%)
- secondary-foreground: hsl(45 33% 98%)
- secondary-hover: hsl(240 48% 6%)
- dark-background: hsl(240 50% 11%)
- dark-foreground: hsl(45 33% 98%)
- dark-muted-foreground: hsl(40 12% 89%)
- dark-border: hsl(0 0% 100% / 0.1)
- accent: hsl(210 100% 29%)

## Page Background
solid hsl(45 33% 98%)

## Typography
- Heading font: REQUIRED slug `bricolage-grotesque` (weights: 400, 600, 700)
- Body font: REQUIRED slug `inter` (weights: 400, 500, 600, 700)

Typography scale:
- H1: 48px / line-height 1.2 / font-weight 600 / tracking -1.2px
- H2: 48px / line-height 1.25 / font-weight 600 / tracking -1.2px
- H3: 24px / line-height 1.25 / font-weight 600
- H4: 18px / line-height 1.4 / font-weight 600
- Body: 18px / line-height 1.625 / font-weight 400
- Small Body: 14px / line-height 1.625 / font-weight 400

## Components
- Buttons: Fully rounded pill shape (`rounded-full`), font-semibold, text-[14px] to text-[16px], padding `px-7 py-3.5` or `px-8 py-4`. Filled primary blue with white text, dark navy with white text, or outline/ghost.
- Badges/Pills: Small uppercase or title case badge tags with border `border-[hsl(45_12%_93%)]` or translucent white, text-[11px] font-semibold, `rounded-full`, padding `px-3 py-1`.
- Cards: Rounded cards with radius `rounded-2xl` or `rounded-3xl` (`rounded-[24px]` / `rounded-[32px]`), border `border-[hsl(45_12%_93%)]`, subtle hover lift and shadow.
---DESIGN_MD_END---
```

## 3. Navigation Spec

NAV_FULL_WIDTH: true
NAV_WIDTH: 100% (max-w-[1400px] mx-auto)
NAV_BACKGROUND: hsl(45 33% 98%)
NAV_BORDER_RADIUS: none
NAV_POSITION: fixed (sticky top-0 z-50 backdrop-blur-md bg-[hsl(45_33%_98%/0.95)] border-b border-[hsl(45_12%_93%)])
NAV_SHADOW: none
SCROLL_BEHAVIOR: none
NAV_DIVIDERS: none

Link style:
- fontSize: text-[14px]
- fontWeight: font-medium (500)
- fontFamily: "Inter"
- textTransform: normal-case, do NOT use uppercase
- letterSpacing: tracking-normal, do NOT use tracking-wide
- color: text-[hsl(240_4%_9%/0.8)] (hover: text-[hsl(210_100%_29%)])
- link row layout: distribution: center, pitchPx: 105, paddingX: px-3.5
- SINGLE LINE: whitespace-nowrap flex-nowrap
- active item highlight: "Home" link has active color `text-[hsl(210_100%_29%)]` and a small horizontal indicator bar below (`w-5 h-[3px] bg-[hsl(210_100%_29%)] rounded-full mx-auto mt-1`).

Logo:
- Presence: true
- Mark: circular worker mark image `/jt-logo-mark.png` sized `w-10 h-10`
- Wordmark: Two lines next to logo — "JT's Heating Cooling & Plumbing" (`text-[15px] font-semibold text-[hsl(240_4%_9%)]`) with sub-label "GRAND RAPIDS, MI" (`text-[10px] font-medium tracking-wider text-[hsl(240_4%_36%)] uppercase`).

Right Actions:
- Phone Link: `(616) 840-3105` with telephone icon (`ri-phone-line` / SVG), `text-[14px] font-medium text-[hsl(240_4%_9%/0.8)] flex items-center gap-2 mr-4`.
- CTA Button: Solid pill button "Book a Visit ↗", bg `hsl(210 100% 29%)`, text white, `rounded-full px-5 py-2.5 text-[14px] font-semibold flex items-center gap-1.5 shadow-sm hover:bg-[hsl(210_100%_22%)]`.

Dropdowns: none

## 4. Section Plan

### Hero Section id="hero"
  theme: DARK (contained dark image card inside light page background)
  background: bg-transparent (outer page is `hsl(45 33% 98%)`)
  contained panel: Outer container max-w-[1400px] mx-auto px-4 pt-4 pb-12. The hero box is a large rounded card `rounded-[32px] overflow-hidden relative min-h-[640px] flex items-center p-8 md:p-14` with background photo and dark overlay.
  text: text-white
  heading color: text-white
  heading size: text-[36px] md:text-[48px] font-semibold leading-[1.2] tracking-[-1.2px]
  heading transform/tracking: normal-case, tracking-tight
  body size: text-[18px] text-white/90 leading-[1.625]
  text alignment/placement: left-aligned (`text-left items-start`)
  layout: grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full z-10 relative
    - Left Column (lg:col-span-7): Badges, H1, paragraph, CTA button row.
    - Right Column (lg:col-span-5): 3 Quick-Action white service cards stacked vertically with gap-3.5.
  padding: pt-6 pb-6
  backgroundImage: `/images/19072266-a54c-45c1-93fc-083938698d93_compressed_geo-page-heat-pump-repairs-in-portland-mi-geo-page-main-imag-1024.webp` (object-cover absolute inset-0 w-full h-full)
  overlay: `linear-gradient(to right, rgba(14, 14, 42, 0.92) 0%, rgba(14, 14, 42, 0.65) 55%, rgba(14, 14, 42, 0.2) 100%)`
  content:
    - Top badges row:
      - Pill 1: Green pulsing indicator dot + "Serving Grand Rapids & West MI" (`bg-white/10 border border-white/25 text-white text-[12px] px-3 py-1 rounded-full flex items-center gap-2`).
      - Pill 2: Gold star icon + "5.0 · 27 Google reviews" (`text-white/90 text-[12px] flex items-center gap-1.5`).
    - H1: "Honest Heating, Cooling & Plumbing for <span class="inline-block bg-white text-[hsl(210_100%_29%)] px-2.5 py-0.5 rounded-lg italic mx-1">West</span> <span class="inline-block bg-white text-[hsl(210_100%_29%)] px-2.5 py-0.5 rounded-lg italic">Michigan</span> Homes & Families."
    - Paragraph: "No pressure, no upsells — just straight talk about what your home actually needs. Licensed and insured, owner-operated right here in Grand Rapids."
    - Buttons:
      - Solid primary button: "Book a Visit ↗" — `bg-[hsl(210_100%_29%)] hover:bg-[hsl(210_100%_22%)] text-white rounded-full px-7 py-3.5 text-[16px] font-semibold flex items-center gap-2`.
      - Glass button: "Request a Quote" — `bg-white/10 hover:bg-white/20 border border-white/25 text-white rounded-full px-7 py-3.5 text-[16px] font-semibold`.
    - Right stack 3 quick-action cards (each `bg-white text-[hsl(240_4%_9%)] rounded-2xl p-5 shadow-lg border border-black/5 hover:border-[hsl(210_100%_29%)] transition-all`):
      - Card 1: Top row with blue icon bubble (`w-10 h-10 rounded-full bg-[hsl(210_100%_29%/0.1)] text-[hsl(210_100%_29%)] flex items-center justify-center`), H3 title "No heat? I need furnace repair" (`text-[16px] font-semibold text-[hsl(210_100%_29%)]`), and pill badge "CALL FOR AVAILABILITY" (`text-[9px] uppercase font-bold tracking-wider bg-[hsl(210_100%_29%/0.1)] text-[hsl(210_100%_29%)] px-2.5 py-1 rounded-full`). Body text below: "Furnace won't start, making weird noises, or blowing cold air? Talk me through what's happening and I'll come check it out."
      - Card 2: Fan/AC icon bubble, H3 "A/C not cooling? I need service", badge "CALL FOR A QUOTE", body "Central air blowing warm or barely working? I'll diagnose what's going on and give you straight answers — repair or replace."
      - Card 3: Installation/unit icon bubble, H3 "I need a new system installed", badge "INSTALLATION ESTIMATES", body "Ready for a new furnace, A/C, heat pump, mini-split, or water heater? Honest sizing, clear pricing, clean install."

---

### Service Area Marquee id="service-ticker"
  theme: LIGHT
  background: bg-[hsl(45_18%_96%)]
  text: text-[hsl(240_4%_9%)]
  layout: flex overflow-hidden whitespace-nowrap py-6 border-y border-[hsl(45_12%_93%)]
  slider: ticker/marquee animation `animation: marquee 25s linear infinite` with repeated items:
    - Items (each has a blue map pin icon `ri-map-pin-2-line text-[hsl(210_100%_29%)]` + city name `text-[18px] md:text-[20px] font-semibold text-[hsl(240_4%_9%)] mr-12 inline-flex items-center gap-2`):
      - Greenville
      - Portland
      - Hudsonville
      - West Michigan
      - Grand Rapids
      - Saranac
      - Lowell
      - Kentwood
      - Wyoming
      - Ada
      - Walker
      - Rockford

---

### Services Grid Section id="services"
  theme: LIGHT
  background: bg-[hsl(45_33%_98%)]
  text: text-[hsl(240_4%_36%)]
  heading color: text-[hsl(240_4%_9%)]
  heading size: text-[36px] md:text-[48px] font-semibold tracking-tight
  body size: text-[18px]
  text alignment/placement: left-aligned
  layout: max-w-[1400px] mx-auto px-4 py-20
    - Header row: Flex items-end justify-between mb-12. Left has pill badge "• WHAT WE DO", H2 "Heating, cooling & plumbing done <span class="italic text-[hsl(210_100%_29%)]">honest and clean.</span>", and subtext "Furnaces, A/C, heat pumps, mini-splits, and water heaters across Grand Rapids. No confusing jargon, no surprise pricing." Right has outline button "See all services ↗" (`border border-[hsl(45_12%_93%)] bg-transparent text-[hsl(240_4%_9%)] rounded-full px-6 py-3.5 text-[16px] font-semibold hover:border-[hsl(210_100%_29%)] flex items-center gap-2`).
    - 6-Card Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
  content:
    - 6 Service Cards (each card is `bg-[hsl(45_33%_98%)] border border-[hsl(45_12%_93%)] rounded-[24px] overflow-hidden p-3 flex flex-col justify-between hover:shadow-xl transition-all duration-300`):
      1. Photo `/images/618e6cb8cb07dcae4dd93a4301bd5bf1-1024.webp` (rounded-[18px] h-[240px] object-cover relative with top badges "Residential" (white pill) and "Call for a Quote" (blue pill)). H3: "No heat / furnace repair", body: "Furnace not firing up? Cold spots in the house? I'll talk through your symptoms first, then get it sorted -- repair or replacement, no pressure.", link: "Book this service ↗" (`text-[14px] font-bold text-[hsl(240_4%_9%)] flex items-center gap-1 mt-6 hover:text-[hsl(210_100%_29%)]`).
      2. Photo `/images/f33b6fa9201fc584fadf20b63ea5ca57-1024.webp`. H3: "Furnace installation", body: "Full furnace replacement with honest sizing and clear upfront pricing. No upselling, just the right unit for your home.", link: "Book this service ↗".
      3. Photo `/images/eefa074dc27c46ce94494aa789dd4874-1024.webp`. H3: "A/C service & repair", body: "Central air not cooling like it should? Strange noises or warm air? I'll diagnose it honestly and give you straight options.", link: "Book this service ↗".
      4. Photo `/images/95a7e50288c3e70883e8385bfd0e090b-1024.webp`. H3: "Heat pump repair & replacement", body: "Ducted or ductless heat pump acting up? I'll walk you through what's wrong and whether repair or replacement makes more sense.", link: "Book this service ↗".
      5. Photo `/images/193174e3bfe254184d683b6c40ea0c02-1024.webp`. H3: "Ductless mini-split installation", body: "Stay comfortable in every room. Clean wall-mounted or ceiling cassette mini-splits installed with minimal disruption.", link: "Book this service ↗".
      6. Photo `/images/f9cfca79f916636594d0b200337a7ab6-1024.webp`. H3: "Water heater replacement", body: "No hot water or a leaking tank? I'll help you pick the right replacement and have it installed fast -- gas, electric or tankless.", link: "Book this service ↗".

---

### About / Owner Section id="about"
  theme: LIGHT
  background: bg-[hsl(45_18%_96%)]
  text: text-[hsl(240_4%_36%)]
  heading color: text-[hsl(240_4%_9%)]
  heading size: text-[36px] md:text-[48px] font-semibold tracking-tight
  body size: text-[18px]
  layout: max-w-[1400px] mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center
    - Left Column (lg:col-span-6): Pill badge "OWNER-OPERATED · LICENSED · INSURED", H2 "One local technician <span class="italic text-[hsl(210_100%_29%)] block">who listens before he quotes.</span>", paragraph "No call centres, no commissioned salespeople, no surprise fees. Just honest heating, cooling and plumbing by someone who lives and works right here in West Michigan."
    - Stat Grid: 3 columns:
      - "Local" / "WEST MICHIGAN SERVICE"
      - "Direct" / "TALK WITH JT"
      - "Clear" / "OPTIONS BEFORE WORK"
    - Trust badges row: 5 pill badges with green checkmark icons (`Fully licensed`, `Fully insured`, `Owner-operated`, `No-pressure pricing`, `Clean workmanship`).
    - Right Column (lg:col-span-6): Portrait photo `/images/jt-owner.webp` in a rounded container (`rounded-[32px] overflow-hidden relative shadow-lg aspect-[4/3]`). Bottom overlay card `bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white flex items-center justify-between mx-6 mb-6 absolute inset-x-0 bottom-0`: "Jordan Miller 'JT'" + "Owner · Grand Rapids, MI" + blue circle CTA button with arrow ↗.

---

### How It Works Section id="how-it-works"
  theme: LIGHT
  background: bg-[hsl(45_33%_98%)]
  text: text-[hsl(240_4%_36%)]
  heading size: text-[36px] md:text-[48px] font-semibold tracking-tight
  layout: max-w-[1400px] mx-auto px-4 py-24
    - Header: Badge "HOW IT WORKS", H2 "Three simple steps <span class="italic text-[hsl(210_100%_29%)]">to get it sorted.</span>", subtext "Getting your heat back or your A/C running shouldn't feel like a sales pitch. Here's what happens after you reach out."
    - 3-Step Cards: `grid grid-cols-1 md:grid-cols-3 gap-8 mt-12`
  content:
    - Card 01: `bg-[hsl(45_18%_96%)] border border-[hsl(45_12%_93%)] rounded-[32px] p-8 flex flex-col justify-between min-h-[300px]`:
      - Top row: Large number "01" (`text-[28px] font-bold text-[hsl(210_100%_29%)]`) + phone icon bubble.
      - H3: "Tell me what's going on" (`text-[22px] font-semibold text-[hsl(240_4%_9%)] mt-4`).
      - Body: "Call, text, or book online. Walk me through the symptoms -- I'll ask a few questions to get a sense of what's happening before I even show up."
    - Card 02: Top row "02" + clipboard/check icon bubble. H3 "I'll come check it out". Body: "I'll schedule the earliest visit that fits, diagnose the issue, talk through your options honestly, and give you a clear price before any work starts."
    - Card 03: Top row "03" + checkmark icon bubble. H3 "Fixed right, no drama". Body: "Repair or replacement -- whichever actually makes sense for your home. Clean work, tidy cleanup, and you're back to comfortable."

---

### Pricing Table Section id="pricing"
  theme: LIGHT
  background: bg-[hsl(45_18%_96%)]
  text: text-[hsl(240_4%_36%)]
  heading size: text-[36px] md:text-[48px] font-semibold tracking-tight
  layout: max-w-[1400px] mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start
    - Left Column (lg:col-span-5): Pill badge "CLEAR QUOTES", H2 "Honest pricing, <span class="italic text-[hsl(210_100%_29%)] block">clearly written.</span>", paragraph "Every home and system is different. JT will look at what is happening, explain the practical options, and give you a clear quote before any work begins.", buttons:
      - Primary button: "Check Availability ↗" — `bg-[hsl(240_50%_11%)] hover:bg-[hsl(240_48%_6%)] text-white rounded-full px-8 py-4 text-[16px] font-semibold flex items-center gap-2`.
      - Secondary button: "Quote details ↗" — `border border-[hsl(45_12%_93%)] bg-transparent text-[hsl(240_4%_9%)] rounded-full px-8 py-4 text-[16px] font-semibold flex items-center gap-2`.
    - Right Column (lg:col-span-7): Pricing list table.
  content:
    - Table header: "SERVICE" (left) and "PRICING" (right) in uppercase `text-[11px] font-bold text-[hsl(240_4%_36%)] tracking-wider pb-3 border-b border-[hsl(45_12%_93%)]`.
    - 5 Rows (each `bg-transparent border-b border-[hsl(45_12%_93%)] py-4 flex items-center justify-between`):
      1. Icon + Title "Furnace diagnostic" + subtext "Thorough inspection and honest diagnosis of any furnace issue." -> Price: "Call for a Quote" (`text-[14px] font-semibold text-[hsl(210_100%_29%)]`).
      2. Icon + Title "A/C diagnostic" + subtext "Full system check to find out why your A/C isn't cooling properly." -> Price: "Call for a Quote".
      3. Icon + Title "Furnace installation" + subtext "Full replacement with proper sizing -- no overselling, just the right unit." -> Price: "Call for a Quote".
      4. Icon + Title "A/C service & tune-up" + subtext "Clean coils, check refrigerant, test performance -- keeps your system running right." -> Price: "Call for a Quote".
      5. Icon + Title "Water heater replacement" + subtext "Gas, electric or tankless -- I'll help you choose what works best for your home." -> Price: "Call for a Quote".
    - Disclaimer note below table: Info icon + "Final cost depends on the equipment and scope. You'll always receive a quote before the job starts." (`text-[12px] text-[hsl(240_4%_36%)] mt-4`).

---

### Testimonials Carousel Section id="reviews"
  theme: LIGHT
  background: bg-[hsl(45_33%_98%)]
  text: text-[hsl(240_4%_9%)]
  layout: max-w-[1400px] mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center
    - Left Column (lg:col-span-7):
      - Top: Large double quote SVG icon (`text-[hsl(210_100%_29%/0.3)] w-16 h-16 mb-6`) + Star rating badge: "★ 5.0 · 27 GOOGLE REVIEWS".
      - Carousel Slide Review Text: `text-[24px] md:text-[28px] font-medium leading-[1.4] text-[hsl(240_4%_9%)] my-6`
      - Reviewer Name: `text-[18px] font-semibold text-[hsl(240_4%_9%)]`
      - Reviewer Meta: `text-[14px] text-[hsl(240_4%_36%)]` + 5 gold stars.
      - Carousel Controls: Horizontal progress indicator bar with active segment + Prev/Next circle buttons (`w-10 h-10 rounded-full border border-[hsl(45_12%_93%)] flex items-center justify-center hover:border-[hsl(210_100%_29%)]`).
      - Link: "Read all 27 reviews ↗" (`text-[14px] font-semibold text-[hsl(210_100%_29%)] mt-6 block`).
    - Right Column (lg:col-span-5): Photo of satisfied customers `/images/5f0852eec03568e5bd7c5ddb0aca2662-1024.webp` (`rounded-[32px] overflow-hidden shadow-xl aspect-[4/5] object-cover w-full`).
  slider:
    totalSlides: 6
    visibleAtOnce: 1
    slideType: testimonial quote
    items:
      1. Quote: "Jordan was fantastic. He came out quickly, explained everything along the way, and we had A/C again during the heat wave! Use JT's!!!!!" | Author: Jim | Verified Google review · Aug 2026
      2. Quote: "Jordan was very knowledgeable and professional. He was able to give us some energy saving tips. I highly recommend him!" | Author: Charissa Hunter | Verified Google review · Jul 2026
      3. Quote: "Great experience with JT's Heating Cooling and Plumbing. Quick response, fair pricing, and our AC was fixed the same day. Honest, professional service with excellent communication throughout the process. The issue was diagnosed quickly, repaired on the spot, and everything is working great. Highly recommend!" | Author: Roxy C | Verified Google review · Jul 2026
      4. Quote: "Excellent service and great guy! I reached out to him at 7am and he was at my house at 10am and was quick to fix my AC issue. Even provided tips to keep it working and charge was very reasonable. He is now my go-to for heating & cooling!" | Author: Mary McCarty | Verified Google review · Jul 2026
      5. Quote: "Had Jordan out for a quote and he was great! Very kind and helpful, got to the house quickly and communicated well! From my interaction so far, it's been great!" | Author: Lacey T | Verified Google review · Jul 2026
      6. Quote: "Jordan did a fantastic job doing our yearly AC inspection and tune-up. I have already committed to having him back out in the Fall for our furnace maintenance. He is friendly, knowledgeable, thorough, and his prices are excellent. Highly recommend!" | Author: Jenn Love-Kippen | Verified Google review · Jul 2026

---

### Service Area Grid Section id="area"
  theme: LIGHT
  background: bg-[hsl(45_18%_96%)]
  text: text-[hsl(240_4%_36%)]
  heading size: text-[36px] md:text-[48px] font-semibold tracking-tight
  layout: max-w-[1400px] mx-auto px-4 py-24
    - Header row: Flex items-end justify-between mb-12. Left has badge "WHERE WE WORK", H2 "Serving <span class="italic text-[hsl(210_100%_29%)]">Grand Rapids</span> and <br/>West Michigan homes & businesses." Right has outline button "See service area ↗".
    - 4-Card Row: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
  content:
    - Card 1: `bg-[hsl(45_33%_98%)] border border-[hsl(45_12%_93%)] rounded-[32px] overflow-hidden p-3 hover:shadow-lg transition-all`:
      - Image `/images/1430bc1d1a6368af376e246c66a87060-1024.webp` (`h-[200px] rounded-[24px] object-cover w-full`).
      - Title: "Grand Rapids" (`text-[22px] font-semibold text-[hsl(240_4%_9%)] mt-4`).
      - Zip codes: "49503 · 49505" (`text-[12px] font-semibold text-[hsl(240_4%_36%)]`).
      - Subtext: "Home base -- call for current availability."
    - Card 2: Image `/images/1b40c8d9493c040849576be631d10da0-1024.webp`, Title: "Kentwood", Zip codes: "49508 · 49512", Subtext: "Family neighborhoods and suburban homes."
    - Card 3: Image `/images/8f9ee504c8755e8d94ca6fb1ead68ad9-1024.webp`, Title: "Wyoming", Zip codes: "49509 · 49519", Subtext: "Heating, cooling, and water heater help."
    - Card 4: Image `/images/86bc8bb2bf53e3942070afba8978acb0-1024.webp`, Title: "Rockford & North", Zip codes: "49341 · 49321", Subtext: "Homes, cabins and lakeside properties up north."

---

### FAQ Section id="faq"
  theme: LIGHT
  background: bg-[hsl(45_33%_98%)]
  text: text-[hsl(240_4%_36%)]
  heading size: text-[36px] md:text-[48px] font-semibold tracking-tight
  layout: max-w-[1400px] mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start
    - Left Column (lg:col-span-5): Pill badge "FAQ", H2 "Quick answers, <span class="italic text-[hsl(210_100%_29%)] block">no sales pitch.</span>", paragraph "Something not covered here? Call or send a message -- I'll get back to you as soon as I can."
    - Right Column (lg:col-span-7): Accordion items stack with gap-4.
  accordion:
    - Q1: "Do you handle emergency calls?"
      A1: "Yes, when the schedule allows. If your furnace dies on a freezing night or your A/C quits during a heat wave, call me -- I'll fit you in as soon as I possibly can. For gas leaks or safety issues, call 911 and your utility company first."
    - Q2: "Are you licensed and insured?"
      A2: "Yes -- fully licensed and insured in the state of Michigan. I'm an owner-operated business, so the person you talk to on the phone is the same person who shows up at your door. Happy to share paperwork before any job."
    - Q3: "How does pricing work?"
      A3: "Once I've seen your system and diagnosed the issue, I'll give you a clear quote before starting any work. Repair vs. replacement -- I'll walk you through both options honestly, with no pressure either way."
    - Q4: "What brands of equipment do you work on?"
      A4: "I work on all major brands -- Carrier, Trane, Lennox, Rheem, Goodman, American Standard, Bryant, and more. If you've got a furnace, A/C, heat pump, or water heater that needs attention, I can help."
    - Accordion styling: `<details class="group bg-[hsl(45_18%_96%/0.5)] border border-[hsl(45_12%_93%)] rounded-2xl p-6 transition-all [&_summary::-webkit-details-marker]:hidden">` with plus/chevron icon rotating on open.

---

### Final CTA Section id="cta"
  theme: LIGHT (soft light blue panel)
  background: bg-[hsl(211_100%_95%)]
  text: text-[hsl(240_4%_36%)]
  heading color: text-[hsl(240_4%_9%)]
  heading size: text-[36px] md:text-[48px] font-semibold tracking-tight
  text alignment/placement: center (`text-center items-center flex flex-col`)
  layout: max-w-[1400px] mx-auto px-4 py-24 flex flex-col items-center text-center
  content:
    - Badge: Pill tag "• READY WHEN YOU ARE" (`bg-white border border-[hsl(45_12%_93%)] text-[hsl(240_4%_36%)] text-[11px] font-semibold px-4 py-1.5 rounded-full mb-6`).
    - H2: "Local heating & cooling, <span class="italic text-[hsl(210_100%_29%)] block">just around the corner.</span>"
    - Subtext: "Send a request in under a minute, or call JT for current availability." (`text-[18px] text-[hsl(240_4%_36%)] max-w-[600px] mt-4 mb-8`)
    - Buttons:
      - Primary solid button: "Book Appointment ↗" — `bg-[hsl(240_50%_11%)] hover:bg-[hsl(240_48%_6%)] text-white rounded-full px-8 py-4 text-[16px] font-semibold flex items-center gap-2`.
      - Outline button: "Request a Quote ↗" — `border border-[hsl(45_12%_93%)] bg-transparent text-[hsl(240_4%_9%)] rounded-full px-8 py-4 text-[16px] font-semibold hover:border-[hsl(210_100%_29%)] flex items-center gap-2`.

---

## 5. Favicon

Instruct the builder to call `generate_favicon` with site name "JT's Heating Cooling & Plumbing" and brand color `#004A94`.

## 6. Footer

Style: `bg-[hsl(240_50%_11%)] text-white rounded-[32px] mx-4 my-4 p-10 md:p-16 relative overflow-hidden`
Text color: `text-[hsl(40_12%_89%)]`
Columns: 3 main content columns + watermark background text + bottom legal row
Content alignment: left/start

Content layout:
- Top Grid (`grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10`):
  - Column 1 (md:col-span-5):
    - Logo + Brand: Circular logo `/jt-logo-mark.png` + "JT's Heating Cooling & Plumbing" (`text-[18px] font-bold text-white`) + "GRAND RAPIDS, MI" (`text-[11px] tracking-wider text-white/60`).
    - Paragraph: "Honest, no-pressure heating, cooling, and plumbing for homes across Grand Rapids and West Michigan. Licensed and insured, owner-operated." (`text-[14px] text-white/70 leading-relaxed mt-4 max-w-[380px]`).
    - Status Badge: Green dot + "Call for current availability" (`text-[12px] text-white/80 mt-6 flex items-center gap-2`).
  - Column 2 (md:col-span-3):
    - Heading: "EXPLORE" (`text-[12px] uppercase tracking-[2.16px] text-white/60 font-semibold mb-4`).
    - Phone link: Phone icon + `(616) 840-3105` (`text-[14px] text-white/80 hover:text-white flex items-center gap-2 mb-2`).
    - Location: Map pin icon + `Grand Rapids, MI` (`text-[14px] text-white/80 flex items-center gap-2`).
  - Column 3 (md:col-span-4):
    - Heading: "BOOK A VISIT" (`text-[12px] uppercase tracking-[2.16px] text-white/60 font-semibold mb-4`).
    - Text: "Need a service call? Book online in about a minute, or call us directly." (`text-[14px] text-white/70 mb-4`).
    - Button: "Book a Visit ↗" (`bg-[hsl(210_100%_29%)] hover:bg-[hsl(210_100%_22%)] text-white rounded-full px-6 py-3 text-[14px] font-semibold inline-flex items-center gap-1.5`).
    - Trust badges below: Lock/shield icons with text "LICENSED · INSURED · OWNER-OPERATED" (`text-[11px] uppercase tracking-wider text-white/60 mt-4 flex items-center gap-2`).

- Background Watermark:
  - Big faint stylized text behind footer content: "JT’S HEATING COOLING & PLUMBING" (`text-[64px] md:text-[110px] font-bold text-white/[0.03] select-none pointer-events-none absolute bottom-12 inset-x-0 text-center whitespace-nowrap overflow-hidden`).

- Bottom Legal Bar (`border-t border-white/10 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60 relative z-10`):
  - Copyright: "© 2026 JT'S HOME SERVICES LLC · Grand Rapids, MI"
  - Legal links: `Privacy` | `Terms` | `Insurance` (`hover:text-white transition-colors flex gap-6`)
  - Credits: "Web Design and SEO by twalkerco" (`hover:text-white transition-colors`)

## 7. Files

MODIFY:
- `src/layouts/Layout.astro`
- `src/components/Navigation.astro`
- `src/components/Footer.astro`
- `src/styles/global.css`

CREATE:
- `src/components/home/Hero.astro`
- `src/components/home/ServiceTicker.astro`
- `src/components/home/ServicesGrid.astro`
- `src/components/home/AboutOwner.astro`
- `src/components/home/HowItWorks.astro`
- `src/components/home/PricingTable.astro`
- `src/components/home/Testimonials.astro`
- `src/components/home/ServiceAreaGrid.astro`
- `src/components/home/FAQ.astro`
- `src/components/home/FinalCTA.astro`
- `src/pages/index.astro`
## Element inventory (extracted — reproduce ALL of these)

Machine-generated from the capture, not prose. Every icon listed below is
present in the source and in that section's ported `html` in
`index.sections.json`. Render each one: copy its `<svg>` from the ported
markup verbatim (keeping its `viewBox` and path data), size it to the
measured box, and paint it with the captured fill — `fill="none"` on an
icon that has a fill leaves it invisible. If a section below lists icons
and your component has none, the component is incomplete.

### Site header / navigation (port into Navigation.astro)
- `viewBox="0 0 24 24"` — 16x16px, fill `oklab(0.201052 0.00109904 -0.00378704 / 0.8)` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — 16x16px, fill `inherit` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — size not captured, fill `inherit`
### Honest Heating, Cooling & Plumbing for West Michigan Homes & Families.
- `viewBox="0 0 24 24"` — 14x14px, fill `oklch(0.828 0.189 84.429)` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — 18x18px, fill `inherit` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — 18x18px, fill `rgb(0, 74, 148)` — inline affordance (arrow/chevron)
### Heating, cooling & plumbing done honest and clean.
- `viewBox="0 0 24 24"` — 20x20px, fill `inherit` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — 12x12px, fill `rgb(14, 14, 42)` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — 16x16px, fill `inherit` — inline affordance (arrow/chevron)
### One local technician who listens before he quotes.
- `viewBox="0 0 24 24"` — 16x16px, fill `inherit` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — 20x20px, fill `inherit` — inline affordance (arrow/chevron)
### Three simple steps to get it sorted.
- `viewBox="0 0 24 24"` — 20x20px, fill `inherit` — inline affordance (arrow/chevron)
### Honest pricing, clearly written.
- `viewBox="0 0 24 24"` — 20x20px, fill `inherit` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — 20x20px, fill `inherit` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — 20x20px, fill `rgb(0, 74, 148)` — inline affordance (arrow/chevron)
### (unnamed section)
- `viewBox="0 0 24 24"` — 64x64px, fill `rgb(0, 74, 148)` — section icon
- `viewBox="0 0 24 24"` — 15x15px, fill `oklch(0.828 0.189 84.429)` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — 18x18px, fill `inherit` — inline affordance (arrow/chevron)
### Serving Grand Rapids and West Michigan homes & businesses.
- `viewBox="0 0 24 24"` — 20x20px, fill `inherit` — inline affordance (arrow/chevron)
### Quick answers, no sales pitch.
- `viewBox="0 0 24 24"` — 16x16px, fill `inherit` — inline affordance (arrow/chevron)
### Local heating & cooling, just around the corner.
- `viewBox="0 0 24 24"` — 20x20px, fill `inherit` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — 20x20px, fill `inherit` — inline affordance (arrow/chevron)
### Site footer (port into Footer.astro)
- `viewBox="0 0 24 24"` — 16x16px, fill `oklab(0.999994 0.0000455677 0.0000200868 / 0.8)` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — 16x16px, fill `rgb(230, 228, 224)` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — 16x16px, fill `inherit` — inline affordance (arrow/chevron)
