import React from 'react';


const Skills = ({ bgcolor, progress, height }) => {
    const Parentdiv = {
        height: height,
        width: '80%',
        borderRadius: 40,
        margin: 0,
        display: "contents"
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right',
        margin: 0,
        alignitems: "center",
        justifycontent: "center",
        display: "flow-root"
    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }
    return (
        <>
            <div style={Parentdiv}>
                <div style={Childdiv}>
                    <span style={progresstext}>{`${progress}%`}</span>
                </div>
            </div>
        </>
    );
}

export default Skills;
