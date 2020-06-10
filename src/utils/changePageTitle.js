import setting from "@/settings";

export default function changePageTitle(title) {

    window.document.title = title ? `${title} - ${setting.title}` : setting.title
}
