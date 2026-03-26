import http from 'k6/http';
import { sleep } from 'k6';


export let options = {
stages: [
{ duration: '30s', target: 10 },
{ duration: '30s', target: 300 }, // spike
{ duration: '2m', target: 300 },
{ duration: '30s', target: 10 },
],
};


const BASE_URL = __ENV.BASE_URL || 'https://api.2klips.com';


export default function () {
http.get(`${BASE_URL}/banner-ads?approved=true&placement=WALLET_DETAILS`);
http.get(`${BASE_URL}/user/me`);
sleep(0.2);
}
