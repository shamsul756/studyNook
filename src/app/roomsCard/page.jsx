import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const RoomCard = ({ room }) => {
  
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl">
      <div className="relative h-56 w-full">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">
          {room.name}
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          {room.description}
        </p>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Floor:</span> {room.floor}
          </p>

          <p>
            <span className="font-semibold">Capacity:</span>{" "}
            {room.capacity}
          </p>

          <p>
            <span className="font-semibold">Rate:</span>{" "}
            {room.hourlyRate}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {room.amenities?.map((item, index) => (
            <span
              key={index}
              className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {item}
            </span>
          ))}
        </div>
          <Link href={`/allroom/${room._id}`}>
          <Button className="w-full my-3">
            View Details
          </Button>
        
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;