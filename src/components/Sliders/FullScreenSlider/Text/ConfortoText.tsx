import { Text } from ".";
import { IFullScreenSliderTextProps } from ".";

export function ConfortoText({ ...rest }: IFullScreenSliderTextProps) {
  return (
    <Text {...rest}>
      aposte no <strong className="text-strong">Conforto</strong> sem perder a{" "}
      <strong className="strong">elegância</strong>
    </Text>
  );
}
