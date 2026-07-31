import React from 'react'

interface SectionProps {
  id?: string
  label?: string
  children: React.ReactNode
}

/**
 * One column, one measure, one rule. With no cards anywhere, the rule and the
 * space around it are the only things separating one block from the next.
 */
const Section: React.FC<SectionProps> = ({ id, label, children }) => (
  <section id={id} className="reveal border-t border-hairline pt-10 sm:pt-12">
    {label && (
      <h2 className="mb-7 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
        {label}
      </h2>
    )}
    {children}
  </section>
)

export default Section
