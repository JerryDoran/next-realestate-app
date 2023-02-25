import { axios } from '../../../lib/axios';

export async function getProperty(id) {
  const { data } = await axios.get('/properties/detail', {
    params: { externalID: id },
  });
  return data;
}
