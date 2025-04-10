import apiRoute from '@/lib/apiRoute';

export async function icons () {
    const { tree } = await fetch("https://api.github.com/repos/hackclub/yellow_pages/git/trees/main?recursive=1").then(res => res.json());
    const icons = tree.filter(f => f.path.startsWith("lib/assets/icons/") && f.path.endsWith(".svg")).map(f => f.path.substring(17, f.path.length - 4));

    return icons;
}

export default apiRoute(icons);
