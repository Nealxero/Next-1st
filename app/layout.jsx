import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promptopia',
  description: 'Discover and Create',
}               

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
        <body>
          <Provider>
            <div className='main'>
                <div className='gradient'/>
            </div>
            
            <main className='app'>
              <Nav/>
                {children}
            </main>
          </Provider>
        </body>
    </html>
  )
}
