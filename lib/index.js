import R from 'ramda';

export default (() => {
  let localisedStrings = {};
  let currentLanguage = '';
  let defaultLanguage = '';

  return {
    initWithLanuage(language, strings) {
      localisedStrings[language] = strings;
    },
    initWithLanguages(languages) {
      R.forEachObjIndexed((languageKey, strings) => {
        if (strings instanceof Object) {
          localisedStrings[languageKey] = strings;
        }
      }, languages);
    }
  };
})();