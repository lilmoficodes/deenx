import { createFileRoute } from '@tanstack/solid-router'
import SignupBeforeAuth from '../../components/beforeAuth/signup'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignupBeforeAuth/>
}
