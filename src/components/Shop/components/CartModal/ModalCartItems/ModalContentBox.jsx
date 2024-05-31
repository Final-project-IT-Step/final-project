import { ModalContentChildrenImg } from "./ModalContentChildrenImg"
import { ModalContentChildrenValue } from "./ModalContentChildrenValue"

export const ModalContentBox = ({ data }) => {
    const { childrenClassName, parentClassName } = data

    const isImage = childrenClassName === 'img'

    return (
        <div className={`modal__${ parentClassName }`}>
            {
                isImage
                    ? <ModalContentChildrenImg data = { data }/>
                    :  <ModalContentChildrenValue data = { data }/>
            }
        </div>
    )
}