"use client"

// 컴포넌트 갤러리 — 설치된 shadcn 컴포넌트의 사용 예시 + 코드 스니펫
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Check, ChevronDown, Code, Copy, Plus } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

// 각 섹션 데모에 대응하는 JSX 코드 스니펫 (복사 대상)
const CODE = {
  button: `<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>
<Button size="xs">XS</Button>
<Button size="sm">SM</Button>
<Button size="lg">LG</Button>
<Button size="icon-sm" aria-label="추가">
  <Plus />
</Button>`,
  input: `<div className="grid w-full max-w-sm gap-3">
  <div className="grid gap-1.5">
    <Label htmlFor="email">이메일</Label>
    <Input id="email" type="email" placeholder="you@example.com" />
  </div>
  <div className="grid gap-1.5">
    <Label htmlFor="disabled">비활성 상태</Label>
    <Input id="disabled" disabled placeholder="입력 불가" />
  </div>
  <div className="grid gap-1.5">
    <Label htmlFor="message">메시지</Label>
    <Textarea id="message" placeholder="여러 줄 입력" />
  </div>
</div>`,
  form: `const schema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다"),
  email: z.string().email("올바른 이메일 형식이 아닙니다"),
})

const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: { name: "", email: "" },
})

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>이름</FormLabel>
          <FormControl>
            <Input placeholder="홍길동" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">제출</Button>
  </form>
</Form>`,
  card: `<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>제목</CardTitle>
    <CardDescription>카드 설명 텍스트가 들어갑니다.</CardDescription>
  </CardHeader>
  <CardContent>본문 영역입니다.</CardContent>
  <CardFooter>
    <Button size="sm">확인</Button>
  </CardFooter>
</Card>`,
  badge: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`,
  avatar: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>YH</AvatarFallback>
</Avatar>`,
  dialog: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">다이얼로그 열기</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>정말 진행하시겠어요?</DialogTitle>
      <DialogDescription>이 작업은 되돌릴 수 없습니다.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="ghost">취소</Button>
      <Button>확인</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  dropdown: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      메뉴
      <ChevronDown />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuLabel>내 계정</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>프로필</DropdownMenuItem>
    <DropdownMenuItem>설정</DropdownMenuItem>
    <DropdownMenuItem>로그아웃</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  sheet: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">시트 열기</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>측면 패널</SheetTitle>
      <SheetDescription>이곳에 폼이나 필터를 배치할 수 있습니다.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
  skeleton: `<div className="grid w-full max-w-sm gap-2">
  <Skeleton className="h-6 w-1/2" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
</div>`,
  toast: `<Button onClick={() => toast.success("성공적으로 저장되었습니다")}>
  Success
</Button>
<Button variant="destructive" onClick={() => toast.error("저장에 실패했습니다")}>
  Error
</Button>
<Button variant="outline" onClick={() => toast.info("새 알림이 있습니다")}>
  Info
</Button>`,
}

// 폼 섹션용 Zod 스키마
const profileSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다"),
  email: z.string().email("올바른 이메일 형식이 아닙니다"),
})
type ProfileForm = z.infer<typeof profileSchema>

// 코드 스니펫을 클립보드에 복사하는 버튼 — 복사 후 2초간 체크 아이콘 표시
function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    toast.success("코드가 복사되었습니다")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="absolute right-2 top-2"
      aria-label="코드 복사"
      onClick={onCopy}
    >
      {copied ? <Check /> : <Copy />}
    </Button>
  )
}

// 섹션 단위 공통 래퍼 — 제목/설명/데모 + 코드 보기 토글
function Section({
  title,
  description,
  code,
  children,
}: {
  title: string
  description: string
  code: string
  children: React.ReactNode
}) {
  const [showCode, setShowCode] = useState(false)

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="shrink-0 gap-1.5"
          onClick={() => setShowCode((prev) => !prev)}
        >
          <Code className="size-3.5" />
          코드 {showCode ? "숨기기" : "보기"}
          <ChevronDown className={cn("size-3.5 transition-transform", showCode && "rotate-180")} />
        </Button>
      </div>
      <div className="flex flex-wrap items-start gap-3">{children}</div>

      {showCode && (
        <div className="relative">
          <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
            <code>{code}</code>
          </pre>
          <CopyButton code={code} />
        </div>
      )}

      <Separator className="my-4" />
    </section>
  )
}

