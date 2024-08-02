import Rating from "./Rating"

import { Card, CardContent } from "@/app/_components/ui/card"

import Image from "next/image"
const OffersItem = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
        <CardContent className="p-0">
          <Image
            src="/cesta.png"
            alt="Banner"
            width={0}
            height={0}
            sizes="100vw"
            className="w-48 sm:w-64 md:w-80 lg:w-96"
          />
        </CardContent>
      </Card>

      <h2 className="text-base font-bold">G Pro X Superlight</h2>

      <p className="flex gap-2">
        <span className="font-bold text-xl">R$ 306.00</span>
        <span className="line-through text-sm text-[#6B6B6B]">R$ 680.00</span>
      </p>

      <Rating rating={3.5} maxRating={5} />

    </div>
  )
}

export default OffersItem 