import { Button } from '@/components/ui/button'
import { Mic } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex justify-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Button asChild variant={'outline'} size={'lg'}>
          <Link href="/ui/voice-note" rel="noopener noreferrer">
            <Mic className="h-8 w-8" />
            Voice Note
          </Link>
        </Button>
      </main>
    </div>
  )
}
