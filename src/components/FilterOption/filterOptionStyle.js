const styles = () => ({
    accordionRoot: {
        backgroundColor: '#eee'
    },
    caret: {
        transition: 'all 150ms ease',
        '&.active': {
            transform: 'rotate(180deg)'
        }
    },
    anchor: {
        cursor: 'pointer'
    }
});

export default styles;
