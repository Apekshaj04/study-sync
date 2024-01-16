import { SiteDesc } from '@/components/SiteDesc'
import Image from 'next/image'
import { Feed } from './_components/feed'
import { Schedule } from './_components/schedule'
import { Parent } from './_components/parent'
import { Available_tutors } from './_components/student/available_tutors'
import { Classes } from './tutor/[tutorId]/classes'
import { Tutor_desc } from './_components/student/tutor_desc'
import { Request_class } from './_components/student/request_class'
export default function Home() {
  return (
    <div>
      <SiteDesc/>
      <br/>
      <Parent/>
      <Available_tutors/>
      <Classes/>
      <br/>
      <Tutor_desc/>
      <br/>
      <Request_class/>
    </div>
    
  )
}
