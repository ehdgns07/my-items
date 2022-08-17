import {createContext, useContext} from "react";
import {useState} from "react";

const LocaleContext = createContext(null);

export function LocaleProvider({children}) {

    const [locale, setLocale] = useState('kor');

    return (
        //provider 안에서만 value를 사용할 수 있다.
        // useLocale을 provider 범위 밖에서 사용하면 value는 빈값.
        <LocaleContext.Provider value={{locale, setLocale}}>
            {children}
        </LocaleContext.Provider>
    )

}

//locale, setLocale을 다룰 수 있도록 하는 함수
export function useLocale(){
    const context = useContext(LocaleContext);
    // console.log(context);

    if(!context){
        throw new Error("is not in Locale Provider!")
    }

    return context.locale;
}
export function useSetLocale(){
    const context = useContext(LocaleContext);
    // console.log(context);

    if(!context){
        throw new Error("is not in Locale Provider!")
    }

    return context.setLocale;
}

// export default LocaleContext