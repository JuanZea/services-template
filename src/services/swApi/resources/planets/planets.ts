import { service } from '../../service';
import { TPlanetsResource } from './ts';

export const getIndex = async (): Promise<TPlanetsResource> => {
  const { data } = await service.get('planets');
  return data;
};
