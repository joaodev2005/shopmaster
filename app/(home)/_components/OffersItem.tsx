import { Card, CardContent } from "@/app/_components/ui/card"

import products from "@/app/data/products"


const OffersItem = () => {
  return (
    <Card>
      <CardContent className="p-0">
        <h1>{products[0].title}</h1>
        <p>R$ {products[0].newPrice}</p>
      </CardContent>
    </Card>
  )
}

export default OffersItem 