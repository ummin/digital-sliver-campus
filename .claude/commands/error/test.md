---
description: 'Playwright MCP로 런타임 오류를 분석·수정·검증하는 단계별 디버깅 커맨드'
argument-hint: '[경로 또는 오류 증상] (예: /components, "버튼 클릭 시 콘솔 에러")'
allowed-tools:
  [
    'Bash(npm run dev:*)',
    'Bash(npx tsc:*)',
    'Bash(curl:*)',
    'Read',
    'Edit',
    'Grep',
    'Glob',
    'mcp__playwright__browser_navigate',
    'mcp__playwright__browser_snapshot',
    'mcp__playwright__browser_console_messages',
    'mcp__playwright__browser_network_requests',
    'mcp__playwright__browser_click',
    'mcp__playwright__browser_take_screenshot',
    'mcp__playwright__browser_wait_for',
    'mcp__playwright__browser_close',
  ]
---

# Claude 명령어: Error Test

Playwright MCP를 활용해 브라우저에서 발생하는 런타임 오류를
**분석 → 수정 → 검증** 3단계로 자동 처리하는 디버깅 커맨드입니다.

## 사용법

```
/error:test [경로 또는 오류 증상]

/error:test                              # 인자 없음 → 메인(/) 페이지 점검
/error:test /components                  # 컴포넌트 갤러리 페이지 점검
/error:test "버튼 클릭 시 콘솔 에러"        # 증상 설명 기반 점검
/error:test "/components 코드 복사 버튼 안 됨"  # 경로 + 증상 조합
```

## 인자 처리

- `$ARGUMENTS` 전체를 점검 대상/증상으로 사용합니다.
- 인자가 **비어 있으면 메인(`/`)** 을 기본 점검 대상으로 삼습니다.
- 인자에 경로(`/`로 시작하는 토큰)가 포함되면 해당 경로를 우선 접속하고,
  나머지 텍스트는 재현해야 할 증상으로 해석합니다.

## 프로세스

### 0. 사전 준비 — 개발 서버 기동

1. `curl http://localhost:3000`으로 dev 서버 응답을 확인합니다.
2. 응답이 없으면 `npm run dev`를 **백그라운드로 실행**합니다.
   - 이미 떠 있으면 중복 실행하지 않습니다 (포트 충돌 방지).
3. `browser_wait_for` 또는 `curl` 재시도로 `localhost:3000`이
   응답할 때까지 대기합니다.

### 1. 오류 분석

1. `browser_navigate`로 대상 경로(`$ARGUMENTS` 기반 또는 `/`)에 접속합니다.
2. `$ARGUMENTS`에 재현 동작이 명시되어 있으면 `browser_click` 등으로 재현합니다.
3. `browser_console_messages`로 콘솔 에러·경고를 수집합니다.
4. `browser_network_requests`로 4xx/5xx 실패 요청을 수집합니다.
5. `browser_snapshot`으로 현재 DOM 상태를 확인합니다.
6. 수집된 에러 메시지·스택트레이스를 근거로 `Grep`/`Read`로 원인 소스 파일을 추적합니다.
7. **분석 결과를 요약 출력**합니다.

   ```
   📋 오류 분석 결과
   - 증상: <관찰된 현상>
   - 콘솔 에러: <메시지 / 없음>
   - 네트워크 실패: <요청 / 없음>
   - 원인 위치: <파일:라인>
   - 추정 근본 원인: <설명>
   ```

### 2. 오류 수정

1. 1단계 분석 근거로 수정안을 먼저 제시합니다.
2. `Edit`로 해당 소스를 수정합니다. **프로젝트 규칙 준수**:
   - `any` 타입 금지, 들여쓰기 2칸, 주석은 한국어
   - shadcn/ui + Tailwind 클래스 조합으로 해결, 새 공유 컴포넌트 신설 금지
   - 헤더/푸터·페이지 표시 텍스트는 파일 상단 `const` 패턴 유지
3. Next.js 16 관련 API를 다룰 때는 AGENTS.md 경고에 따라
   `node_modules/next/dist/docs/`의 해당 가이드를 먼저 확인합니다.

### 3. 수정 내역 테스트

1. dev 서버 핫리로드 반영을 `browser_wait_for`로 대기합니다.
2. `browser_navigate`로 대상 경로에 재접속하고, 1단계의 재현 동작을 반복합니다.
3. `browser_console_messages` → **콘솔 에러 0건** 확인.
4. `browser_network_requests` → **4xx/5xx 0건** 확인.
5. `browser_take_screenshot` → 화면이 정상 렌더되는지 확인.
6. 통과 기준을 만족하지 못하면 **1단계로 회귀**하여 재분석합니다.
   - 무한 반복을 막기 위해 최대 3회 시도 후 사용자에게 현황을 보고합니다.
7. `browser_close`로 브라우저를 정리합니다.

## 통과 기준

수정이 **검증 통과**로 인정되려면 아래 3가지를 모두 만족해야 합니다.

| 항목         | 기준                          |
| ------------ | ----------------------------- |
| 콘솔         | 에러 메시지 0건               |
| 네트워크     | 4xx / 5xx 실패 응답 0건       |
| 화면(스크린샷) | 의도한 UI가 정상 렌더됨        |

## 주의사항

- dev 서버는 **중복 실행하지 않습니다** — 항상 기동 여부를 먼저 확인합니다.
- 소스 수정 후에는 **핫리로드 반영을 대기**한 뒤 재검증합니다.
- 검증 미통과 시 임의 추측으로 덮어쓰지 말고, 콘솔·네트워크 근거를 다시 수집합니다.
- 커밋은 이 커맨드가 수행하지 않습니다 — 필요 시 `/git:commit`을 사용하세요.
- **커밋·코드에 Claude 서명을 추가하지 않습니다.**

## 통합 기능

- `/git:branch`로 수정용 브랜치를 먼저 생성한 뒤 사용하면 안전합니다.
- 검증 통과 후 `/git:commit`으로 수정 내역을 원자적으로 커밋할 수 있습니다.
