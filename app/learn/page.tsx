// 배우기 페이지 — 학습 카테고리 목록 (F001/F010/F011)
// TODO: Notion 카테고리 DB 연동 후 카드 그리드로 교체 (현재는 정적 placeholder)
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 비개발자 수정 포인트 — 페이지 제목/안내 문구
const PAGE_TITLE = "배우기"
const PAGE_DESCRIPTION = "배우고 싶은 주제를 선택하세요. 카테고리는 곧 추가될 예정입니다."

export default function LearnPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{PAGE_TITLE}</h1>
        <p className="text-lg text-muted-foreground">{PAGE_DESCRIPTION}</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>준비 중입니다</CardTitle>
          <CardDescription>학습 카테고리 목록이 곧 제공됩니다.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
