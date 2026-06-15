"use client"

// 전역 에러 경계 — 페이지 단위 런타임 에러 시 표시되는 폴백
import { RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">문제가 발생했습니다</h1>
      <p className="text-sm text-muted-foreground">{error.message || "알 수 없는 오류"}</p>
      <Button onClick={reset}>
        <RefreshCw />
        다시 시도 해주세요 !
      </Button>
    </div>
  )
}
