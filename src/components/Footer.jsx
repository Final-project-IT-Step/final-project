import FooterImg from '../img/footer.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <img src={ FooterImg } alt="" className="footer__img" />

            <div className="footer__contacts">
                <p className="footer__contacts_title text-bold">
                    КОНТАКТНІ ДАНІ
                </p>

                <p className="footer__contacts_text">
                    м. Сонячне, вул. Квіткова, 37
                </p>

                <p className="footer__contacts_text">
                    Тел: 38 (050) 777-33-55
                </p>

                <p className="footer__contacts_text">
                    E-mail: pavilion@gmail.com
                </p>
            </div>
        </footer>
    );
};