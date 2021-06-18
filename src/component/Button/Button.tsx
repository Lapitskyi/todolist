import React, {FC} from 'react';
import './scss/Button.scss';

interface ButtonTypeProps {
    id: number
    onClickButton: (id: number) => void
    svgIcon: string
}

const Button: FC<ButtonTypeProps> = ({
     id ,
     onClickButton,
     svgIcon
}) => {
    return (
        <button
            className="button__btn btn"
            type="button"
            onClick={() => onClickButton(id)}
        >
            <svg className="button__btn-icon">
                <use href={svgIcon} />
            </svg>
        </button>

    );
};

export default Button;
