"use client"

import React, { useState } from 'react'
import DashNav from './DashNav'
import { GitFork, RefreshCw } from 'lucide-react';
import { repositories } from '../../../lib/data';
import { SearchBar } from '@/components/shared/SearchBar';
import { RepositoryCard } from '@/components/shared/RepositoryCard';
import "animate.css";

const Hero = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <main className='xl:w-[85%] w-full'>
      <DashNav/>


      {/* main content of the dashboard */}

      <div className="h-full bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="md:flex justify-between items-center mb-6 animate__animated animate__fadeInDown">
          <div className="mb-3 md:mb-1">
          <h1 className="text-3xl font-bold text-gray-900">Repositories</h1>
            <span className="text-lg text-gray-600">33 Respositories in total</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleRefresh}
              className="p-2 text-gray-600 flex items-center justify-center gap-1 hover:text-gray-900 rounded-md hover:bg-gray-100 whitespace-nowrap text-sm"
            >
              <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh All
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md flex items-center gap-2 whitespace-nowrap text-sm">
              <GitFork className="w-4 h-4" />
              Add Repository
            </button>
          </div>
        </div>

        <SearchBar onChange={setSearchQuery} />

        <div className="bg-white rounded-lg shadow">
          {filteredRepositories.map((repo, index) => (
            <RepositoryCard
              key={repo.name}
              repository={repo}
              isLast={index === filteredRepositories.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
      </main>
  )
}

export default Hero