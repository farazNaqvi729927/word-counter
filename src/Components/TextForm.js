import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const isOteo = useMediaQuery({ query: '(max-width: 1280px)' });
    const isOffz = useMediaQuery({ query: '(max-width: 1440px)' });
    const isOntz = useMediaQuery({ query: '(min-width: 1920px)' });

    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert("Text is in Upper Case", "success");
    };

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // props.showAlert("Text is in Lower Case", "success");
    };

    const handleCapitalizeClick = () => {
        if (text.length > 0) {
            let newText = text.charAt(0).toUpperCase() + text.slice(1);
            setText(newText);
        }
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const textAreaStyle = {
        backgroundColor: props.Mode === 'dark' ? '#13466e' : 'white',
        color: props.Mode === 'dark' ? 'white' : '#042743',
    };

    const buttonStyle = {
        backgroundColor: props.Mode === 'dark' ? 'grey' : 'lightblue',
        color: props.Mode === 'dark' ? 'white' : '#042743',
    };

    return (
        <>
            <div className="container">
                {isOteo ? (
                    <h1 className="h1280" style={{ color: props.Mode === 'dark' ? 'white' : '#042743' }}>{props.heading}</h1>
                ) : isOffz ? (
                    <div className="h1440" style={{ color: props.Mode === 'dark' ? 'white' : '#042743' }}>{props.heading}</div>
                )
                    : isOntz ? (
                        <div className="h1920" style={{ color: props.Mode === 'dark' ? 'white' : '#042743' }}>{props.heading}</div>
                    )

                        : (
                            <div style={{ color: props.Mode === 'dark' ? 'white' : '#042743' }}>{props.heading}</div>
                        )}

                <textarea
                    className="form-control"
                    value={text}
                    style={textAreaStyle}
                    onChange={handleChange}
                    id="My-box"
                    rows="8"
                ></textarea>

                <div>
                    <button
                        disabled={text.length === 0}
                        style={buttonStyle}
                        className={isOteo ? 'btn btn-primary mx-1 my-3 bu1280' : isOffz ? 'btn btn-primary mx-1 my-3 bu1440' : isOntz ? 'btn btn-primary mx-1 my-3 bu1920' : 'btn btn-primary mx-1 my-3'}
                        onClick={handleUpperClick}
                    >
                        Convert To Uppercase
                    </button>

                    <button
                        disabled={text.length === 0}
                        style={buttonStyle}
                        className={isOteo ? 'btn btn-primary mx-1 my-3 bu1280' : isOffz ? 'btn btn-primary mx-1 my-3 bu1440' : isOntz ? 'btn btn-primary mx-1 my-3 bu1920' : 'btn btn-primary mx-1 my-3'}
                        onClick={handleLowerClick}
                    >
                        Convert To Lowercase
                    </button>

                    <button
                        disabled={text.length === 0}
                        style={buttonStyle}
                        className={isOteo ? 'btn btn-primary mx-1 my-3 bu1280' : isOffz ? 'btn btn-primary mx-1 my-3 bu1440' : isOntz ? 'btn btn-primary mx-1 my-3 bu1920' : 'btn btn-primary mx-1 my-3'}
                        onClick={handleCapitalizeClick}
                    >
                        Capitalize First Word
                    </button>
                </div>
            </div>

            <div className="container my-3" style={{ color: props.Mode === 'dark' ? 'white' : '#042743' }}>

                <h1>Your Text Summary :</h1>

                <p className={isOteo ? 'a1280' : isOffz ? 'a1440' : isOntz ? 'a1920' : ''}>
                    {text.split(/\s+/).filter((element) => element.length !== 0).length} Words and {text.length} Characters
                </p>

                <p className={isOteo ? 'b1280' : isOffz ? 'b1440' : isOntz ? 'b1920' : ''}>
                    {0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes to Read
                </p>

                <h1 style={{ marginTop: '5%' }}>Preview :</h1>

                <p className={isOteo ? 'c1280' : isOffz ? 'c1440' : isOntz ? 'c1920' : ''}>{text.length > 0 ? text : "Nothing To Preview"}</p>

            </div>
        </>
    );
}
