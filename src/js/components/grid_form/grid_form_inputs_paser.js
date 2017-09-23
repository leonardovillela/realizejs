import { InputsType } from '../../enums';

function parseInput(inputKey, inputProps) {
  switch (inputProps.component) {
    case InputsType.AUTOCOMPLETE:
      return { [inputKey]: Object.assign({ serializeOnlyValue: false }, inputProps) };
    default:
      return { [inputKey]: inputProps };
  }
}

export function parse(inputs) {
  return Object.entries(inputs).map(parseInput);
}
