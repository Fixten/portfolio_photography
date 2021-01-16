import { ReactElement } from "react";
import { GalleryItem, GalleryItemType } from "./GalleryItem";
import { getAlign } from "./getAlign";

type Props = {
  config: GalleryItemType[];
};

export function Gallery(props: Props): ReactElement {
  const { config } = props;
  return (
    <>
      {config.map((item, index) => (
        <GalleryItem {...item} align={getAlign(index)} key={item.id} />
      ))}
    </>
  );
}
