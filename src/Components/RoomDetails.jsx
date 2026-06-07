// components/RoomDetails.jsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

const RoomDetails = ({ room }) => {
  if (!room) return <div>Loading...</div>;

  const {
    _id,
    name,
    description,
    image,
    floor,
    capacity,
    hourlyRate,
    amenities,
  } = room;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link href="/allroom" className="mb-8">
          <Button variant="bordered" className="rounded-lg">
            ← Back to Rooms
          </Button>
        </Link>

        {/* Main Content */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Image */}
          <div className="relative h-96 w-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{name}</h1>

            <p className="text-lg text-gray-600 mb-8">{description}</p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 py-8 border-y border-gray-200">
              <div>
              
                <p className="text-sm font-semibold text-gray-500 uppercase">Floor</p>
                <p className="text-2xl font-bold text-gray-900">{floor}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase">Capacity</p>
                <p className="text-2xl font-bold text-gray-900">{capacity} people</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase">Hourly Rate</p>
                <p className="text-2xl font-bold text-gray-900">৳{hourlyRate}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase">Room ID</p>
                <p className="text-sm font-mono text-gray-600">{_id}</p>
              </div>
            </div>

            {/* Amenities */}
            {amenities && amenities.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-3">
                  {amenities.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-full"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-8">
              <Button color="primary" size="lg" className="flex-1 rounded-lg">
                Book Now
              </Button>
              <Link href="/allroom" className="flex-1">
                <Button variant="secondary" size="lg" className="w-full rounded-lg">
                  Continue 
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;