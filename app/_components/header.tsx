
import { UserCircle } from "lucide-react"
import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const Header = () => {

    return (
        <Card>
            <CardContent className="bg-[#0B0B0B] flex justify-between items-center px-5 py-8">

                <h2 className="text-xl font-bold">
                    <span className="text-primary">SHOP</span> MASTER
                </h2>

                <nav>
                    <ul className="flex items-center gap-4 text-white">
                        <li><a href="#" className="hover:text-primary">Início</a></li>
                        <li className="text-white">|</li>
                        <li><a href="#" className="hover:text-primary">Catálogo</a></li>
                        <li className="text-white">|</li>
                        <li><a href="#" className="hover:text-primary">Ofertas</a></li>
                    </ul>
                </nav>

                <div className="flex gap-4">
                    <Button variant={"ghost"} size={"icon"}>
                        <UserCircle size={18} />
                    </Button>

                    <Button variant={"ghost"} size={"icon"}>
                        <ShoppingCart size={18} />
                    </Button>
                </div>

            </CardContent>
        </Card>
    )
}

export default Header