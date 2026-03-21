"use client";

import Image from "next/image";
import Card from "../ui/Card";

type TeamCardProps = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
};

export default function TeamCard({ name, role, photo, bio }: TeamCardProps) {
  return (
    <Card className="h-full text-center">
      <div className="p-6">
        <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-brand-red-light">
          <Image src={photo} alt={name} fill className="object-cover" sizes="112px" />
        </div>
        <h3 className="font-display text-lg font-bold uppercase text-brand-black">{name}</h3>
        <p className="text-brand-red font-medium text-sm mb-2">{role}</p>
        {bio && <p className="text-brand-gray-600 text-sm">{bio}</p>}
      </div>
    </Card>
  );
}
