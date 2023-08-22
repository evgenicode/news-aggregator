import React, { useState } from "react";
import { Location, Language } from "./enums";
import { getEnumStringValues } from "../components/utils";

const locationLabels: Record<Location, string> = {
  [Location.AnyLocation]: "Any Location",
  [Location.Australia]: "Australia",
  [Location.Canada]: "Canada",
  [Location.China]: "China",
  [Location.France]: "France",
  [Location.Germany]: "Germany",
  [Location.HongKong]: "Hong Kong",
  [Location.India]: "India",
  [Location.Italy]: "Italy",
  [Location.Japan]: "Japan",
  [Location.Spain]: "Spain",
  [Location.Taiwan]: "Taiwan",
  [Location.UnitedKingdom]: "United Kingdom",
  [Location.UnitedStates]: "United States",
};

export const allLanguages = getEnumStringValues(Language);

export const countryToLanguages: Record<Location, Language[]> = {
  [Location.AnyLocation]: allLanguages,
  [Location.Australia]: [Language.English],
  [Location.Canada]: [Language.English, Language.French],
  [Location.China]: [Language.Chinese],
  [Location.France]: [Language.French],
  [Location.Germany]: [Language.German],
  [Location.HongKong]: [Language.Chinese],
  [Location.India]: [Language.English],
  [Location.Italy]: [Language.Italian],
  [Location.Japan]: [Language.Japanese],
  [Location.Spain]: [Language.Spanish],
  [Location.Taiwan]: [Language.Chinese],
  [Location.UnitedKingdom]: [Language.English],
  [Location.UnitedStates]: [Language.English],
};

interface LocationDropdownProps {
  onSelect: (
    selectedLocation: { location: Location; defaultLanguage: Language },
    availableLanguages: Language[]
  ) => void;
}

export const LocationDropdown: React.FC<LocationDropdownProps> = ({
  onSelect,
}) => {
  const [selectedLocation, setSelectedLocation] = useState(
    Location.AnyLocation
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as Location;
    setSelectedLocation(selectedValue);

    // Pass available languages based on the selected location
    const availableLanguages = countryToLanguages[selectedValue];
    const defaultLanguageForLocation =
      selectedValue === Location.AnyLocation
        ? Language.English
        : countryToLanguages[selectedValue][0];
    onSelect(
      { location: selectedValue, defaultLanguage: defaultLanguageForLocation },
      availableLanguages
    );
  };

  return (
    <div className="flex">
      <p className="dropdown-text">Location:</p>
      <select
        className="dropdown-text"
        value={selectedLocation}
        onChange={handleSelectChange}
      >
        {Object.values(Location).map((locationValue) => (
          <option key={locationValue} value={locationValue}>
            {locationLabels[locationValue]}
          </option>
        ))}
      </select>
    </div>
  );
};
