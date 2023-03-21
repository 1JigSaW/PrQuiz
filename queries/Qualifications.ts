import {useQuery} from '@tanstack/react-query';
import {API} from '../api/api';

export interface Qualifications {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export const QUALIFICATIONSLIST_QUERY_KEY = 'qualification_list';

export const useQualificationsList = () => {
  return useQuery<Qualifications[], Error, Qualifications[]>(
    [QUALIFICATIONSLIST_QUERY_KEY],
    async () => {
      const response = await API.get('/api/qualifications/');
      return response.data;
    },
  );
};
