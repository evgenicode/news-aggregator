import React, { useState, useEffect } from "react";
import { Language } from "./enums";

interface LanguageDropdownProps {
  onSelect: (selectedLanguage: Language) => void;
  availableLanguages: Language[];
  defaultLanguage?: Language; // Optional default language
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
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  // TODO: Find out why this state is not being updated, which
  // requires the hook below.
  useEffect(() => {
    setSelectedLanguage(defaultLanguage);
  }, [defaultLanguage]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as Language;
    setSelectedLanguage(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div className="flex">
      <p className="dropdown-text">Language:</p>
      <select
        className="dropdown-text"
        value={selectedLanguage}
        onChange={handleSelectChange}
      >
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
    </div>
  );
};
