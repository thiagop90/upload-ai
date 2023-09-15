import { Github } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background px-6 py-3">
      <h1 className="text-xl font-bold">upload.ai</h1>

      <div className="flex items-center gap-3">
        <span className="hidden text-sm text-muted-foreground md:block">
          Desenvolvido com 💚 no NLW da Rocketseat
        </span>

        <Separator orientation="vertical" className="hidden h-6 md:block" />

        <Button variant="outline" className="hover:text-primary">
          <Github className="mr-2 h-4 w-4" />
          Github
        </Button>
      </div>
    </header>
  )
}
