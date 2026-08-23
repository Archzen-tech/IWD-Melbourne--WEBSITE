import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-[88rem] flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
      <p className="eyebrow text-accent flex items-center gap-3">
        <span aria-hidden="true" className="bg-accent/50 h-px w-8" />
        404
      </p>
      <h1 className="mt-6 max-w-2xl font-serif text-[2.5rem] leading-[1.06] font-light tracking-[-0.015em] text-balance sm:text-6xl">
        This page could not be found.
      </h1>
      <p className="text-muted-foreground mt-6 max-w-xl text-[1.0625rem] leading-relaxed">
        The page you were looking for may have moved. Head back to the homepage
        or browse our cabinetry services.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="bg-foreground text-background hover:bg-accent inline-flex items-center justify-center px-7 py-4 text-[0.6875rem] font-medium tracking-[0.14em] uppercase transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/services"
          className="border-foreground/25 hover:bg-foreground hover:text-background inline-flex items-center justify-center border px-7 py-4 text-[0.6875rem] font-medium tracking-[0.14em] uppercase transition-colors"
        >
          View Services
        </Link>
      </div>
    </section>
  )
}
