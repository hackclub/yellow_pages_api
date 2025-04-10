import apiRoute from '@/lib/apiRoute';
import { parse } from 'yaml'
import { icons } from './icons';

export async function data () {
    const raw = await fetch("https://raw.githubusercontent.com/hackclub/yellow_pages/refs/heads/main/lib/yellow_pages/merchants.yaml").then(res => res.text());
    const parsed = parse(raw);

    const iconList = await icons();

    console.log("Parsed data:", parsed);

    return parsed.map(merchant => {
        console.log(merchant)
        const iconName = merchant.name?.toLowerCase?.()?.replace?.(/[^a-zA-Z0-9]/g, '');
        if (iconList.includes(iconName)) {
            merchant.icon_url = "https://yellow-pages.hackclub.dev/icons/" + iconName + ".svg";
        }

        return merchant;
    });
}

export default apiRoute(data);
