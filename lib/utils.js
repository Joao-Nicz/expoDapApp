import { MONTH_NAMES } from "./constants";


export function getMonthName(date){return MONTH_NAMES[date.getMonth()- 1]}