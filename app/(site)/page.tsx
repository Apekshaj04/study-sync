import { SiteDesc } from '@/components/SiteDesc'
import Image from 'next/image'
import { Feed } from './_components/feed'

export default function Home() {
  return (
    <div>
      <SiteDesc/>
      <br/>
      <Feed/>
    </div>
  )
}
