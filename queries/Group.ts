import {useQuery} from '@tanstack/react-query';
import {API} from '../api/api';

export interface Group {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export const GROUPSLIST_QUERY_KEY = 'group_list';

export const useGroupsList = () => {
  return useQuery<Group[], Error, Group[]>([GROUPSLIST_QUERY_KEY], async () => {
    const response = await API.get('/api/group/');
    return response.data;
  });
};
