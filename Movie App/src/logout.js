import { navigationBar } from "./navigationbar.js";


export function logout(){
    localStorage.clear();
    navigationBar();
    location.href = '/';

}