import React, { useState } from 'react'
import { Heart, Cat } from 'lucide-react'
import { comfortingMessages } from './data/messages'
import { fetchCatImage } from './api/catApi'

function App() {
  const [catImage, setCatImage] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetchCatAndMessage = async () => {
    setIsLoading(true)
    try {
      const imageUrl = await fetchCatImage()
      setCatImage(imageUrl)
      const randomMessage =
        comfortingMessages[
          Math.floor(Math.random() * comfortingMessages.length)
        ]
      setMessage(randomMessage)
    } catch (error) {
      setMessage(
        "Oops! Something went wrong, but honestly, even the universe can't handle your greatness. 😏🐱"
      )
    }
    setIsLoading(false)
  }

  return (
    <div className='app-container'>
      <div className='card'>
        <div className='header'>
          <p className='subtitle'>
            Feeling low? Stressed? Unhappy? I can't wave a magic wand and fix
            your life, but I can remind you that cats exist and couldn't care
            less about your problems. 🐱💅
          </p>
          <br></br>
          <h1 className='title'>Comforting Cat</h1>
          <p className='subtitle'>
            When you click the button, a cat appears with a message, looking
            completely unbothered, just like you should be!
          </p>
        </div>

        <button
          onClick={fetchCatAndMessage}
          disabled={isLoading}
          className='comfort-button'
        >
          {isLoading ? 'Finding a cat...' : 'Get Comfort'}
        </button>

        {message && (
          <div className='message-box'>
            <p className='message-text'>{message}</p>
          </div>
        )}

        {catImage && (
          <div className='image-container'>
            <img
              src={catImage}
              alt='A comforting cat'
              className='cat-image'
              loading='lazy'
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
