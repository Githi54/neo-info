import { NearEarthObjects } from "../neows-info";

export interface ResponseData {
  near_earth_objects: NearEarthObjects | undefined;
}

export interface AxiosResponse {
  data: ResponseData | undefined;
}
