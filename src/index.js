// @flow
import * as R from 'ramda';

export default (() => {
  const localisedStrings: Object = {};
  let currentLanguage: string = '';
  let defaultLanguage: string = '';

  return {
    initWithLanuage(language: string, strings: Object) {
      localisedStrings[language] = strings;
    },
    initWithLanguages(languages: Object) {
      R.forEachObjIndexed((strings, languageKey) => {
        if (strings instanceof Object) {
          localisedStrings[languageKey] = R.prop(languageKey, strings);
        }
      }, languages);
    },
    setDefaultLanguage(language: string, isCurrentLanguage: ?boolean) {
      defaultLanguage = language;
      currentLanguage = isCurrentLanguage ? defaultLanguage : currentLanguage;
    },
    getLanguage(): ?string {
      return currentLanguage !== '' ? currentLanguage : defaultLanguage;
    },
    getAvailableLanguages(): ?Array<string> {
      return R.keys(localisedStrings);
    },
    getAllStringsForCurrentLanguage(): ?Object {
      return R.prop(this.getLanguage(), localisedStrings);
    },
    translate(key: string): ?string {
      const translation: ?string = R.prop(key, this.getAllStringsForCurrentLanguage());
      return translation !== undefined ? translation : key;
    },
  };
})();

