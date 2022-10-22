import MenuItemCard from "../../components/MenuItemCard";
import menuData from "../../data/menu.json";

const MenuPage = () => {
  return (
    <div>
      {menuData.map((menuItem) => {
        return <MenuItemCard item={menuItem} />;
      })}
    </div>
  );
};

export default MenuPage;
