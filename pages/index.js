import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/EventsList'
import SwitchTheme from '../components/SwitchTheme'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const featureEvents = getFeaturedEvents()
  
  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center  p-4 ">
      
      <EventList events={featureEvents} />
    </div>
  );
}
