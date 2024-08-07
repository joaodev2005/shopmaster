'use client'

import { UserIcon, LogInIcon, HomeIcon } from 'lucide-react'
import { Button } from './ui/button'
import { SheetHeader } from "./ui/sheet"
import Link from 'next/link'

const SideMenu = () => {
    return (
        <>
            <SheetHeader>
                <h2 className="text-xl font-bold text-left">
                    <span className="text-primary">SHOP</span> MASTER
                </h2>
            </SheetHeader>

            <div className='px-5 py-6 flex  flex-col gap-3'>
                <div className="flex items-center gap-3">
                    <UserIcon />
                    <h2 className='font-bold'>Olá, Faça seu Login!</h2>
                </div>

                <Button variant="secondary" className='w-full justify-start'>
                    <LogInIcon className='mr-2' size={18} />
                    Fazer Login
                </Button>
            </div>

            <div className='flex flex-col gap-3 px-5'>
                <Button variant="outline" className='justify-start' asChild>
                    <Link href='/'>
                        <HomeIcon className='mr-2' size={18} />
                        Inicio
                    </Link>
                </Button>
            </div>
        </>
    )
}

export default SideMenu