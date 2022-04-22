import styled from 'styled-components';

interface TextAreaProps {
    focus?: boolean;
    background?: string;
    id?: string;
    color?: string;
    textShadow?: string;
}


export const TextArea = styled.div`
    width: 100%;
    max-height: 108px;
    overflow: hidden;
    padding: 5px 10px 5px 10px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    margin-top: 50px;
    background: white;
    color: #333;
    font-size: 1.7em;
    line-height: 1.3em;
    user-select: none;
`;

export const Text = styled.span<TextAreaProps>`
    position: relative;
    padding: 3px 5px 3px 5px;
    scroll-margin: 9px;
    margin-right: 5px;
    margin-bottom: 5px;
    background: ${({ background }) => background};
    color: ${({ color }) => color};
    border-radius: 5px;
    text-shadow: ${({ textShadow }) => textShadow};
`;