"use client";

import Image from "next/image";
import Card from "../ui/Card";

type TeamCardProps = {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
  size?: "lg" | "md" | "sm";
  highlight?: boolean;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const sizeStyles = {
  lg: {
    avatar: "w-36 h-36 ring-[5px] ring-brand-red",
    initials: "text-3xl",
    name: "text-xl",
    role: "text-base",
    padding: "p-8",
    imgSize: "144px",
  },
  md: {
    avatar: "w-28 h-28 ring-4 ring-brand-red-light",
    initials: "text-2xl",
    name: "text-lg",
    role: "text-sm",
    padding: "p-6",
    imgSize: "112px",
  },
  sm: {
    avatar: "w-22 h-22 ring-3 ring-brand-red-light/60",
    initials: "text-xl",
    name: "text-base",
    role: "text-xs",
    padding: "p-5",
    imgSize: "88px",
  },
};

export default function TeamCard({ name, role, photo, bio, size = "md", highlight = false }: TeamCardProps) {
  const s = sizeStyles[size];

  return (
    <Card className={`h-full text-center ${highlight ? "ring-2 ring-brand-red shadow-lg bg-brand-red-light/20" : ""}`}>
      <div className={s.padding}>
        <div className={`relative ${highlight ? "w-32 h-32 ring-[5px] ring-brand-red" : s.avatar} rounded-full overflow-hidden mx-auto mb-4`}>
          {photo ? (
            <Image src={photo} alt={name} fill className="object-cover" sizes={highlight ? "128px" : s.imgSize} />
          ) : (
            <div className="w-full h-full bg-brand-red flex items-center justify-center">
              <span className={`font-display ${s.initials} font-bold text-white`}>
                {getInitials(name)}
              </span>
            </div>
          )}
        </div>
        <h3 className={`font-display ${highlight ? "text-xl" : s.name} font-bold uppercase text-brand-black`}>{name}</h3>
        <p className={`text-brand-red font-medium ${s.role} mb-2`}>{role}</p>
        {bio && <p className="text-brand-gray-600 text-sm">{bio}</p>}
      </div>
    </Card>
  );
}
