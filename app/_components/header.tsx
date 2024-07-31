import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

import {
    ShoppingCart,
    UserCircle,
    MenuIcon
} from "lucide-react"

const Header = () => {

    return (
        <Card>
            <CardContent className="bg-[#0B0B0B] flex justify-between items-center px-5 py-8">

                <div className="sm:hidden">
                    <Button variant={"ghost"} size={"icon"}>
                        <MenuIcon size={18} />
                    </Button>
                </div>

                <h2 className="text-xl font-bold">
                    <span className="text-primary">SHOP</span> MASTER
                </h2>

                <nav>
                    <ul className="lg:flex hidden sm:flex items-center gap-4 text-white">
                        <li><a href="#" className="hover:text-primary">Início</a></li>
                        <li className="text-white">|</li>
                        <li><a href="#" className="hover:text-primary">Catálogo</a></li>
                        <li className="text-white">|</li>
                        <li><a href="#" className="hover:text-primary">Ofertas</a></li>
                    </ul>
                </nav>

                {/* <div className="lg:flex gap-4 hidden sm:flex">
                    <Button variant={"ghost"} size={"icon"}>
                        <UserCircle size={18} />
                    </Button>

                    <Button variant={"ghost"} size={"icon"}>
                        <ShoppingCart size={18} />
                    </Button>
                </div> */}

                <div className="flex lg:flex gap-4">
                    <div className="hidden lg:block">
                        <Button variant={"ghost"} size={"icon"}>
                            <UserCircle size={18} />
                        </Button>
                    </div>

                    <Button variant={"ghost"} size={"icon"}>
                        <ShoppingCart size={18} />
                    </Button>
                </div>

            </CardContent>
        </Card>
    )
}

export default Header