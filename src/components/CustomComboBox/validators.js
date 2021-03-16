const Required = value => {
  if (value === undefined || value === null) {
    return 'This field is required';
  }
};
export { Required };
