//функцию get мы получаем в этой папке

import {API} from "./index";
export const getData = (route) => API.get(route)