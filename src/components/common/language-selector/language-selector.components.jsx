import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const change = (option) => {
    localStorage.setItem("lang", option.target.value);
    i18n.changeLanguage(option.target.value);
    window.location.reload();
  };

  const lang = localStorage.getItem("lang" || "en");
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-10"></div>
        <div className="col-2">
          <select
            value={lang}
            className="custom-select w-auto pull-right"
            onChange={change}
          >
            <option value="en">English</option>
            <option value="np">Nepali</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
