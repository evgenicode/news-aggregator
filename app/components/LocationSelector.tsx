import React, { useState } from "react";

export enum Location {
  AnyLocation = "any",
  Australia = "au",
  Canada = "ca",
  China = "cn",
  France = "fr",
  Germany = "de",
  HongKong = "hk",
  India = "in",
  Ireland = "il",
  Italy = "it",
  Japan = "jp",
  Spain = "es",
  Taiwan = "tw",
  UnitedKingdom = "gb",
  UnitedStates = "us",
}

const locationLabels: Record<Location, string> = {
  [Location.AnyLocation]: "Any Location",
  [Location.Australia]: "Australia",
  [Location.Canada]: "Canada",
  [Location.China]: "China",
  [Location.France]: "France",
  [Location.Germany]: "Germany",
  [Location.HongKong]: "Hong Kong",
  [Location.India]: "India",
  [Location.Ireland]: "Ireland",
  [Location.Italy]: "Italy",
  [Location.Japan]: "Japan",
  [Location.Spain]: "Spain",
  [Location.Taiwan]: "Taiwan",
  [Location.UnitedKingdom]: "United Kingdom",
  [Location.UnitedStates]: "United States",
};

interface LocationDropdownProps {
  onSelect: (selectedLocation: Location) => void;
}

export const LocationDropdown: React.FC<LocationDropdownProps> = ({
  onSelect,
}) => {
  const [selectedLocation, setSelectedLocation] = useState(
    Location.AnyLocation
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedLocation(selectedValue as Location);
    onSelect(selectedValue as Location);
  };

  return (
    <select value={selectedLocation} onChange={handleSelectChange}>
      {Object.values(Location).map((locationValue) => (
        <option key={locationValue} value={locationValue}>
          {locationLabels[locationValue]}
        </option>
      ))}
    </select>
  );
};
