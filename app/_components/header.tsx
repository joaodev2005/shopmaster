import SideMenu from "@/app/_components/SideMenu"
import SideCart from "@/app/_components/SideCart"

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet"

import {
    ShoppingCart,
    UserCircle,
    MenuIcon
} from "lucide-react"

const Header = () => {

    return (
        <Card>
            <CardContent className="bg-[#0B0B0B] flex justify-between items-center px-5 py-8">

                <Sheet>
                    <SheetTrigger>
                        <div className="sm:hidden">
                            <Button variant={"ghost"} size={"icon"}>
                                <MenuIcon size={18} />
                            </Button>
                        </div>
                    </SheetTrigger>

                    <SheetContent side={"left"}>
                        <SideMenu />
                    </SheetContent>
                </Sheet>

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

                    <Sheet>
                        <SheetTrigger>
                            <Button variant={"ghost"} size={"icon"}>
                                <ShoppingCart size={18} />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side={"right"}>
                            <SideCart />
                        </SheetContent>
                    </Sheet>


                </div>

            </CardContent>
        </Card>
    )
}

export default Header