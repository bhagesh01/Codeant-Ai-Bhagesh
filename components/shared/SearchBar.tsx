import { Search } from 'lucide-react';

interface SearchBarProps {
  onChange: (value: string) => void;
}

export function SearchBar({ onChange }: SearchBarProps) {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search Repositories"
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md  focus:border-transparent"
      />
    </div>
  );
}