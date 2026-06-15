# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

```bash
npm run dev      # 개발 서버 (Turbopack, localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint v9 FlatConfig (eslint.config.mjs)
npx tsc --noEmit # 타입 체크만 (빌드 없이)

# shadcn 컴포넌트 추가
npx shadcn@latest add <component-name>
```

## 아키텍처

```
app/
  layout.tsx          # 루트 레이아웃: 폰트 · ThemeProvider · SiteHeader · SiteFooter · Toaster
  page.tsx            # 메인(/) — Hero / 포함된 것 / Quick Start / CTA
  loading.tsx         # 전역 Suspense 폴백 (Skeleton)
  error.tsx           # 전역 에러 경계 ("use client")
  not-found.tsx       # 404
  components/page.tsx # 컴포넌트 갤러리 ("use client")

components/
  providers/theme-provider.tsx  # next-themes Client 래퍼 (attribute="class", defaultTheme="system")
  layout/site-header.tsx        # sticky 헤더: 상단 BRAND/NAV 상수 → 비개발자 수정 포인트
  layout/site-footer.tsx        # 미니멀 푸터: 상단 BRAND/FOOTER_LINKS 상수
  layout/theme-toggle.tsx       # Sun/Moon 토글 ("use client")
  ui/                           # shadcn 컴포넌트 (자동 생성, 직접 수정 자제)
    # 설치된 컴포넌트: button, card, input, label, textarea, sonner, badge,
    # separator, avatar, dropdown-menu, skeleton, dialog, sheet, form

lib/utils.ts  # cn() — clsx + tailwind-merge
```

### 핵심 기술 스택 버전
- **Next.js 16.2.6** App Router — async params(`Promise<...>`), RSC 기본
- **Tailwind v4** — `tailwind.config.ts` 없음. 색상/반지름 변수는 `app/globals.css`의 `@theme inline` 블록에서 선언
- **shadcn 4.11.0**, style `radix-nova` — 통합 `radix-ui` 패키지 사용(`@radix-ui/*` 아님). Button의 `size="icon-sm"/"icon-xs"/"icon-lg"`는 radix-nova 전용
- **Form**: React Hook Form + **Zod v4** (`zod ^4.4.3`) + `@hookform/resolvers` — v3 문서 API 혼용 금지
- **아이콘**: lucide-react — 다른 아이콘 라이브러리 추가 금지
- **Toast**: sonner — `import { toast } from "sonner"` 후 `toast("메시지")` 호출
- **경로 별칭**: `@/*` = 루트 기준 (`@/components/...`, `@/lib/...`) — 상대경로 금지

### 코딩 규칙
- **import**: 항상 `@/` 절대경로 사용 (상대경로 `../../` 금지)
- **"use client"**: hooks·이벤트 핸들러 사용 시에만 선언 — RSC가 기본값
- **Link**: `<Button asChild><Link href="...">텍스트</Link></Button>` 패턴으로 스타일 적용
- **상수 우선**: 페이지/컴포넌트 상단에 표시 텍스트·데이터를 `const`로 선언

### 레이아웃 셸 규칙
- `<main>`에 max-width 미적용 — 개별 페이지가 `max-w-*` 직접 제어
- 헤더/푸터의 메뉴·브랜드명은 각 파일 상단 `const`로 선언 (코드 전체를 읽지 않아도 수정 가능)
- 새 공유 컴포넌트 신설 금지 — shadcn 표준 + Tailwind 클래스 조합으로 해결

### 새 페이지 추가 방법
`app/<경로>/page.tsx` 파일을 만들면 자동 라우팅. 페이지 상단 `const`에 표시 텍스트·데이터를 선언하는 패턴을 유지할 것.

### CSS 변수 커스터마이징
`app/globals.css`의 `:root` / `.dark` 블록에서 `--primary`, `--background` 등 OKLCH 값을 수정하면 전체 사이트에 즉시 반영됨.
