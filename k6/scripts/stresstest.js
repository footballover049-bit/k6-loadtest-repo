import http from 'k6/http';
import { check, sleep } from 'k6';


export let options = {
stages: [
{ duration: '2m', target: 50 },
{ duration: '3m', target: 200 },
{ duration: '5m', target: 500 },
{ duration: '5m', target: 0 },
],
thresholds: {
http_req_duration: ['p(95)<1000'],
},
};


const BASE_URL = __ENV.BASE_URL || 'https://api.2klips.com';


export default function () {
// simple read-heavy path
http.get(`${BASE_URL}/banner-ads?approved=true&placement=WALLET_DETAILS`);
http.get(`${BASE_URL}/banner-ads/ById/2`);
http.get(`${BASE_URL}/offers/getbyId:1`);
sleep(0.5);
}