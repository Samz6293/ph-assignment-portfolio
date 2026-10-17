import { MessageCircle, Phone } from "lucide-react";
import { profileData } from "@/content/profile";
import { CopyButton } from "@/components/copy-button";
import { SectionHeading } from "@/components/section-heading";
import { WhatsappIcon } from "@/components/icons";
import type { SectionProps } from "@/components/sections";

const { contact } = profileData;

function formatPhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

export function Contact({ index, label }: SectionProps) {
  return (
    <section id="contact" className="scroll-mt-14 border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index={index}
          label={label}
          description="Open to opportunities and collaboration — the fastest way to reach me is email."
        />

        <div className="max-w-3xl">
          {/* Email — the centerpiece */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="font-mono text-xl break-all transition-colors hover:text-highlight focus-visible:ring-3 focus-visible:ring-ring/50 outline-none sm:text-2xl md:text-3xl"
            >
              {contact.email}
            </a>
            <CopyButton text={contact.email} className="shrink-0" />
          </div>

          {/* Phone / WhatsApp */}
          <dl className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
            {contact.phone ? (
              <div className="bg-background p-6">
                <dt className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  <Phone className="size-3.5" />
                  Phone
                </dt>
                <dd className="mt-3">
                  <a
                    href={`tel:${formatPhone(contact.phone)}`}
                    className="text-sm transition-colors hover:text-highlight"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
            ) : null}

            {contact.whatsapp ? (
              <div className="bg-background p-6">
                <dt className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  <MessageCircle className="size-3.5" />
                  WhatsApp
                </dt>
                <dd className="mt-3">
                  <a
                    href={`https://wa.me/${formatPhone(contact.whatsapp).replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm transition-colors hover:text-highlight"
                  >
                    <WhatsappIcon className="size-4" />
                    {contact.whatsapp}
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </div>
    </section>
  );
}
