import english from './en.json';
import spanish from './es.json';

const languages = {
    english:'en',
    spanish:'es'};

export const getI18N = ({ currentLocale = 'es'} : {currentLocale : string|undefined}) => {
    if (currentLocale == languages.english) return english
    if (currentLocale == languages.spanish) return spanish
    }
