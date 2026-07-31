import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/jsphellis', label: 'GitHub', external: true },
  { href: 'https://linkedin.com/in/jsphellis', label: 'LinkedIn', external: true },
  { href: 'mailto:jsphellis.2020@gmail.com', label: 'Email', external: true },
  { href: '/2025_Resume.pdf', label: 'Résumé', external: true },
  { href: '/blog/', label: 'Blog', external: false },
]

const linkStyle =
  'text-muted underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'

const Masthead: React.FC = () => (
  <header className="pb-12 sm:pb-14">
    <div className="flex items-center gap-5">
      {/* Toned into the one-hue system at rest, full colour on hover — the
          photo is the only thing on the page that isn't already this blue. */}
      <div className="group relative shrink-0 overflow-hidden rounded-[3px] border border-hairline">
        <Image
          src="/headshot.jpg"
          alt="Joseph Ellis"
          width={72}
          height={72}
          priority
          className="h-[72px] w-[72px] object-cover [filter:grayscale(1)_sepia(0.32)_hue-rotate(172deg)_saturate(1.15)] transition-[filter] duration-500 ease-out hover:[filter:none]"
        />
      </div>

      <div>
        <h1 className="text-[1.6rem] font-semibold tracking-[-0.02em] sm:text-[1.75rem]">
          Joseph Ellis
        </h1>
        <p className="mt-1.5 font-mono text-[0.72rem] tracking-[0.02em] text-muted">
          Software Engineer at Buildy · Los Angeles
        </p>
      </div>
    </div>

    <p className="mt-7 max-w-[34rem] font-display text-[1.3rem] leading-[1.45] text-ink sm:text-[1.45rem]">
      I build AI products that hold up in production — and I&apos;d rather
      measure a system than trust it.
    </p>

    <nav className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[0.85rem]">
      {links.map((link) =>
        link.external ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            {link.label}
          </a>
        ) : (
          <Link key={link.label} href={link.href} className={linkStyle}>
            {link.label}
          </Link>
        )
      )}
    </nav>
  </header>
)

export default Masthead
