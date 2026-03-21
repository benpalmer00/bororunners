"use client";

import Image from "next/image";
import Card from "../ui/Card";

type RunnerCardProps = {
  name: string;
  month: string;
  photo: string;
  isCurrent?: boolean;
};

export default function RunnerCard({ name, month, photo, isCurrent }: RunnerCardProps) {
  return (
    <Card className={`h-full text-center ${isCurrent ? "ring-2 ring-brand-red" : ""}`}>
      <div className="p-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
          <Image src={photo} alt={name} fill className="object-cover" sizes="96px" />
        </div>
        <h3 className="font-display text-lg font-bold uppercase text-brand-black">{name}</h3>
        <p className="text-brand-red font-medium text-sm">{month}</p>
        {isCurrent && (
          <span className="inline-block mt-2 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            Current Winner
          </span>
        )}
      </div>
    </Card>
  );
}
