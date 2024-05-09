import styled from "styled-components";

const Container = styled.div`
    max-width: 100%;
    min-height: 100vh;
    

    .container-lg {
        max-width: 600px;
        margin:auto;
    }
    .container-md {
        max-width: 800px;
        align-items: center;
        display: flex;
        flex-direction: column;
        margin:auto;
    }
    .container-sm {
        max-width: 600px;
        margin:auto;
    }
`;


export default Container;

