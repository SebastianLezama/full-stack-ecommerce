import { addToCart } from "@/helpers/actions";

export default function AddToCartButton() {
  const id = 3
  return (
    <form className="w-full" action={addToCart}>
      <input type="hidden" name="id" value={id}/>
      <button className="inline-grid box-border p-2 border border-primaryColor rounded-sm w-full justify-items-center font-bold text-primaryColor text-lg hover:bg-secondaryColor hover:text-white hover:border-secondaryColor hover:cursor-pointer">
        Agregar al carrito
      </button>
    </form>
  )
}
