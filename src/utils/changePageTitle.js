import setting from "@/settings";

export default function changePageTitle(title) {
  if (typeof title === 'string')
    window.document.title = title ? `${title} - ${setting.title}` : setting.title
}
