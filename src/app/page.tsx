"use client";

import { QueryClientProvider } from '@tanstack/react-query';

import { SearchForm } from "./SearchForm";
import { useQueryClient } from '@/hooks/useQueryClient';

export default function Home() {
  const queryClient = useQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <SearchForm />
      </div>
    </QueryClientProvider>
  );
}
