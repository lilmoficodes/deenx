import { createFileRoute } from '@tanstack/solid-router'
import LoginBeforeAuth from '../components/beforeAuth/login'

export const Route = createFileRoute('/')({ component: Home,
  head : ()=>(
    {
      meta : [
        {
          title : "Home | DeenX",
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
    <LoginBeforeAuth/>
    </>
  )
}
