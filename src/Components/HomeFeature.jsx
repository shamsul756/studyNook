import { fetchCardsRoom } from "@/lib/studies/data";
import { Button, SearchField } from "@heroui/react";
import { Search } from "lucide-react";
import RoomCard from "@/app/roomsCard/page";

const HomePage = async () => {
  const studies = await fetchCardsRoom();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Explore Our
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Premium Rooms
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 md:text-xl">
            Discover quiet, comfortable, and fully-equipped study rooms designed
            to help you stay productive and focused.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center">
            <div className="flex overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg w-full max-w-xl">
              <SearchField name="search" className="flex-1">
                <SearchField.Group className="border-0 shadow-none">
                  <SearchField.SearchIcon />
                  <SearchField.Input
                    className="border-none focus:ring-0"
                    placeholder="Search study rooms..."
                  />
                  <SearchField.ClearButton />
                </SearchField.Group>
              </SearchField>

              <Button
                color="primary"
                radius="none"
                className="px-6 font-semibold"
                startContent={<Search size={18} />}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="container mx-auto px-6 pb-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Study Rooms
          </h2>
         
        </div>

        {studies?.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studies.map((study) => (
              <RoomCard key={study._id} room={study} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              No rooms available
            </h3>
            <p className="text-gray-600">
              Check back later for more study room options.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;