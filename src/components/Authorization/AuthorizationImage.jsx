export const AuthorizationImage = ({ image, type }) => {
    const firstImg = process.env.PUBLIC_URL + `img/${ image }`

    return (
        <div className={ `authorization-form-image authorization-form-image_${ type }` }>
            <img 
                src={ firstImg } 
                alt="" 
                className= "authorization-form-image__src" 
            />
        </div>
    )
}