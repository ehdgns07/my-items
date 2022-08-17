import React, {useContext} from "react";
import LocaleContext, {useLocale, useSetLocale} from "../contexts/LocaleContext";

// function LocaleSelect({value, setLocale}) {
function LocaleSelect() {

    const LocaleData = useSetLocale();

    const handleChange = (e)=> {
        // console.log(e.target.value);
        LocaleData(e.target.value);
    }

    return (
        <div>
            <select onChange={handleChange}>
                <option value={"kor"}>한글</option>
                <option value={"eng"}>English</option>
            </select>
        </div>
    );
}

export default LocaleSelect