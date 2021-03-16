import React from 'react';
// Components
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListSubheader from '@material-ui/core/ListSubheader';
import PropTypes from 'prop-types';
import { VariableSizeList } from 'react-window';
import { getArrayLength } from 'utils/array_utils';

import { Required } from './validators';
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect';

const LISTBOX_PADDING = 8; // px

const renderRow = props => {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: style.top + LISTBOX_PADDING
    }
  });
};

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

const useResetCache = data => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
};

// Adapter for react-window
const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref
) {
  const { children, ...other } = props;
  const itemData = React.Children.toArray(children);
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
  const itemCount = getArrayLength(itemData);
  const itemSize = smUp ? 36 : 48;

  const getChildSize = child => {
    if (React.isValidElement(child) && child.type === ListSubheader) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={index => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}>
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

ListboxComponent.propTypes = {
  children: PropTypes.node
};

const renderGroup = params => [
  <ListSubheader key={params.key} component="div">
    {params.group}
  </ListSubheader>,
  params.children
];

const CustomComboBox = ({
  onChange,
  value,
  options,
  optionRenderer,
  label,
  variant = 'outlined',
  classes: propsClasses,
  onValidated,
  submitted,
  ...props
}) => {
  const classes = { ...propsClasses, popper: 'z-index-1500' };
  const [validationError, setValidationError] = React.useState();
  const validatorRef = React.useRef(null);

  // if the input is required add the required placeholder
  // also add the required validator
  if (props.required) {
    validatorRef.current = Required;
  }

  // run validator fn which checks the validator each value change
  // sets the validators result (string) as the validationError
  const runValidator = React.useCallback(
    value => {
      if (!validatorRef.current) {
        return;
      }
      const validationResult = validatorRef.current(value);
      onValidated && onValidated(validationResult, props.name);

      if (!submitted) {
        return;
      }
      setValidationError(validationResult);
    },
    [setValidationError, validatorRef, submitted, onValidated, props.name]
  );

  // hooks the run validator function into the onChange callback
  props.onChange = onChange
    ? (event, value) => {
        onChange(event, value);
        runValidator(value);
      }
    : (event, value) => runValidator(value);

  // runs it once at start
  useDeepCompareEffectNoCheck(() => {
    runValidator(value);
  }, [submitted, value]);

  return (
    <Autocomplete
      disableListWrap
      options={options || []}
      classes={classes}
      ListboxComponent={ListboxComponent}
      renderGroup={renderGroup}
      getOptionLabel={optionRenderer}
      onChange={props.onChange}
      defaultValue={value}
      value={value}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          variant={variant}
          fullWidth
          error={!!validationError}
          helperText={validationError}
        />
      )}
      {...props}
    />
  );
};

export default CustomComboBox;
