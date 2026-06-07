// adjust path as needed
import RoomDetails from "@/Components/RoomDetails";
import { Button } from "@heroui/react";
import Link from "next/link";

const fetchRoomDetails = async (id) => {
  try {
    // Directly fetch the data using the ID
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studies/${id}`);
    
    // If the response is not OK (e.g., 404), return null to trigger the "Not Found" UI
    if (!res.ok) {
      return null; 
    }
    
    const data = await res.json();
    return data; 
  } catch (error) {
    console.error("Error fetching room details:", error);
    return null;
  }
};

const RoomDetailsPage = async ({ params }) => {
  // Awaiting params is correct for Next.js 15+
  const { id } = await params; 
  
  const room = await fetchRoomDetails(id);
  console.log("Fetched room data:", room);

  // If the fetch fails or the ID doesn't exist, show the fallback UI
  if (!room || Object.keys(room).length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Room not found</h1>
          <p className="text-gray-600 mb-6">The room you're looking for doesn't exist.</p>
          <Link href="/allroom">
            <Button color="primary">Back to All Rooms</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Pass the valid room data to your component
  return <RoomDetails room={room} />;
};

export default RoomDetailsPage;