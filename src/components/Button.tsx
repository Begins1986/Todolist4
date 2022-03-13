import React from 'react';

type ButtonPropsType={
    name: string
    callback: ()=>void
}

export const Button = (props: ButtonPropsType) => {
    const onClickButton = () =>{
        props.callback()
    }
    return (
        <button onClick={onClickButton}>{props.name}</button>
    );
};
