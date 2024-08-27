import Select from "react-select";

const OptionSelect = ({
  props,
  options,
  value,
  onChange,
  placeholder,
  name,
  isMulti,
  styles,
}: {
  props?: any;
  options?: any;
  onChange?: any;
  value?: any;
  placeholder?: string;
  name?: string;
  isMulti?: boolean;
  styles?: any;
}) => {
  return (
    <Select
      components={{
        IndicatorSeparator: () => null,
      }}
      classNamePrefix="custom-select"
      name={name}
      className={""}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isMulti={isMulti}
      styles={styles}
    />
  );
};
export default OptionSelect;
