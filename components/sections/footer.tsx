import { profileData } from "@/content/profile";
import { siteData } from "@/content/site";
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/icons";

const socialLinks = [
  { label: "GitHub", url: profileData.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", url: profileData.socials.linkedin, Icon: LinkedinIcon },
  { label: "X", url: profileData.socials.twitter, Icon: XIcon },
  { label: "Facebook", url: profileData.socials.facebook, Icon: FacebookIcon },
].filter((s): s is typeof s & { url: string } => Boolean(s.url));

export function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          © {siteData.copyrightYear} {profileData.name}
          <span className="text-highlight">.</span>
        </p>

        <ul className="flex items-center gap-4">
          {socialLinks.map(({ label, url, Icon }) => (
            <li key={label}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-highlight"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
