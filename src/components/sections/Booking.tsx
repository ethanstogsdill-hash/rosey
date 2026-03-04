"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site-config";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Booking() {
  const { t, tHtml } = useLanguage();

  return (
    <section
      id="booking"
      className="text-center relative overflow-hidden section-padding"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="container relative">
        <ScrollReveal className="text-center">
          <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-5">
            {t("booking-label", "BOOK YOUR CUT")}
          </div>
          <h2
            className="font-heading text-[32px] md:text-[48px] uppercase leading-[1.05] mb-6 [&>em]:not-italic [&>em]:text-gold"
            dangerouslySetInnerHTML={{
              __html: tHtml(
                "booking-heading",
                'Ready to Look <em>Sharp?</em>'
              ),
            }}
          />
        </ScrollReveal>
        <ScrollReveal className="max-w-[600px] mx-auto mb-12">
          <p className="text-muted-foreground text-[1.05rem] leading-[1.7]">
            {t(
              "booking-intro",
              "Walk-ins welcome. Appointments recommended for guaranteed seating. Pick your barber and lock in your spot below."
            )}
          </p>
        </ScrollReveal>

        {/* Booking mockup */}
        <ScrollReveal>
          <div className="relative max-w-[900px] mx-auto mb-10 bg-card border border-[rgba(212,175,55,0.12)] rounded-[16px] overflow-hidden p-10 md:p-14">
            <div className="text-center text-xs font-semibold tracking-widest uppercase text-gold mb-10">
              {t("booking-widget-label", "What It Will Look Like")}
            </div>
            <div className="flex flex-col md:flex-row gap-6 max-w-[760px] mx-auto">
              <div className="md:w-[200px] flex md:flex-col gap-2.5 flex-wrap">
                {["Alirio", "Alex", "Luis", "Brayan", "Jose"].map(
                  (name, i) => (
                    <div
                      key={name}
                      className={`flex-1 md:flex-none px-4 py-3 rounded-lg flex items-center gap-2.5 text-[0.85rem] min-w-[120px] ${
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
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-2">
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
                      className={`py-3 rounded-lg text-center text-[0.82rem] ${
                        i === 1
                          ? "border border-gold text-gold"
                          : "bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-muted-foreground"
                      }`}
                    >
                      {time}
                    </div>
                  ))}
                </div>
                <div className="mt-3 py-3.5 rounded-full bg-gold text-background text-center text-[0.9rem] font-semibold tracking-wider">
                  {t("booking-confirm", "CONFIRM BOOKING")}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-4">
          <div className="text-muted-foreground text-[0.85rem] tracking-wider mb-5">
            {t(
              "booking-fallback",
              "HAVING TROUBLE? BOOK DIRECTLY ON BOOKSY"
            )}
          </div>
          <a
            href={siteConfig.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-12 py-4 bg-gold text-[#0A0A0A] text-[1.05rem] font-semibold rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,175,55,0.35)] transition-all w-full sm:w-auto"
          >
            {t("booking-booksy-btn", "Book on Booksy")}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
