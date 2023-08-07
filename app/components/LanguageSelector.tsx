import React, { useState } from "react";

export enum Language {
  Chinese = "zh",
  English = "en",
  French = "fr",
  German = "de",
  Italian = "it",
  Japanese = "ja",
  Spanish = "es",
}

interface LanguageDropdownProps {
  onSelect: (selectedLanguage: Language) => void;
}

const getLanguageKeyFromValue = (value: string): Language | undefined => {
  const keys = Object.keys(Language) as (keyof typeof Language)[];
  const matchingKey = keys.find((key) => Language[key] === value);
  return matchingKey as Language | undefined;
};

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  onSelect,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(Language.English);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedLanguage(selectedValue as Language);
    onSelect(selectedValue as Language);
  };

  return (
    <select value={selectedLanguage} onChange={handleSelectChange}>
      {Object.values(Language).map((languageValue) => (
        <option key={languageValue} value={languageValue}>
          {getLanguageKeyFromValue(languageValue)}
        </option>
      ))}
    </select>
  );
};
