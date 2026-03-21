import { useEffect, useState } from 'react'

const DEFAULT_ID = 'hero'

export function useActiveSection(sectionIds, options = {}) {
  const { rootMargin = '-45% 0px -45% 0px', threshold = 0 } = options
  const [activeId, setActiveId] = useState(DEFAULT_ID)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { root: null, rootMargin, threshold },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [sectionIds, rootMargin, threshold])

  return activeId
}
