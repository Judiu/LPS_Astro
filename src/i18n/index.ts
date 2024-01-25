import english from './en.json';
import spanish from './es.json';
import portuguese from './pt.json'

const languages = {
    english:'en',
    portuguese: 'pt',
    spanish:'es'};

export const getI18N = ({ currentLocale = 'es'} : {currentLocale : string|undefined}) => {
    if (currentLocale == languages.english) return english
    if (currentLocale == languages.portuguese) return portuguese
    if (currentLocale == languages.spanish) return spanish
    
    }
