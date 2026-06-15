"use client"

// 다크모드 토글 버튼 — 클릭 시 light/dark 전환 (system은 초기값에서만)
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label="테마 전환"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun className="hidden dark:inline-block" />
      <Moon className="inline-block dark:hidden" />
    </Button>
  )
}
