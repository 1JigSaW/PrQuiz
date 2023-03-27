import {useQuery} from '@tanstack/react-query';
import {API} from '../api/api';

export interface Levels {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export const LEVELSLIST_QUERY_KEY = 'level_list';

export const useLevelsList = () => {
  return useQuery<Levels[], Error, Levels[]>(
    [LEVELSLIST_QUERY_KEY],
    async () => {
      const response = await API.get('/api/levels/');
      return response.data;
    },
  );
};
