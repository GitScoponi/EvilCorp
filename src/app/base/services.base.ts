
// export const URLBASE = window.location.origin + '/spw/API/GDC/';

import { HttpHeaders } from "@angular/common/http";

export const URLBASE = "https://localhost:7079/";

export function getHeaders() {
    var headers = new HttpHeaders().set("Content-Type", "application/json");
    return { headers: headers };
}
export function getHeadersAuthorize() {
    const token = localStorage.getItem("token"); // Substitua pelo seu token real
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    return { headers: headers };
}
