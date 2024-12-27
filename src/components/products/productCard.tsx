import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./addToCartButton";
import { addToCart } from "@/helpers/actions";

export default function ProductCard() {
  const id = 3
  const favSvg = {
    img: "https://icongr.am/fontawesome/heart-o.svg?size=28&color=5592aa",
    fullImg: "https://icongr.am/fontawesome/heart.svg?size=28&color=44403c"
  }

  return (
    <div className="rounded border shadow-[10px_12px_8px_1px_rgba(12,23,32,0.2)] ">
      <div className="flex flex-col items-center justify-center h-full max-w-sm p-2 gap-y-3">
        <form className="w-full space-y-3" action={addToCart}>
          <Image src="/images/logo.png" alt="Logo" width={300} height={180}/>
          <h1>Titulo</h1>

          <p className="flex justify-between ">
            <span>Categoria</span>
            <Link href={"/products"}>Ver producto</Link>
          </p>

          <h2 className="flex justify-between">
            Small
            <p className="font-bold text-lg">$7000</p>
            <Image src={favSvg.img} alt="Arrow" width={20} height={30}/>
          </h2>

          <input type="hidden" name="id" value={id}/>
          <button className="inline-grid box-border p-2 border border-primaryColor rounded-sm w-full justify-items-center font-bold text-primaryColor text-lg hover:bg-secondaryColor hover:text-white hover:border-secondaryColor hover:cursor-pointer">
            Agregar al carrito
          </button>
        </form>
      </div>
    </div>
  )
}
