import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h3>Warning!</h3>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
        
            <ApprovalCard>
                <CommentDetails 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    desc="Hello,Sam here" 
                    img={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author="Alex" 
                    timeAgo="Today at 2PM" 
                    desc="Hello,Alex here" 
                    img={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author="Jake" 
                    timeAgo="Today at 8:30PM" 
                    desc="Hello,Jake here" 
                    img={faker.image.avatar()} 
                />
            </ApprovalCard> 
        </div>
    );
}

ReactDOM.render(<App />,document.querySelector('#root'));
