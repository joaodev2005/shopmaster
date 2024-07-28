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

      <Banner />

      <div className="max-w-[1700px] mx-auto px-5 py-8">

        <div className="flex gap-4 mb-8">

          {products.map((product) => (
            <Button variant="outline" className="w-64" key={product.name}>
              <div className="flex items-center gap-4">
                {product.icon}
                <span>{product.name}</span>
              </div>
            </Button>
          ))}

        </div>

        <OffersItem />

      </div>

    </div>

  );
}
