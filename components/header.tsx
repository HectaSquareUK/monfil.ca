import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">My App</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-gray-100 dark:bg-gray-700"
          />
        </div>
        <Button>Get Started</Button>
      </div>
    </header>
  );
}