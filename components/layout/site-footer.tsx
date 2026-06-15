// 사이트 하단 푸터 — 카피라이트 한 줄 + 간단 링크
import Link from "next/link"

// 비개발자 수정 포인트 — 브랜드명과 푸터 링크는 이 상수만 바꾸면 됨
const BRAND = "Next.js Starter Kit"
const FOOTER_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Next.js", href: "https://nextjs.org" },
  { label: "shadcn/ui", href: "https://ui.shadcn.com" },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground md:flex-row">
        <p>
          © {year} {BRAND}
        </p>
        <nav className="flex items-center gap-4">
          {FOOTER_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
