// import Category from "../component/module/category";
import dynamic from "next/dynamic";
import CategoryTextPreloader from "../component/module/categoryTextPreloader";
import Card from "@/component/module/card";

const CategoryText = dynamic(() => import("@/component/module/categoryText"), {
  ssr: true,
  loading: () => <CategoryTextPreloader/>, // Ваш прелоадер
});

const Main = () => {
  const category = {
    title:"Категории",
    json:[
      {title:"Burger",link:"/"}
    ]
  }
  return (
    <main className="block_animation">
      {/* <Category /> */}
      <CategoryText />
      <Card />
    </main>
  );
}

export default Main;
