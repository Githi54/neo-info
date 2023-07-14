import { NearEarthObjects } from "../neows-info";

interface ResponseData {
  near_earth_objects: NearEarthObjects[];
}

export interface AxiosResponse {
  data: ResponseData | undefined;
}
