import React, { useState, useEffect } from "react";
import { Language } from "./enums";

interface LanguageDropdownProps {
  onSelect: (selectedLanguage: Language) => void;
  availableLanguages: Language[];
  defaultLanguage?: Language; // Optional default language TODO: UNCHECK ?
}

const getLanguageKeyFromValue = (value: string): Language | undefined => {
  const keys = Object.keys(Language) as (keyof typeof Language)[];
  const matchingKey = keys.find((key) => Language[key] === value);
  return matchingKey as Language | undefined;
};

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  onSelect,
  availableLanguages,
  defaultLanguage,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    defaultLanguage || Language.English
  );

  useEffect(() => {
    setSelectedLanguage(defaultLanguage || Language.English);
  }, [defaultLanguage]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as Language;
    setSelectedLanguage(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <select value={selectedLanguage} onChange={handleSelectChange}>
      {availableLanguages.map((languageValue) => {
        return (
          <option
            key={languageValue}
            value={languageValue}
            disabled={!availableLanguages.includes(languageValue)}
          >
            {getLanguageKeyFromValue(languageValue)}
          </option>
        );
      })}
    </select>
  );
};
