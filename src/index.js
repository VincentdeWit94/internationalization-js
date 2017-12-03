// @flow
import R from 'ramda';

export default (() => {
  const localisedStrings: Object = {};
  let currentLanguage: string = '';
  let defaultLanguage: string = '';

  return {
    initWithLanuage(language: string, strings: Object) {
      localisedStrings[language] = strings;
    },
    initWithLanguages(languages: Object) {
      R.forEachObjIndexed((languageKey, strings) => {
        if (strings instanceof Object) {
          localisedStrings[languageKey] = strings;
        }
      }, languages);
    },
    setDefaultLanguage(language: string, isCurrentLanguage: ?bool) {
      defaultLanguage = language;
      currentLanguage = isCurrentLanguage ? defaultLanguage : currentLanguage;
    },
    getLanguage(): ?string {
      return currentLanguage !== '' ? currentLanguage : defaultLanguage;
    },
    getAvailableLanguages(): ?Array<string> {
      return R.keys(localisedStrings);
    },
    translate(key: string): ?string {
      return R.prop(key, R.prop(this.getLanguage(), localisedStrings));
    },
  };
})();
