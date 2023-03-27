import {useQuery} from '@tanstack/react-query';
import {API} from '../api/api';

export interface SubGroup {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export const SUBGROUPSLIST_QUERY_KEY = 'subgroup_list';

export const useSubGroupList = (id: number) => {
  return useQuery<SubGroup[], Error, SubGroup[]>(
    [SUBGROUPSLIST_QUERY_KEY],
    async () => {
      const response = await API.get(`/api/subgroup/${id}`);
      return response.data;
    },
  );
};
