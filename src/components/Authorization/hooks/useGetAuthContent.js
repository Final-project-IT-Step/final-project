import { useState } from "react";

export const useGetAuthContent = () => {
    const [showPassword, setShowPassword] = useState(false);
    const switchTypeHandler = (e) => {
        e.preventDefault();
        setShowPassword(prev => !prev)
    }

    const currentType = showPassword ? 'text' : 'password';
    const currentContent = showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
    const currentTitle = showPassword ? "Приховати пароль" : "Показати пароль"

    return { setShowPassword, switchTypeHandler, currentType, currentContent, currentTitle }
}