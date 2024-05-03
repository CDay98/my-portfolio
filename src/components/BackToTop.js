import { useEffect, useState } from 'react'
import { ArrowUpIcon } from "@heroicons/react/solid";
import React from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    document.activeElement.blur();
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-3 right-4 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'bg-red-500 hover:bg-red-600 focus:ring-red-600 z-50 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2',
        )}
      >
        <ArrowUpIcon className="h-6 w-6 z-50" aria-hidden="true" />
      </button>
    </div>
  )
}