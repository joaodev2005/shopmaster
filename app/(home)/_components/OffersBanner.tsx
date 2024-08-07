import { Card, CardContent } from "@/app/_components/ui/card";
import Image from "next/image";

const OffersBanner = () => {
    return (
        <Card className="bg-custom-gradient w-full px-6 py-4 md:px-8 md:py-6">
            <CardContent className="flex items-center justify-center gap-4 text-left">
                <div className="flex flex-col space-y-1 md:space-y-2">
                    <span className="text-lg md:text-2xl font-normal">até</span>
                    <span className="text-2xl md:text-4xl font-extrabold text-[#8162ff]">
                        55% <span className="font-normal text-base md:text-xl text-white">de</span>
                    </span>
                    <span className="text-xl md:text-3xl font-bold text-white">DESCONTO</span>
                    <span className="text-lg md:text-2xl font-bold">em Mouses</span>
                </div>
                <Image
                    src="/mouse.png"
                    alt="Banner"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-32 sm:w-40 md:w-56 lg:w-72"
                />
            </CardContent>
        </Card>
    );
};

export default OffersBanner;
