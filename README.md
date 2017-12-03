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
L.initWithLanguages(Translations); // This function adds the translation strings into our plugin
L.setDefaultLanguage('nl', true); // You can use whatever language code styling you prefer, as long as you keep the key in the language file the same
```

## Available methods



## License

MIT