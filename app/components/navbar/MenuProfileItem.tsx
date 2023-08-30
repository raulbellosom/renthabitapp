"use client";

interface MenuProfileItemProps {
  onClick: () => void;
  label: string | null | undefined;
  image?: string | null | undefined;
}

const MenuProfileItem: React.FC<MenuProfileItemProps> = ({
  onClick,
  label,
  image,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 p-2 hover:bg-neutral-100 transition cursor-pointer"
    >
      <img
        src={image || "/images/placeholder.jpg"}
        className="md:hidden rounded-full w-10 h-10"
      />
      <div className="flex-1 md:p-2">
        <div className="text-sm text-neutral-700 font-semibold">{label}</div>
        <div className="text-xs text-neutral-500">View profile</div>
      </div>
    </div>
  );
};

export default MenuProfileItem;
