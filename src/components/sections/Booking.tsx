"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site-config";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Booking() {
  const { t, tHtml } = useLanguage();

  return (
    <section
      id="booking"
      className="text-center relative overflow-hidden py-[60px]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,169,110,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="container relative">
        <ScrollReveal className="text-center">
          <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">
            {t("booking-label", "BOOK YOUR CUT")}
          </div>
          <h2
            className="font-heading text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-[1.2] mb-6 [&>em]:italic [&>em]:text-gold"
            dangerouslySetInnerHTML={{
              __html: tHtml(
                "booking-heading",
                'Ready to Look <em style="font-style:italic;color:var(--gold);">Sharp?</em>'
              ),
            }}
          />
        </ScrollReveal>
        <ScrollReveal className="max-w-[600px] mx-auto mb-10">
          <p className="text-muted-foreground text-base leading-[1.7]">
            {t(
              "booking-intro",
              "Walk-ins welcome. Appointments recommended for guaranteed seating. Pick your barber and lock in your spot below."
            )}
          </p>
        </ScrollReveal>

        {/* Booking mockup */}
        <ScrollReveal>
          <div className="relative max-w-[900px] mx-auto mb-8 bg-card border border-[rgba(201,169,110,0.12)] rounded-[12px] overflow-hidden p-8 md:p-12">
            <div className="text-center text-xs font-semibold tracking-widest uppercase text-gold mb-8">
              {t("booking-widget-label", "What It Will Look Like")}
            </div>
            <div className="flex flex-col md:flex-row gap-5 max-w-[760px] mx-auto">
              <div className="md:w-[200px] flex md:flex-col gap-2.5 flex-wrap">
                {["Alirio", "Alex", "Luis", "Brayan", "Jose"].map(
                  (name, i) => (
                    <div
                      key={name}
                      className={`flex-1 md:flex-none px-4 py-3 rounded-lg flex items-center gap-2.5 text-[0.82rem] min-w-[120px] ${
                        i === 0
                          ? "border border-gold text-foreground"
                          : "bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          i === 0 ? "bg-gold" : "bg-muted-foreground"
                        }`}
                      />
                      {name}
                    </div>
                  )
                )}
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="h-3 rounded-md bg-[rgba(255,255,255,0.06)] w-[65%]" />
                <div className="h-3 rounded-md bg-[rgba(255,255,255,0.06)] w-[40%]" />
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2.5 mt-1">
                  {[
                    "9:00 AM",
                    "10:30 AM",
                    "11:00 AM",
                    "12:30 PM",
                    "1:00 PM",
                    "2:30 PM",
                    "3:00 PM",
                    "4:30 PM",
                  ].map((time, i) => (
                    <div
                      key={time}
                      className={`py-2.5 rounded-lg text-center text-[0.78rem] ${
                        i === 1
                          ? "border border-gold text-gold"
                          : "bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-muted-foreground"
                      }`}
                    >
                      {time}
                    </div>
                  ))}
                </div>
                <div className="mt-2 py-3 rounded-lg bg-gold text-background text-center text-[0.85rem] font-semibold tracking-wider">
                  {t("booking-confirm", "CONFIRM BOOKING")}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-2">
          <div className="text-muted-foreground text-[0.85rem] tracking-wider mb-4">
            {t(
              "booking-fallback",
              "HAVING TROUBLE? BOOK DIRECTLY ON BOOKSY"
            )}
          </div>
          <a
            href={siteConfig.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-12 py-4 bg-gold text-[#1a1a1a] text-[1.05rem] font-semibold rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(201,169,110,0.3)] transition-all"
          >
            {t("booking-booksy-btn", "Book on Booksy")}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
