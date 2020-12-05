import { ReactNode } from "react";

export type GalleryItemType = {
  id: string;
  name: string;
  avatar?: string;
  images?: ReactNode[];
};

export type AlignType = "start" | "end";

export type GalleryItemProps = GalleryItemType & {
  align: AlignType;
};

export function GalleryItem(props: GalleryItemProps) {
  const { name, avatar, align } = props;
  const action = <button>потяни</button>;
  return (
    <div>
      {align === "start" && action}
      <img src={avatar} alt="section avatar" height={100} />
      {name}
      {align === "end" && action}
    </div>
  );
}
