import MenuItemCard from "../../components/MenuItemCard";
import menuData from "../../data/menu.json";

const MenuPage = () => {
  return (
    <div>
      {/* mapping through the array of menu items and returning a card for each one of them */}
      {menuData.map((menuItem) => {
        // passing the menuItem data as a prop to the MenuItemCard
        return <MenuItemCard item={menuItem} />;
      })}
    </div>
  );
};

export default MenuPage;
