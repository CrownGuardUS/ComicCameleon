const Languages = {
  EN: 'English',
  ES: 'Español',
  DE: 'Deutsch',
  FR: 'Français',
  PT: 'Português',
  ID: 'Bahasa Indonesia',
  RU: 'Русский',
  ZH: '話僮',
}

export default function getLanguageName(language) {
  return Languages[language] || language
}
