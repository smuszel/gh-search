import jss from 'jss';
import preset from 'jss-preset-default';

// Wanted to try out JSS, since you mentioned it in the interview ;)
jss.setup(preset());

// TODO split into smaller sheets
const styleObj = {
    '@global': {
        ul: {
            'list-style-type': 'none',
            margin: 0,
            padding: 0,
        },
        a: {
            'text-decoration': 'none',
        },
        body: {
            margin: 0,
            // We use typography from github
            'font-family': '"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
        },
        '#root': {
            'background-color': '#219cd7',
            display: 'flex',
            'justify-content': 'space-around',
            'align-items': 'center',
            width: '100vw',
            height: '100vh',
        },
        // TODO figure out how to efficienlty integrate typehead library with JSS
        '.react-autosuggest__container': {
            width: '100%',
        },
        '.react-autosuggest__suggestions-container': {
            position: 'absolute',
            'z-index': 10,
            'margin-top': 10,
            overflow: 'hidden',
            border: '3px solid #c4bcbc',
            display: 'none',
        },
        '.react-autosuggest__suggestions-container--open': {
            display: 'block',
        },
    },
    searchBox: {
        // Using similar styles to the ones on github
        width: '94%',
        'background-color': '#fafbfc',
        'background-position': 'right 8px center',
        'background-repeat': 'no-repeat',
        border: '1px solid #d1d5da',
        'border-radius': '3px',
        'box-shadow': 'inset 0 1px 2px rgba(27,31,35,.075)',
        color: '#24292e',
        'line-height': '20px',
        outline: 'none',
        padding: '3px 8px',
        'vertical-align': 'middle',
        '&:focus': {
            'border-color': '#2188ff',
            'box-shadow':
                'inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3)',
        },
    },
    suggestion: {
        display: 'flex',
        'align-items': 'center',
        border: '1px solid #c4bcbc',
        cursor: 'pointer',
        padding: '9px 0 9px 5px',
        transition: 'background 200ms',
        background: 'rgba(0,0,0, 0.1)',
        '&:hover': {
            border: '1px solid #48bb4885',
            background: '#48bb4885',
        },
    },
    suggestionSelected: {
        border: '1px solid #00be00',
        background: '#00be00',

        '&:hover': {
            border: '1px solid #00be00',
            background: '#00be00',
        },
    },
    suggestionAvatar: {
        width: 34,
        height: 34,
        'margin-right': '10px',
    },
    userDetails: {
        extend: 'container',
    },
    userSummary: {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        // TODO consider putting classes
        '&>img': {
            width: 160,
            padding: 10,
            border: '1px solid black',
            background: 'rgba(0,0,0, 0.1)',
        },
    },
    userProperties: {
        // TODO make responsive
        width: 280,
        'border-top': '1px solid black',
        'padding-top': 20,
        // TODO consider putting classes
        '&>li>label': {
            'font-weight': 'bold',
            'margin-right': 5,
            'text-transform': 'capitalize',
        },
    },
    searchContainer: {
        extend: 'container',
    },
    suggestionText: {
        width: 242,
        overflow: 'hidden',
    },
    container: {
        position: 'relative',
        // TODO make responsive
        width: 300,
        height: 600,
        padding: 20,
        'border-radius': 15,
        background: 'beige',
        display: 'flex',
        'box-shadow': 'rgba(0, 0, 0, 0.1) 0px 0px 10px',
        'justify-content': 'space-around',
    },
    octocat: {
        // TODO implement as background
        position: 'absolute',
        top: 80,
        left: 0,
        opacity: 0.05,
        'max-width': '100%',
        'max-height': '100%',
    },
    magnifyingGlass: {
        // TODO implement as background
        position: 'absolute',
        top: 80,
        left: 40,
        opacity: 0.05,
        'max-width': '100%',
        'max-height': '40%',
    },
    selectMessage: { 'line-height': '25px' },
    '@media (min-width: 1024px)': {},
};

//@ts-ignore
export const style = jss.createStyleSheet(styleObj).attach().classes;
console.log(style);
