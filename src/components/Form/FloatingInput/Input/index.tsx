import { forwardRef } from "react";

type TMasks = "phone" | "email" | "name";

interface IProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  mask?: TMasks;
}

export const Input = forwardRef<HTMLInputElement, IProps>(
  ({ id, mask, className = "", value = "", onChange, ...rest }, ref) => {
    const emptyOrDirty = value ? "input__floating-label--dirty" : "";

    function HandleValueChange(e: React.ChangeEvent<HTMLInputElement>) {
      const { value } = e.target;

      if (!mask || !masks[mask]) {
        onChange && onChange(e);
        return;
      }

      const maskedValue = masks[mask](value);
      e.target.value = maskedValue;

      onChange && onChange(e);
      return;
    }

    return (
      <input
        id={id}
        ref={ref}
        onChange={HandleValueChange}
        className={`${emptyOrDirty} ${className}`}
        value={value}
        {...rest}
      />
    );
  }
);

const masks: {
  [k in TMasks]: (value: string | number | readonly string[]) => string;
} = {
  phone: function formatPhoneNumber(value) {
    let valueWithOnlyNumbers = value.toString().replace(/\D/g, "");

    if (!valueWithOnlyNumbers) return valueWithOnlyNumbers;

    if (valueWithOnlyNumbers.length >= 11)
      valueWithOnlyNumbers = valueWithOnlyNumbers.slice(0, 11);

    const match = valueWithOnlyNumbers.match(
      /^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})$/
    );

    if (!match) valueWithOnlyNumbers;

    let formatted = "";

    if (match![1]) formatted += `(${match![1]}`;
    if (match![2]) formatted += `) ${match![2]}`;
    if (match![3]) formatted += ` ${match![3]}`;
    if (match![4]) formatted += `-${match![4]}`;

    formatted = formatted.replace(/[^0-9(). -]/g, "");
    return formatted.trim();
  },
  email: function formatEmail(value) {
    const lettersAndDots = Array.from({ length: 26 }, (_, index) =>
      String.fromCharCode(97 + index)
    );
    lettersAndDots.push(".");

    const lowercasedValue = value.toString().toLowerCase();

    if (!value.toString().includes("@")) return lowercasedValue;

    const [username, domainAndDot] = lowercasedValue.split("@");

    if (!domainAndDot) return lowercasedValue;

    return [username, domainAndDot.replace(/[^a-zA-Z.]/g, "")].join("@");
  },
  name: function onlyLetters(value) {
    return value.toString().replace(/[0-9]/g, "");
  },
};
