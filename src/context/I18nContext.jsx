/* eslint-disable react-refresh/only-export-components -- useI18n is the supported companion hook */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { resolvePath, translations } from '../i18n/translations'

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('fop-lang')
      if (saved === 'pcm' || saved === 'en') return saved
    } catch {
      /* ignore */
    }
    return 'en'
  })

  const setLang = useCallback((next) => {
    setLanguage(next)
    try {
      localStorage.setItem('fop-lang', next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleLanguage = useCallback(() => {
    setLang(language === 'en' ? 'pcm' : 'en')
  }, [language, setLang])

  const t = useCallback(
    (key) => {
      const table = translations[language] ?? translations.en
      return resolvePath(table, key) ?? resolvePath(translations.en, key) ?? key
    },
    [language],
  )

  const value = useMemo(
    () => ({ language, setLanguage: setLang, toggleLanguage, t }),
    [language, setLang, toggleLanguage, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return ctx
}
