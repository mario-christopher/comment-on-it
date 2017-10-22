export const joinStyles = (...styles) => {
    return styles.reduce((acc, curr) => {
        return { ...acc, ...curr };
    })
}

export const styles = {

    button: {
        background: 'white',
        color: 'palevioletred',
        padding: '4px',
        margin: '8px',
        border: '2px solid palevioletred',
        borderRadius: '3px',
        cursor: 'pointer'
    },

    textBox: {
        padding: '0.5em',
        margin: '0.5em',
        fontSize: '16px',
        color: 'palevioletred',
        border: '1px solid papayawhip',
        borderRadius: '3px',
    },

    textBox2: {
        padding: '0.5em',
        margin: '0 0.5em',
        fontSize: '16px',
        color: 'palevioletred',
        border: '1px solid papayawhip',
        borderRadius: '3px',
    },

    div: {
        fontSize: '14px',
        border: '1px solid #FFD55F',
        borderRadius: '3px',
        margin: '2px'
    },

    div2: {
        fontSize: '16px',
        borderBottom: '1px solid #FFD55F',
        margin: '2px'
    },

    label: {
        margin: '2px 4px',
        fontSize: '12px',
        color: '#FF4949'
    },

    label2: {
        margin: '2px 4px',
        fontSize: '14px',
        color: 'palevioletred'
    },

    label3: {
        margin: '0.5em',
        margin: '2px 10px',
        fontSize: '16px',
        color: 'palevioletred'
    },

    title: {
        fontSize: '16px',
        textAlign: 'left',
        paddingLeft: '5px',
        color: '#FF4949',
        margin: '6px 2px',
    },

    fontFamily: {
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    col: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },

    stretch: {
        flex: 1
    },

    spcTop: {
        marginTop: '10px'
    },

    commentAdd: {
        width: '3.5em'
    },

    header: {
        background: '#FFD55F'
    },

    loginParent: {
        position: 'relative'
    },

    center: {
        position: 'absolute',
        left: '50%'
    },

    login: {
        height: '260px',
        width: '250px',
        position: 'relative',
        left: '-50%',
        top: '10px',
        border: '1px solid palevioletred',
        borderRadius: '3px',
        padding: '5px',
        background: 'papayawhip',
    },

    modalBg: {
        background: '#C0CCDA'
    },

    loading: {
        display: 'inline - block',
        animationName: keyframe,
        animationDelay: '1s',
        animationDuration: 'infinite',
        animationDirection: 'linear',
        padding: '5px',
        margin: '5px',
        fontSize: '1.2rem'
    }
}

const keyframe = {
    from: {
        transform: 'rotate(0deg)'
    },
    to: {
        transform: 'rotate(360deg)'
    }
}