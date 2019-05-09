import React from 'react';
import ReactDOM from 'react-dom'
import faker from "faker"
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    date="Today at 5:15PM"
                    text="This is good!"
                    img={faker.image.avatar()} />
            </ApprovalCard >

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    date="Today at 7:00PM"
                    text="Nice!!!"
                    img={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    date="Today at 6:00PM"
                    text="Nice blog post"
                    img={faker.image.avatar()} />

            </ApprovalCard>



        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))