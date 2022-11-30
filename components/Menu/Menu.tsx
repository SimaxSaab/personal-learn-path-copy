import React from 'react'
import Link from 'next/link'
import { NextRouter } from 'next/router'
import style from './menu.module.css'

interface WithRouterProps {
  router: NextRouter
}

interface ComposedComponent extends WithRouterProps {
  children: string
  href: string
}

export default function Menu () {
  return (
    <nav className={style.root}>
      <Link href="/personal-learn-path-copy/">Главная</Link>
      <Link href="/personal-learn-path-copy/test-works">Тестовые задания</Link>
      <Link href="/personal-learn-path-copy/programming">Программирование</Link>
      <Link href="/personal-learn-path-copy/infrastructure">Деплой</Link>
      <Link href="/personal-learn-path-copy/soft-skills">Софт-Скиллы</Link>
      <Link href="/personal-learn-path-copy/api/hello">API</Link>
    </nav>
  )
}
