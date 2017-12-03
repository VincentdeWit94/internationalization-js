import * as R from 'ramda';

export default (() => {
  const localisedStrings = {};
  let currentLanguage = '';
  let defaultLanguage = '';

  return {
    /**
     * Set the strings from the strings object for a given language
     * @param {String} language
     * @param {Object} strings
     */
    setStringsForLanguage(language, strings) {
      localisedStrings[language] = strings;
    },
    /**
     * Loops over object of language strings objects and set them as string for the given language
     * @param {Object} languages
     */
    setStringsForLanguages(languages) {
      R.forEachObjIndexed((strings, languageKey) => {
        if (strings instanceof Object) {
          this.setStringsForLanguage(languageKey, R.prop(languageKey, strings));
        }
      }, languages);
    },
    /**
     * Set the default language to be used when no language has been set yet
     * @param {String} language
     * @param {Boolean} isCurrentLanguage
     */
    setDefaultLanguage(language, isCurrentLanguage) {
      defaultLanguage = language;
      currentLanguage = isCurrentLanguage ? defaultLanguage : currentLanguage;
    },
    /**
     * Get the currently selected language
     * Or the default language when no language has been set yet
     * @return {String} current or default language
     */
    getLanguage() {
      return currentLanguage !== '' ? currentLanguage : defaultLanguage;
    },
    /**
     * Get all available languages
     * @return {Array} array of language codes (string)
     */
    getAvailableLanguages() {
      return R.keys(localisedStrings);
    },
    /**
     * Get all available strings (with translation) for current language
     * @return {Object} All available strings
     */
    getAllStringsForCurrentLanguage() {
      return R.prop(this.getLanguage(), localisedStrings);
    },
    /**
     * Get a translation for given key
     * Returns key when no translation could be found
     * @param {String} key
     * @return {String} Translation or key
     */
    translate(key) {
      const translation = R.prop(key, this.getAllStringsForCurrentLanguage());
      return translation !== undefined ? translation : key;
    }
  };
})();