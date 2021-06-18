import React from 'react';

// react virtualized
import {
    CellMeasurer,
    CellMeasurerCache,
    List,
    AutoSizer
} from 'react-virtualized';

// core components
import QuoteItem from 'components/QuoteItem/QuoteItem';

// material ui components
import Grid from '@material-ui/core/Grid';

const cache = new CellMeasurerCache({
    minHeight: 500,
    fixedWidth: true
});

const QuotesList = ({
    items,
    compareItems,
    onChangeCompareItems,
    ...props
}) => {
    const _listRef = React.useRef(null);

    const rowRenderer = ({ index, key, parent, style }) => {
        const item = items[index];

        const onChangeSize = () => {
            console.log('onChangeSize', _listRef.current);
            cache.clear(index, 0);

            setTimeout(() => {
                _listRef.current && _listRef.current.recomputeRowHeights(index);
            }, 500);
        };

        console.log('QuotesList>', compareItems);

        return (
            <CellMeasurer
                cache={cache}
                columnIndex={0}
                key={key}
                parent={parent}
                rowIndex={index}>
                {({ measure, registerChild }) => (
                    <div ref={registerChild} className="item" style={style}>
                        <Grid item key={item.key}>
                            <QuoteItem
                                canCompare={compareItems.length < 3}
                                index={index}
                                onChangeCompareItem={onChangeCompareItems}
                                quote={item}
                                measure={measure}
                                onChangeSize={onChangeSize}
                                compareSelected={compareItems
                                    .map((obj) => obj.key)
                                    .includes(item.key)}
                            />
                        </Grid>
                    </div>
                )}
            </CellMeasurer>
        );
    };

    return (
        <AutoSizer>
            {({ width, height }) => {
                console.log(width, height);
                return (
                    <List
                        {...props}
                        width={width}
                        height={height}
                        deferredMeasurementCache={cache}
                        rowHeight={cache.rowHeight}
                        ref={(ref) => {
                            // console.log('ref', ref.recomputeRowHeights);
                            _listRef.current = ref;
                        }}
                        rowRenderer={rowRenderer}
                        overscanRowCount={0}
                        rowCount={items.length}
                    />
                );
            }}
        </AutoSizer>
    );
};

export default QuotesList;
