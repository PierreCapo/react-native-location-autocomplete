import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-location-autocomplete' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const LocationAutocomplete = NativeModules.LocationAutocomplete
  ? NativeModules.LocationAutocomplete
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function getAddressSuggestions(text: string): Promise<number> {
  return LocationAutocomplete.getAddressSuggestions(text);
}
