// 전역 로딩 상태 — Suspense 폴백으로 사용되는 스켈레톤 화면
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-16">
      <Skeleton className="h-8 w-1/3" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}
