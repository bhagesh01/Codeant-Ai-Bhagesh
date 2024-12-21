import { Repository } from '@/app/types/respository';
import { Lock, Globe2, Database } from 'lucide-react';

interface RepositoryCardProps {
  repository: Repository;
  isLast: boolean;
}

export function RepositoryCard({ repository, isLast }: RepositoryCardProps) {
  return (
    <div className={`p-4 ${!isLast ? 'border-b border-gray-200' : ''} hover:bg-gray-100 cursor-pointer`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-blue-600">
              {repository.name}
            </h2>
            <span className="text-xs sm:text-sm px-2 py-1 rounded-full border border-gray-300 flex items-center gap-1 text-blue-600 bg-[#EFF8FF]">
              {repository.visibility === 'Private' ? (
                <Lock className="w-3 h-3" />
              ) : (
                <Globe2 className="w-3 h-3" />
              )}
              {repository.visibility}
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2 sm:text-sm text-xs text-gray-500">
            <span className='flex items-center justify-center gap-1'>{repository.language} <div className='rounded-full h-2 w-2 bg-blue-400'>
              </div></span>
            <span className='flex items-center justify-center gap-1'> <Database height={12} width={12}/> {repository.size}</span>
            <span>Updated {repository.updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}