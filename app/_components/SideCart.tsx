'use client'

import { UserIcon, LogInIcon, HomeIcon, ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
import { SheetHeader } from "./ui/sheet"
import Link from 'next/link'

const SideCart = () => {
    return (
        <>
            <SheetHeader>
                <div className="flex items-center border border-[#5033c3] rounded-full px-2 py-1 w-min">
                    <ShoppingCart className='mr-2' size={18} />
                    <span className="text-xl font-bold">CARRINHO</span>
                </div>
            </SheetHeader>

            <div>
                
            </div>
        </>
    )
}

export default SideCart