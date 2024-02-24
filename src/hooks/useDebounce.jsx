import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay)
        return () => {
            {/*setTimeout delay 전에 입력이 또 들어오면 handler을 비우고 입력된 값을 다시 넣음*/}
            clearTimeout(handler)
        }
    }, [value, delay]);

    return debounceValue;
}