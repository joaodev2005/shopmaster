'use client'

import { useState } from 'react'

import { Button } from './ui/button'
import { SheetHeader } from "./ui/sheet"

import Link from 'next/link'
import Image from 'next/image'

import {
    ChevronLeft,
    ChevronRight,
    ShoppingCart,
    Trash
} from 'lucide-react'

const SideCart = () => {

    const [Count, setCount] = useState(1)
    const [isDeleted, setIsDeleted] = useState(false);

    const increaseQuantity = () => {
        setCount(Count + 1);
    };

    const decreaseQuantity = () => {
        if (Count > 0) {
            setCount(Count - 1);
        }
    };


    const deleteItem = () => {
        setIsDeleted(true);
    };

    if (isDeleted) {
        return (
            <>
                <SheetHeader>
                    <div className="flex items-center border border-[#5033c3] rounded-full px-2 py-1 w-min">
                        <ShoppingCart className='mr-2' size={18} />
                        <span className="text-xl font-bold">CARRINHO</span>
                    </div>
                </SheetHeader>
                <div className="px-5 py-6 text-center">
                    <span className="text-gray-500">O carrinho está vazio.</span>
                </div>
            </>
        );
    }


    return (
        <>
            <SheetHeader>
                <div className="flex items-center border border-[#5033c3] rounded-full px-2 py-1 w-min">
                    <ShoppingCart className='mr-2' size={18} />
                    <span className="text-xl font-bold">CARRINHO</span>
                </div>
            </SheetHeader>

            <div className='px-5 py-6'>
                <div className="flex items-center mb-4 border-b pb-4">

                    <div className=" rounded-md bg-secondary p-2 opacity-100">
                        <Image
                            src="/cesta.png"
                            alt="Item"
                            className='object-cover rounded-md'
                            width={64}
                            height={64}
                        />
                    </div>

                    <div className="flex-1 ml-4">
                        <h3 className="font-bold">Nome do Item</h3>
                        <div className="flex items-center mb-2">
                            <span className="text-primary font-bold mr-2">R$ 79,99</span>
                            <span className="text-gray-500 line-through">R$ 99,99</span>
                        </div>

                        <div className="flex items-center gap-2">

                            <Button variant="outline" onClick={decreaseQuantity}>
                                <ChevronLeft className='' size={18} />
                            </Button>

                            <span className="mx-2">{Count}</span>

                            <Button variant="outline" onClick={increaseQuantity}>
                                <ChevronRight className='' size={18} />
                            </Button>

                        </div>
                    </div>

                    <Button variant="outline" onClick={deleteItem}>
                        <Trash className='' size={18} />
                    </Button>
                </div>
            </div>

        </>
    )
}

export default SideCart