import { User } from "lucide-solid"

const Navbar = () => {
  return (
    <nav>
        <ul class="flex justify-end">
            <li>
                <User size={20}/>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar