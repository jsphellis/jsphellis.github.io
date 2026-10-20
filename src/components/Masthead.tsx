import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/jsphellis', label: 'GitHub', external: true },
  { href: 'https://linkedin.com/in/jsphellis', label: 'LinkedIn', external: true },
  { href: 'mailto:jsphellis.2020@gmail.com', label: 'Email', external: true },
  { href: '/Joseph-Ellis-Resume.pdf', label: 'Résumé', external: true },
  { href: '/blog/', label: 'Writing', external: false },
]

const linkStyle =
  'text-muted underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'

// Split server-side so the staggered entrance needs no client JavaScript.
const thesis =
  'I build AI products. The model is usually the easy half.'.split(
    ' '
  )

const Masthead: React.FC = () => (
  <header className="pb-12 sm:pb-14">
    <div className="flex items-center gap-5">
      <div className="group relative shrink-0 overflow-hidden rounded-[3px] border border-hairline">
        {/* Plain img on purpose: images.unoptimized is on, so next/image adds
            ~5kB of client runtime and optimizes nothing for one fixed asset. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/headshot.jpg"
          alt="Joseph Ellis"
          width={80}
          height={80}
          decoding="async"
          className="h-20 w-20 object-cover"
        />
      </div>

      <div>
        <h1 className="text-[1.6rem] font-semibold tracking-[-0.02em] sm:text-[1.75rem]">
          Joseph Ellis
        </h1>
        <p className="mt-1.5 font-mono text-xs leading-relaxed text-muted">
          <span className="block sm:inline">AI Software Engineer at Buildy</span>
          <span className="hidden sm:inline"> · </span>
          <span className="block whitespace-nowrap sm:inline">Los Angeles</span>
        </p>
      </div>
    </div>

    <p className="mt-7 max-w-[34rem] font-display text-[1.3rem] leading-[1.45] text-ink sm:text-[1.45rem]">
      {thesis.map((word, i) => (
        <span
          key={i}
          className="thesis-word"
          style={{ animationDelay: `${120 + i * 38}ms` }}
        >
          {word}
          {i < thesis.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>

    <p className="mt-6 max-w-[38rem] text-[0.95rem] leading-[1.7]">
      I have a background in machine learning and data science. My own projects
      explore language-model agents, computer vision, and making data easier to
      work with.
    </p>

    <p className="mt-3 text-sm leading-relaxed text-muted">
      Mostly TypeScript, Python, React, and PostgreSQL.
    </p>

    <nav aria-label="Contact and writing" className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm">
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
