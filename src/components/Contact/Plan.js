import React from 'react'
import styled from 'styled-components'



function Template() {
    const Plan = new URL("../images/plan_eglise.png", import.meta.url)
  return (
    <div>
        <Wrapper>
            <img  src={Plan} alt="" />
        </Wrapper>  
    </div>
  )
}


const Wrapper = styled.div`
display: flex;
align_items: center;
justify-content: center;
width: 80%;
min-height: 400px;
margin: auto;
margin-bottom: 25px;
margin-top: 25px;
grid-template-columns: 1fr 1fr;
gri-template-rows: 1fr 1fr;
padding: 24px;
row-gap: 20px;
@media(max-width:992px){
    grid-template-columns: 1fr;
}
`;
export default Template