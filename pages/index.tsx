import dynamic from "next/dynamic";
//@ts-ignore
const AddProduct = dynamic(() => import("partners/AddProduct"), { ssr: false });

export default function Home() {
  return (
    <>
      <div>This is the container App hosted at localhost:3000</div>
      <AddProduct />
    </>
  );
}
