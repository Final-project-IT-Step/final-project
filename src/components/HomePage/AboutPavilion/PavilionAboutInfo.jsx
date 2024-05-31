export const PavilionAboutInfo = ({ children }) => {
    return (
        <>
            <p className="pavilion__about_info text">
                Ласкаво просимо до нашого Павільйону китайської чайної церемонії, 
                місця, де ви можете зануритися в багатовікову культуру та мистецтво 
                Сходу. Наш Павільйон створений для всіх, хто цінує витонченість 
                і  спокій китайських традицій, а також прагне доторкнутися до глибокої 
                мудрості, що прихована в кожній чашці чаю.
            </p>

            <p className="pavilion__about_info text">
                Ми прагнемо створити простір, де кожен відвідувач зможе знайти гармонію, 
                внутрішній спокій і натхнення в мудрості Сходу.
            </p>

            { children }

            <p className="pavilion__about_info text">
                Запрошуємо вас відвідати наш Павільйон і відкрити для себе дивовижний 
                світ китайської чайної церемонії та мистецтва. Нехай кожна наша зустріч 
                стане для вас джерелом натхнення та гармонії.
            </p>
        </>
    )
}