import {useQuery} from '@tanstack/react-query';
import {API} from '../api/api';

export interface Quiz {
  id: number;
  question: string;
  created_at: string;
  updated_at: string;
  group: number;
  subgroup: number;
  level: number;
  answer_type: number;
  option_1: string;
  option_2: string;
  option_3: string;
  option_4: string;
  answer_text: string;
  correct_answer: string;
}

export const QUESTIONSLIST_QUERY_KEY = 'questions_list';

export const useQuestionsList = (
  group_id: number,
  subgroup_id: number,
  level_id: number,
) => {
  return useQuery<Quiz[], Error, Quiz[]>(
    [QUESTIONSLIST_QUERY_KEY],
    async () => {
      const response = await API.get(
        `/api/questions/${group_id}/${subgroup_id}/${level_id}`,
      );
      return response.data;
    },
  );
};
