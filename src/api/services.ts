import axios from './axios';

export interface UniversityProps {
   name: string;
}

export const fetchUniversity = async (name?: string, country?: string): Promise<UniversityProps> => {
  const { data } = await axios.get<UniversityProps>(`/search/?country=${country ?? 'Czech+Republic'}${name ? `&name=${name}` : ''}`);
  return data;
};