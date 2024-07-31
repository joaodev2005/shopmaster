import Header from "../_components/header";
import Banner from "../../app/(home)/_components/Banner";
import OffersItem from "./_components/OffersItem";

import { Button } from "../_components/ui/button";

import {
  Monitor,
  Mouse,
  Keyboard,
  Speaker,
  Headphones,
  SquareMousePointer
} from "lucide-react";

const products = [
  { name: "Teclados", icon: <Keyboard /> },
  { name: "Mouses", icon: <Mouse /> },
  { name: "Fones", icon: <Headphones /> },
  { name: "Mousepads", icon: <SquareMousePointer /> },
  { name: "Monitores", icon: <Monitor /> },
  { name: "Sepakers", icon: <Speaker /> },
];

export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-5 py-8 sm:px-0 sm:py-0">
        <Banner />
      </div>

      <div className="max-w-[1700px] mx-auto px-5 py-8">

        {/* <div className="grid gap-4 mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {products.map((product) => (
            <Button variant="outline" className="w-full" key={product.name}>
              <div className="flex items-center gap-4">
                {product.icon}
                <span>{product.name}</span>
              </div>
            </Button>
          ))}
        </div> */}

        <div className="grid gap-4 mb-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {products.map((product) => (
            <Button variant="outline" className="w-full text-sm md:text-base lg:text-lg" key={product.name}>
              <div className="flex items-center gap-4">
                {product.icon}
                <span>{product.name}</span>
              </div>
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          <h2>OFERTAS</h2>

          <OffersItem />

        </div>

      </div>

    </div>

  );
}
