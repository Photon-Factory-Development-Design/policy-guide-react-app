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
    },
    formLabel: {
        fontSize: '14px'
    }
});

export default styles;
