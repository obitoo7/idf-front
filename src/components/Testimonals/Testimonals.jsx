import React from "react";
import { useEffect, useRef } from "react";
import tw from "twin.macro";

const TestimonialContainer = tw.div`
h-[70vh]
w-full
grid
grid-flow-col
overflow-x-scroll
scroll-smooth`;

const TestimonalSections = tw.section`
h-full w-[100vw] grid place-items-center`;

const TestimonialCards = tw.div`
h-[70%] w-[80%] p-4 rounded-lg grid place-items-center shadow-2xl`;

const TestimonialAvatar = tw.img`
h-[8rem] max-h-[8rem] max-w-[8rem] w-[8rem] rounded-full object-cover`;

const TestimonialText = tw.p`
 text-center`;

const TestimonialName = tw.strong``;

function Testimonals() {
  const TestimonialRef = useRef();

  useEffect(() => {
    let count = 1
    let timer = setInterval(() => {
        count = count + 1
      let totalWidth = window.innerWidth;
      let totalSections = TestimonialRef.current.childElementCount
      if(count > totalSections - 1){
        count = 0
      }
      TestimonialRef.current.scrollTo(totalWidth * count, 0)
    }, 3000);

    return()=>{
        clearInterval(timer)
    }
  }, []);
  return (
    <TestimonialContainer ref={TestimonialRef}>
      <TestimonalSections>
      <TestimonialCards>
            <TestimonialAvatar src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"/>
            <TestimonialText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero possimus, commodi at debitis praesentium nobis veritatis rem animi repellendus. Unde magni et sapiente illo repudiandae magnam iure optio expedita?
                Fugit atque, harum doloribus numquam odio ipsam similique, aliquam doloremque voluptate nulla fuga beatae deleniti eum aut, nostrum illum. Ab qui sed iste suscipit quod accusamus consectetur sapiente illum veniam?
            </TestimonialText>
            <TestimonialName>- Shivam</TestimonialName>
        </TestimonialCards>
      </TestimonalSections>
      <TestimonalSections>
      <TestimonialCards>
            <TestimonialAvatar src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"/>
            <TestimonialText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero possimus, commodi at debitis praesentium nobis veritatis rem animi repellendus. Unde magni et sapiente illo repudiandae magnam iure optio expedita?
                Fugit atque, harum doloribus numquam odio ipsam similique, aliquam doloremque voluptate nulla fuga beatae deleniti eum aut, nostrum illum. Ab qui sed iste suscipit quod accusamus consectetur sapiente illum veniam?
            </TestimonialText>
            <TestimonialName>- Shivam</TestimonialName>
        </TestimonialCards>
      </TestimonalSections>
      <TestimonalSections>
      <TestimonialCards>
            <TestimonialAvatar src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"/>
            <TestimonialText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero possimus, commodi at debitis praesentium nobis veritatis rem animi repellendus. Unde magni et sapiente illo repudiandae magnam iure optio expedita?
                Fugit atque, harum doloribus numquam odio ipsam similique, aliquam doloremque voluptate nulla fuga beatae deleniti eum aut, nostrum illum. Ab qui sed iste suscipit quod accusamus consectetur sapiente illum veniam?
            </TestimonialText>
            <TestimonialName>- pal</TestimonialName>
        </TestimonialCards>
      </TestimonalSections>
      <TestimonalSections>
      <TestimonialCards>
            <TestimonialAvatar src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"/>
            <TestimonialText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero possimus, commodi at debitis praesentium nobis veritatis rem animi repellendus. Unde magni et sapiente illo repudiandae magnam iure optio expedita?
                Fugit atque, harum doloribus numquam odio ipsam similique, aliquam doloremque voluptate nulla fuga beatae deleniti eum aut, nostrum illum. Ab qui sed iste suscipit quod accusamus consectetur sapiente illum veniam?
            </TestimonialText>
            <TestimonialName>- uchiha</TestimonialName>
        </TestimonialCards>
      </TestimonalSections>
    </TestimonialContainer>
  );
}

export default Testimonals;
