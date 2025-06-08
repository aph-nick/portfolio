'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { PolandFlag } from '@/components/ui/PolandFlag'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-3xl text-black dark:text-white">
          Wojciech Kucharski
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Junior Java Developer
        </TextEffect>
      </div>

      <div className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-400 text-sm font-medium">
        <MapPinIcon className="h-5 w-5 text-zinc-300" />
        <span>Warsaw, Poland</span>
        <PolandFlag className="h-4 w-6" />
      </div>
    </header>
  )
}
