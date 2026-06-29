// 홈 페이지 — 환영 문구 + 카테고리 대표 카드(F001/F010) + 배우기 시작하기 CTA
// TODO: 카테고리 카드는 추후 Notion API 연동으로 대체 (현재는 정적 placeholder)
import Link from "next/link"
import { ArrowRight, Smartphone, Sparkles, Tv } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// 비개발자 수정 포인트 — 환영 문구
const WELCOME_TITLE = "디지털 실버 캠퍼스에 오신 것을 환영합니다"
const WELCOME_DESCRIPTION =
  "키오스크, 스마트폰 앱, AI 도구 사용법을 가장 쉬운 단계부터 하나씩 따라 하며 배워보세요."

// 비개발자 수정 포인트 — 홈에 노출할 카테고리 대표 카드 3종 (F001/F010)
const CATEGORIES: ReadonlyArray<{ title: string; desc: string; icon: typeof Tv }> = [
  { title: "키오스크 사용법", desc: "식당·카페·은행 키오스크를 차근차근 따라 해보세요", icon: Tv },
  { title: "스마트폰 앱", desc: "자주 쓰는 앱을 쉽고 안전하게 사용하는 방법", icon: Smartphone },
  { title: "AI 도구", desc: "생활에 도움이 되는 AI 도구 활용법을 배워보세요", icon: Sparkles },
]

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-16 md:py-24">
      <section className="flex flex-col items-start gap-4 md:items-center md:text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{WELCOME_TITLE}</h1>
        <p className="max-w-xl text-lg text-muted-foreground md:text-xl">{WELCOME_DESCRIPTION}</p>
        <Button asChild size="lg">
          <Link href="/learn">
            배우기 시작하기
            <ArrowRight />
          </Link>
        </Button>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">배우고 싶은 주제를 선택하세요</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map(({ title, desc, icon: Icon }) => (
            <Link key={title} href="/learn">
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <Icon className="size-6 text-primary" />
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
