import React, { useState, useEffect } from 'react'

interface TypewriterProps {
  words: string | string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  loop?: boolean
  className?: string
  cursorClassName?: string
  showCursor?: boolean
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 2200,
  loop = true,
  className = '',
  cursorClassName = '',
  showCursor = true,
}) => {
  const wordList = Array.isArray(words) ? words : [words]
  const [wordIndex, setWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const targetWord = wordList[wordIndex % wordList.length]

    if (!isDeleting) {
      if (currentText.length < targetWord.length) {
        timer = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length + 1))
        }, typingSpeed)
      } else {
        // Finished typing word
        if (loop && wordList.length > 0) {
          timer = setTimeout(() => {
            setIsDeleting(true)
          }, pauseDuration)
        }
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length - 1))
        }, deletingSpeed)
      } else {
        // Finished deleting
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % wordList.length)
      }
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, wordIndex, wordList, typingSpeed, deletingSpeed, pauseDuration, loop])

  return (
    <span className="inline-flex items-center">
      <span className={className}>{currentText}</span>
      {showCursor && (
        <span
          className={`ml-1 inline-block animate-pulse font-normal opacity-90 ${cursorClassName}`}
          aria-hidden="true"
        >
          |
        </span>
      )}
    </span>
  )
}

export default Typewriter
