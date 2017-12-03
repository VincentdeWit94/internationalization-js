// @flow
import * as R from 'ramda';

export default (() => {
  const localisedStrings: Object = {};
  let currentLanguage: string = '';
  let defaultLanguage: string = '';

  return {
    /**
     * Set the strings from the strings object for a given language
     * @param {String} language
     * @param {Object} strings
     */
    setStringsForLanguage(language: string, strings: Object) {
      localisedStrings[language] = strings;
    },
    /**
     * Loops over object of language strings objects and set them as string for the given language
     * @param {Object} languages
     */
    setStringsForLanguages(languages: Object) {
      R.forEachObjIndexed((strings, languageKey) => {
        if (strings instanceof Object) {
          this.addStringsForLanguage(languageKey, R.prop(languageKey, strings));
        }
      }, languages);
    },
    /**
     * Set the default language to be used when no language has been set yet
     * @param {String} language
     * @param {Boolean} isCurrentLanguage
     */
    setDefaultLanguage(language: string, isCurrentLanguage: ?boolean) {
      defaultLanguage = language;
      currentLanguage = isCurrentLanguage ? defaultLanguage : currentLanguage;
    },
    /**
     * Get the currently selected language
     * Or the default language when no language has been set yet
     * @param {String} language
     * @param {Boolean} isCurrentLanguage
     * @return {String} current or default language
     */
    getLanguage(): ?string {
      return currentLanguage !== '' ? currentLanguage : defaultLanguage;
    },
    /**
     * Get all available languages
     * @return {Array} array of language strings
     */
    getAvailableLanguages(): ?Array<string> {
      return R.keys(localisedStrings);
    },
    /**
     * Get all available strings (with translation) for current language
     * @return {Object} All available strings
     */
    getAllStringsForCurrentLanguage(): ?Object {
      return R.prop(this.getLanguage(), localisedStrings);
    },
    /**
     * Get a translation for given key
     * Returns key when no translation could be found
     * @param {String} key
     * @return {String} Translation or key
     */
    translate(key: string): ?string {
      const translation: ?string = R.prop(key, this.getAllStringsForCurrentLanguage());
      return translation !== undefined ? translation : key;
    },
  };
})();
