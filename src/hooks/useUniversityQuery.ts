import { fetchUniversity } from '@/api/services';
import { useQuery } from '@tanstack/react-query';

interface University {
   name: string;
   // country: string;
 }

export function useUniversityQuery({ name, country }: {name?: string, country?: string}) {
   return useQuery<University, Error>({
     queryKey: ['university', name, country],
     queryFn: () => fetchUniversity(name, country),
     enabled: !!name,
   })
 }