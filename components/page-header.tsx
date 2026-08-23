import Image from 'next/image'

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  intro?: string
  image?: string
  imageAlt?: string
}) {
  const hasImage = Boolean(image)

  return (
    <header
      className={
        hasImage
          ? 'bg-charcoal relative isolate flex min-h-[52svh] items-end overflow-hidden lg:min-h-[60svh]'
          : 'border-border/70 bg-muted/40 border-b'
      }
    >
      {hasImage ? (
        <>
          <Image
            src={image as string}
            alt={imageAlt ?? ''}
            aria-hidden={imageAlt ? undefined : true}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="from-charcoal/90 via-charcoal/50 absolute inset-0 bg-gradient-to-t to-transparent"
          />
        </>
      ) : null}

      <div className="relative mx-auto w-full max-w-[88rem] px-5 pt-32 pb-14 sm:px-8 lg:px-12 lg:pt-40 lg:pb-20">
        <p
          className={`eyebrow flex items-center gap-3 ${
            hasImage ? 'text-background/70' : 'text-accent'
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-px w-8 ${hasImage ? 'bg-background/40' : 'bg-accent/50'}`}
          />
          {eyebrow}
        </p>

        <h1
          className={`mt-6 max-w-4xl font-serif text-[2.5rem] leading-[1.06] font-light tracking-[-0.015em] text-balance sm:text-6xl lg:text-7xl ${
            hasImage ? 'text-background' : 'text-foreground'
          }`}
        >
          {title}
        </h1>

        {intro ? (
          <p
            className={`mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-pretty lg:text-lg ${
              hasImage ? 'text-background/70' : 'text-muted-foreground'
            }`}
          >
            {intro}
          </p>
        ) : null}
      </div>
    </header>
  )
}
