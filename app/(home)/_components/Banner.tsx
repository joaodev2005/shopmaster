import { Card, CardContent } from "@/app/_components/ui/card"

import Image from "next/image"


const Banner = () => {
    return (
        <Card>
            <CardContent className="flex items-center justify-center">

                <Image
                    src="/cesta.png"
                    alt="Banner"
                    width={300}
                    height={300}
                     className="w-48 sm:w-64 md:w-80 lg:w-96"
                />

            </CardContent>
        </Card>
    )
}

export default Banner