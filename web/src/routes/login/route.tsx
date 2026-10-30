import { createFileRoute } from '@tanstack/solid-router'
import LoginBeforeAuth from '../../components/beforeAuth/login'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LoginBeforeAuth/>
}