export default function ComponentsPage() {
  const [open, setOpen] = useState(false)

  const form = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: "", email: "" },
  })

  const onSubmit = (values: ProfileForm) => {
    toast.success(`제출됨: ${values.name} (${values.email})`)
    form.reset()
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-2 px-4 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">컴포넌트 갤러리</h1>
        <p className="mt-2 text-muted-foreground">
          설치된 shadcn 컴포넌트의 사용 예시입니다. 필요한 섹션을 그대로 복사해 사용하세요.
        </p>
      </header>

      <Section
        title="Button"
        description="모든 CTA의 기본. variant × size 조합"
        code={CODE.button}
      >
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
        <Button size="xs">XS</Button>
        <Button size="sm">SM</Button>
        <Button size="lg">LG</Button>
        <Button size="icon-sm" aria-label="추가">
          <Plus />
        </Button>
      </Section>

      <Section title="Form Inputs" description="가장 기본적인 입력 요소들" code={CODE.input}>
        <div className="grid w-full max-w-sm gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="demo-email">이메일</Label>
            <Input id="demo-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="demo-disabled">비활성 상태</Label>
            <Input id="demo-disabled" disabled placeholder="입력 불가" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="demo-message">메시지</Label>
            <Textarea id="demo-message" placeholder="여러 줄 입력" />
          </div>
        </div>
      </Section>

      <Section
        title="Form (RHF + Zod)"
        description="실시간 검증과 제출 시 토스트 발생"
        code={CODE.form}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full max-w-sm gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input placeholder="홍길동" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-fit">
              제출
            </Button>
          </form>
        </Form>
      </Section>

      <Section title="Card" description="콘텐츠를 묶는 컨테이너" code={CODE.card}>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>제목</CardTitle>
            <CardDescription>카드 설명 텍스트가 들어갑니다.</CardDescription>
          </CardHeader>
          <CardContent>본문 영역입니다. 어떤 콘텐츠든 자유롭게 배치하세요.</CardContent>
          <CardFooter>
            <Button size="sm">확인</Button>
          </CardFooter>
        </Card>
      </Section>

      <Section title="Badge" description="상태·태그·라벨 표시" code={CODE.badge}>
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </Section>

      <Section title="Avatar" description="사용자 프로필 이미지와 fallback" code={CODE.avatar}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>YH</AvatarFallback>
        </Avatar>
      </Section>

      <Section
        title="Dialog"
        description="모달 — 확인/입력 등 집중이 필요한 액션"
        code={CODE.dialog}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">다이얼로그 열기</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>정말 진행하시겠어요?</DialogTitle>
              <DialogDescription>이 작업은 되돌릴 수 없습니다.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="ghost">취소</Button>
              <Button>확인</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Section>

      <Section title="Dropdown Menu" description="옵션 메뉴·사용자 메뉴에 사용" code={CODE.dropdown}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              메뉴
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>내 계정</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>프로필</DropdownMenuItem>
            <DropdownMenuItem>설정</DropdownMenuItem>
            <DropdownMenuItem>로그아웃</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Section>

      <Section
        title="Sheet"
        description="측면 슬라이드 패널 — 모바일 메뉴/필터에 사용"
        code={CODE.sheet}
      >
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">시트 열기</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>측면 패널</SheetTitle>
              <SheetDescription>이곳에 폼이나 필터를 배치할 수 있습니다.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Section>

      <Section title="Skeleton" description="콘텐츠 로딩 중 자리 표시자" code={CODE.skeleton}>
        <div className="grid w-full max-w-sm gap-2">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </Section>

      <Section
        title="Toast (Sonner)"
        description="비차단 알림 — 작업 결과 피드백"
        code={CODE.toast}
      >
        <Button onClick={() => toast.success("성공적으로 저장되었습니다")}>Success</Button>
        <Button variant="destructive" onClick={() => toast.error("저장에 실패했습니다")}>
          Error
        </Button>
        <Button variant="outline" onClick={() => toast.info("새 알림이 있습니다")}>
          Info
        </Button>
      </Section>
    </div>
  )
}
