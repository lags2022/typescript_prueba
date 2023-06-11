import axios from "axios";
import { Sub, SubResponseFromApi } from "../types";

export const getAllSubs = async () => {
  const apiResponse = await fetchSubs();
  return mapFromApiToSubs(apiResponse);
};

const fetchSubs = async () => {
  const response = await axios.get<SubResponseFromApi>(
    "http://localhost:3001/suscribers"
  );
  return response.data;
};

const mapFromApiToSubs = (apiResponse: SubResponseFromApi): Array<Sub> => {
  return apiResponse.map((subFromApi) => {
    const {
      nick,
      months: subMonths,
      profileUrl: avatar,
      description,
    } = subFromApi;
    return {
      nick,
      subMonths,
      avatar,
      description,
    };
  });
};
