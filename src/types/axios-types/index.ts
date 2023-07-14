import { NeowInfo } from "../neows-info";

interface NearEarthObjects {
  "2023-07-01": NeowInfo;
  "2023-07-02": NeowInfo;
  "2023-07-03": NeowInfo;
  "2023-07-04": NeowInfo;
  "2023-07-05": NeowInfo;
  "2023-07-06": NeowInfo;
  "2023-07-07": NeowInfo;
  "2023-07-08": NeowInfo;
}

interface ResponseData {
  near_earth_objects: NearEarthObjects[];
}

export interface AxiosResponse {
  data: ResponseData | undefined;
}
