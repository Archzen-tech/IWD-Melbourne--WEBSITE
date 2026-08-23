import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
  as: Tag = 'h2',
  className,
}: {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'eyebrow mb-5 flex items-center gap-3',
            tone === 'light' ? 'text-background/55' : 'text-accent',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'h-px w-8',
              tone === 'light' ? 'bg-background/35' : 'bg-accent/50',
            )}
          />
          {eyebrow}
        </p>
      ) : null}

      <Tag
        className={cn(
          'font-serif font-light tracking-[-0.01em] text-balance',
          Tag === 'h1'
            ? 'text-[2.5rem] leading-[1.06] sm:text-6xl lg:text-7xl'
            : 'text-[2rem] leading-[1.1] sm:text-4xl lg:text-[3.25rem]',
          tone === 'light' ? 'text-background' : 'text-foreground',
        )}
      >
        {title}
      </Tag>

      {intro ? (
        <p
          className={cn(
            'mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-pretty',
            tone === 'light' ? 'text-background/65' : 'text-muted-foreground',
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  )
}
