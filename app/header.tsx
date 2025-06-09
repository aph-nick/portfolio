'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { PolandFlag } from '@/components/ui/PolandFlag'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatedBackground
      className="pointer-events-auto rounded-lg bg-zinc-100 dark:bg-zinc-800 p-1 flex gap-1"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => (
        <button
          key={theme.id}
          className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
          type="button"
          aria-label={`Switch to ${theme.label} theme`}
          data-id={theme.id}
        >
          {theme.icon}
        </button>
      ))}
    </AnimatedBackground>
  )
}

export function Header() {
  return (
    <header className="relative mb-8 flex flex-col items-start">
      {/* Theme switch on top right */}
      <div className="absolute top-0 right-0 z-50">
        <ThemeSwitch />
      </div>

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

      <div className="mt-2 flex items-center space-x-2 text-zinc-700 dark:text-zinc-400 text-sm font-medium">
        <MapPinIcon className="h-5 w-5 text-zinc-300" />
        <span>Warsaw, Poland</span>
        <PolandFlag className="h-4 w-6" />
      </div>
    </header>
  )
}
