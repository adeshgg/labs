import { Button } from '@/components/ui/button'
import { Bitcoin, Copy, Mic, Wrench } from 'lucide-react'
import Link from 'next/link'

const items = [
  {
    name: 'Voice Note',
    icon: <Mic className="h-8 w-8" />,
    href: '/ui/voice-note',
  },
  {
    name: 'Reveal n Copy',
    icon: <Copy className="h-8 w-8" />,
    href: '/ui/reveal-copy',
  },
  {
    name: 'Extended Toolbar',
    icon: <Wrench className="h-8 w-8" />,
    href: '/ui/extended-toolbar',
  },
  {
    name: 'Collectibles',
    icon: <Bitcoin className="h-8 w-8" />,
    href: '/ui/collectibles',
  },
]

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {items.map(item => (
          <Button
            key={item.name}
            asChild
            variant={'outline'}
            size={'lg'}
            className="flex gap-2"
          >
            <Link href={item.href}>
              {item.icon}
              {item.name}
            </Link>
          </Button>
        ))}
      </main>
    </div>
  )
}
