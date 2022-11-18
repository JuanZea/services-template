import { service } from '../../service';
import { TPeopleResource } from './ts';

export const getIndex = async (): Promise<TPeopleResource> => {
  const { data } = await service.get('people');
  return data;
};
