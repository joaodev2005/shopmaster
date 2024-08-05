import { Card, CardContent } from "@/app/_components/ui/card"
import Image from "next/image"

const OffersBanner = () => {
    return (
        <Card className="bg-custom-gradient max-w-[602px] min-h-[215px]">
            <CardContent className="flex items-center justify-between text-left">
                <div className="flex flex-col">
                    <span className="text-3xl font-normal">até</span>
                    <span className="text-5xl font-extrabold text-[#8162ff]">
                        55% <span className="font-normal text-[23px] text-white">de</span>
                    </span>
                    <span className="text-4xl font-bold text-white">DESCONTO</span>
                    <span className="text-3xl font-bold">em Mouses</span>
                </div>
                <Image
                    src="/mouse.png"
                    alt="Banner"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-48 sm:w-64 md:w-80 lg:w-72"
                />
            </CardContent>
        </Card>
    )
}

export default OffersBanner