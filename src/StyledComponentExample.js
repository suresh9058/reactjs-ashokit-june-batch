import styled from "styled-components";

const StyledComponent = styled.button`
    background-color: #282c34;
    width:300px;
    margin: 30px auto;
`;

function StyledComponentExample() {
    const handleClick = (event,a,b)=>{
        console.log("button clicked",event,a,b);
    }

    return (
        <div>
        <StyledComponent onClick={(e)=>handleClick(e,10,20)}>
            this is the styled component
        </StyledComponent>
        </div>
    )
}

export default StyledComponentExample;