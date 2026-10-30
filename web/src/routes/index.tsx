import { createFileRoute } from '@tanstack/solid-router'
import Feeds from '../components/feeds/feeds'
export const Route = createFileRoute('/')({ component: Home,
  head : ()=>(
    {
      meta : [
        {
          title : "Home | DeenX | Explore Posts & Feeds ",
        },
        {
           name : "description",
          content : "This is home page of DeenX. It is the islamic hub & social media for everyone.DeenX promises to share all information you need to learn islam"
        }
      ]
    }
  )
  })

function Home() {
  return (
    <>
    <Feeds/>
    </>
  )
}
