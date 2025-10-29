const PROD = false;

const PROD_URL="http://localhost:9000/api";
const DEV_URL="http://localhost:8000/api";

const BASE_URL = PROD ? PROD_URL: DEV_URL;

export default BASE_URL 