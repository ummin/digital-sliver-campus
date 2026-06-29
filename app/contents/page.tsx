// 실습 목록 페이지 — 난이도순 실습 콘텐츠 목록 (F002/F010/F011)
// TODO: Notion 콘텐츠 DB 연동 후 난이도순 카드 목록으로 교체 (현재는 정적 placeholder)
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 비개발자 수정 포인트 — 페이지 제목/안내 문구
const PAGE_TITLE = "실습 목록"
const PAGE_DESCRIPTION = "쉬운 단계부터 차례로 따라 할 수 있는 실습 콘텐츠 목록입니다."

export default function ContentsPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{PAGE_TITLE}</h1>
        <p className="text-lg text-muted-foreground">{PAGE_DESCRIPTION}</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>준비 중입니다</CardTitle>
          <CardDescription>실습 콘텐츠 목록이 곧 제공됩니다.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
