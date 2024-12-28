import Category from "./component/category";
import dynamic from "next/dynamic";
import CategoryTextPreloader from "./component/categoryTextPreloader";
import Card from "./component/card";

const CategoryText = dynamic(() => import("./component/categoryText"), {
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
