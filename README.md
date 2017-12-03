# Internationalization.js

## Add to your project
### NPM
```
npm install internationalization-js
```

### Yarn
```
yarn add internationalization-js
```

## Add translation files to your project
I prefer to make one file per language and then combine them in one js file, but you could also put all translations in one big file or use seperate files and import them seperatly.

```jsx
export default {
  en: {
    welcome: 'Welcome to my cool React app',
    log_in: 'Log in',
    log_out: 'Log out',
    account: 'Account',
  }
};
```

```jsx
export default {
  nl: {
    welcome: 'Welkom bij mijn coole React app',
    log_in: 'Log in',
    log_out: 'Log out',
    account: 'Account',
  }
};
```

```jsx
import nl from './nl';
import en from './en';

export default {
  nl,
  en,
};
```

## Setup in your project

Now it's time to import the translations and import them into the plugin.

```jsx
import I from 'internationalization-js';
import Translations from './localisation';

...
L.setStringsForLanguages(Translations); // This function adds the translation strings into our plugin
L.setDefaultLanguage('nl', true); // You can use whatever language code styling you prefer, as long as you keep the key in the language file the same
```

Let's translate!

```jsx
import I from 'internationalization-js';
const localizedWelcome = I.translate('welcome'); // returns => 'Welkom bij mijn coole React app'
```

Or for example in your react app
```jsx
import I from 'internationalization-js';

...
render () {
    return (
        <View>
            <Text>{I.translate('welcome')}</Text>
        </View>
    );
}
```

## Available methods

| Method                          | Description                                                                                   | Parameters                                  | Returns                                         |
|---------------------------------|-----------------------------------------------------------------------------------------------|---------------------------------------------|-------------------------------------------------|
| setStringsForLanguage           | Set the strings from the strings object for a given language                                  | language: string strings: object            |                                                 |
| setStringsForLanguages          | Loops over object of language strings objects and set them as string for the given language   | languages: Object                           |                                                 |
| setDefaultLanguage              | Set the default language to be used when no language has been set yet                         | language: string isCurrentLanguage: boolean |                                                 |
| getLanguage                     | Get the currently selected language Or the default language when no language has been set yet |                                             | string: current or default language             |
| getAvailableLanguages           | Get all available languages                                                                   |                                             | array<string>: array of language codes (string) |
| getAllStringsForCurrentLanguage | Get all available strings (with translation) for current language                             |                                             | object: all available strings                   |
| translate                       | Get a translation for given key Returns key when no translation could be found                | key: string                                 | string: translation or key                      |

## License

MIT