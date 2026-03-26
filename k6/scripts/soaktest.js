import http from 'k6/http';
import { sleep } from 'k6';


export let options = {
vus: 20,
duration: '60m',
};


const BASE_URL = __ENV.BASE_URL || 'https://api.2klips.com';


export default function () {
http.get(`${BASE_URL}/banner-ads?approved=true&placement=WALLET_DETAILS`);
http.get(`${BASE_URL}/offers/getbyId:1`);
sleep(1);
}