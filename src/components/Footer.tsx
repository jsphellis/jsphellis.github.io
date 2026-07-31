import React from 'react'

const linkStyle =
  'underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'

const Footer: React.FC = () => (
  <footer id="contact" className="mt-16 border-t border-hairline pt-10 pb-4">
    <p className="max-w-[34rem] font-display text-[1.15rem] leading-[1.5] text-ink">
      Open to interesting problems — particularly ones where the system is
      quietly lying about whether it worked.
    </p>

    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.85rem] text-muted">
      <a href="mailto:jsphellis.2020@gmail.com" className={linkStyle}>
        jsphellis.2020@gmail.com
      </a>
      <a
        href="https://github.com/jsphellis"
        target="_blank"
        rel="noopener noreferrer"
        className={linkStyle}
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/jsphellis"
        target="_blank"
        rel="noopener noreferrer"
        className={linkStyle}
      >
        LinkedIn
      </a>
    </div>

    <p className="mt-10 font-mono text-[0.66rem] tracking-[0.04em] text-muted">
      Next.js · Tailwind · Newsreader, Inter &amp; DM Mono · Los Angeles
    </p>
  </footer>
)

export default Footer
