// 문의하기 페이지 — 피드백/문의 폼 (F004)
// TODO: React Hook Form + Zod 검증, Notion 저장, Vercel Blob 첨부 업로드 연동 (현재는 정적 placeholder)
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 비개발자 수정 포인트 — 페이지 제목/안내 문구
const PAGE_TITLE = "문의하기"
const PAGE_DESCRIPTION = "학습 중 궁금한 점이나 어려운 점을 알려주세요."

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{PAGE_TITLE}</h1>
        <p className="text-lg text-muted-foreground">{PAGE_DESCRIPTION}</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>준비 중입니다</CardTitle>
          <CardDescription>문의 폼이 곧 제공됩니다.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
