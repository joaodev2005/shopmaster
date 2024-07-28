import { Card, CardContent } from "@/app/_components/ui/card"
import Image from "next/image"


const Banner = () => {
    return (
        <Card className="">
            <CardContent className="flex items-center justify-center">

                <Image
                    src="/cesta.png"
                    alt="Banner"
                    width={300}
                    height={300}
                />

            </CardContent>
        </Card>
    )
}

export default Banner