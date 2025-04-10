import apiRoute from '@/lib/apiRoute';
import { data } from './data';

export async function search ({ network_id, name }) {
  const merchants = await data();

  if (network_id) {
    const { name, network_id, icon_url } = merchants.find(m => m.network_ids.includes(network_id)) || {};
    return {
      name,
      network_id,
      icon: icon_url ? await fetch(icon_url).then(res => res.text()) : undefined,
      icon_url,
    };
  }

  if (name) {
    const filteredMerchants = merchants.filter(m => m.name?.toLowerCase?.()?.includes?.(name.toLowerCase()));
    const network_ids = filteredMerchants.map(m => m.network_ids).flat();
    const icon_url = filteredMerchants.map(m => m.icon_url).flat().filter(m => m)[0]
    const realName = filteredMerchants.map(m => m.name).flat().filter(m => m)[0]
    return {
      name: realName,
      network_ids,
      icon: icon_url ? await fetch(icon_url).then(res => res.text()) : undefined,
      icon_url,
    };
  }

  return {};
}

export default apiRoute(search);
