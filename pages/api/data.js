import apiRoute from '@/lib/apiRoute';
import { parse } from 'yaml'

export async function data () {
    const raw = await fetch("https://raw.githubusercontent.com/hackclub/yellow_pages/refs/heads/main/lib/yellow_pages/merchants.yaml").then(res => res.text());
    const parsed = parse(raw);

    console.log("Parsed data:", parsed);
    return parsed;
}

export default apiRoute(data);
