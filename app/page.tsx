// 메인 페이지 — 스타터킷 소개 (Hero / What's Included / Quick Start / CTA)
import Link from "next/link"
import { ArrowRight, FormInput, Moon, Palette, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// 비개발자 수정 포인트 — 사이트 이름과 소개 문구
const STARTER_NAME = "Next.js Starter Kit"
const STARTER_TAGLINE = "범용 웹사이트 셸 — 어떤 주제든 빠르게 시작하세요"

// 비개발자 수정 포인트 — 카드로 노출할 핵심 기능 4가지
const FEATURES: ReadonlyArray<{ title: string; desc: string; icon: typeof Zap }> = [
  { title: "Next.js 16 App Router", desc: "최신 RSC와 라우팅 컨벤션 적용", icon: Zap },
  { title: "Tailwind v4 + shadcn", desc: "radix-nova 스타일의 디자인 토큰 일체", icon: Palette },
  { title: "다크모드", desc: "next-themes로 light/dark/system 지원", icon: Moon },
  { title: "Form 검증", desc: "React Hook Form + Zod 즉시 사용 가능", icon: FormInput },
]

const QUICK_START = `git clone <your-repo>
npm install
npm run dev`

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-16 md:py-24">
      <section className="flex flex-col items-start gap-4 md:items-center md:text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{STARTER_NAME}</h1>
        <p className="max-w-xl text-muted-foreground md:text-lg">{STARTER_TAGLINE}</p>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link href="/components">
              컴포넌트 살펴보기
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </Link>
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">포함된 것</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ title, desc, icon: Icon }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="size-5 text-primary" />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">시작하기</h2>
        <Card>
          <CardContent>
            <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm leading-relaxed">
              <code>{QUICK_START}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col items-start gap-3 md:items-center md:text-center">
        <h2 className="text-2xl font-semibold tracking-tight">바로 시작해보세요</h2>
        <p className="text-muted-foreground">
          컴포넌트 갤러리에서 필요한 조각을 복사해 사용할 수 있습니다.
        </p>
        <Button asChild size="lg">
          <Link href="/components">
            컴포넌트 살펴보기
            <ArrowRight />
          </Link>
        </Button>
      </section>
    </div>
  )
}
