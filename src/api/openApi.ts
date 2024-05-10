import axios, { AxiosError } from 'axios';
export interface CultureType {
  activityId: number | undefined;
  placenm: string | undefined;
  svcnm: string | undefined;
}
export const informationApi = async () => {
  try {
    const res = await axios.get('/api/openAPI/informations/check');
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const seoulGoodsApi = async () => {
  try {
    const res = await axios.get('/api/openAPI/seoulgoods/1/check');
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const activitiesApi = async () => {
  try {
    const res = await axios.get('/api/openAPI/activities/check');
    //const slice = res.data.slice(190, 200);
    const filteredData = res.data.filter((_: unknown, index: number) =>
      [2, 96, 196, 198, 301, 302, 303, 304, 305, 315, 316].includes(index),
    );
    //console.log(filteredData);
    return filteredData;
    //return slice;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const activitiesMonthApi = async () => {
  try {
    const res = await axios.get('/api/openAPI/activities/check');
    const slice = res.data.slice(0, 100);
    const today = new Date();
    const filtered2 = await slice.filter(
      (item: { rcptenddt: number; placenm: string }) => {
        const condition = new Date(item.rcptenddt) > today;
        return condition;
      },
    );
    return filtered2;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const hotelsnApi = async () => {
  try {
    const res = await axios.get('/api/openAPI/hotels');
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const landmarksnApi = async (search: string) => {
  try {
    const res = await axios.get('/api/openAPI/landmarks/check');
    const searchData = res.data.filter(
      (item: { address: string | string[] }) => {
        if (item.address.includes(search)) {
          return true;
        } else {
          return false;
        }
      },
    );
    return searchData;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
export const restaurantsApi = async () => {
  try {
    const res = await axios.get('/api/openAPI/restaurants/check');
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};