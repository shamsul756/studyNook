import { Button } from "@heroui/react";
import { Search, Filter } from "lucide-react";
import { Label, SearchField } from "@heroui/react";
import RoomCard from "../roomsCard/page";

const fetchCards = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studies`);
  const data = await res.json();
  return data || [];
};

const AllRoomsPage = async () => {
  const studies = await fetchCards();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Explore Our
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Premium Rooms
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 md:text-xl">
            Discover quiet, comfortable, and fully-equipped study rooms designed
            to help you stay productive and focused.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="flex overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto">
              <SearchField name="search" className="flex-1">
                <SearchField.Group className="border-0 shadow-none">
                  <SearchField.SearchIcon />
                  <SearchField.Input
                    className="w-full sm:w-[320px] border-none focus:ring-0"
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

      {/* Filter & Results Section */}
      <div className="container mx-auto px-6 pb-20">
        {/* Filter Bar */}
        <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filter Results</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant="bordered"
              size="sm"
              className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              All Rooms
            </Button>
            <Button
              variant="bordered"
              size="sm"
              className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              By Price
            </Button>
            <Button
              variant="bordered"
              size="sm"
              className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              By Capacity
            </Button>
            <Button
              variant="bordered"
              size="sm"
              className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              By Floor
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            All Rooms
            <span className="text-base font-normal text-gray-500 ml-2">
              ({studies?.length || 0} available)
            </span>
          </h2>
        </div>

        {/* Grid Layout - Responsive */}
        {studies && studies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study) => (
              <RoomCard key={study._id} room={study} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No rooms available
              </h3>
              <p className="text-gray-600 mb-6">
                Check back later for more study room options.
              </p>
              <Button color="primary" className="rounded-lg">
                Go Back Home
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRoomsPage;