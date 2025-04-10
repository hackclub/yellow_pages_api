import apiRoute from '@/lib/apiRoute';
import { data } from './data';

export async function search ({ network_id, name }) {
  const merchants = await data();

  if (network_id) {
    const name = merchants.find(m => m.network_ids.includes(network_id)).name || null;
    const icon_url = "https://yellow-pages.hackclub.dev/icons/" + name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') + ".svg";
    const icon = await fetch(icon_url).then(res => res.text());
    if (icon == "404: Not Found") return { name };
    return {
      name,
      network_id,
      icon,
      icon_url,
    };
  }

  if (name) {
    const network_ids = merchants.filter(m => m.name === name).map(m => m.network_ids).flat();
    const icon_url = "https://yellow-pages.hackclub.dev/icons/" + name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') + ".svg";
    const icon = await fetch(icon_url).then(res => res.text());
    if (icon == "404: Not Found") return { name, network_ids };
    return {
      name,
      network_ids,
      icon,
      icon_url,
    };
  }

  return {};
}

export default apiRoute(search);
