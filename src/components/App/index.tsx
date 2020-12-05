import { Gallery } from "../Gallery";
import { GalleryItemType } from "../Gallery/GalleryItem";

import food from "./food.jpg";
import portret from "./portret.jpg";
import street from "./street.jpg";
import "./App.css";

const config: GalleryItemType[] = [
  {
    id: "Фудфото",
    name: "Фудфото",
    avatar: food,
  },
  {
    id: "Портрет",
    name: "Портрет",
    avatar: portret,
  },
  {
    id: "Стритфото",
    name: "Стритфото",
    avatar: street,
  },
];

export function App() {
  return (
    <div className="app">
      <header className="header">Arina Zhenetl</header>
      <main className="main">
        <h1>Портфолио</h1>
        <section>
          <h2>Галерея</h2>
          <Gallery config={config} />
        </section>
      </main>
      <footer>
        <h2>Контакты</h2>
      </footer>
    </div>
  );
}
