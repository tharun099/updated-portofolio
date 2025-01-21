import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
}

export function TestimonialCard({ 
  author,
  text,
  href
}: TestimonialCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative flex w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-lg bg-card p-6 shadow transition-all duration-300 hover:shadow-lg",
        href && "cursor-pointer"
      )}
      {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm/6 font-medium text-muted-foreground">
          {text}
        </p>
        <div className="flex items-center gap-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-sm text-muted-foreground">{author.handle}</p>
          </div>
        </div>
      </div>
    </a>
  )
}