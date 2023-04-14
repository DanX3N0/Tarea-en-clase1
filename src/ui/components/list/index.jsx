import React, { useState, useEffect } from 'react';
import './styles.css';

var numberOfRobots = 1;
var currentIndex = 0;
const pagination = [[]];

const generateAvatar = (value) => {
  const avatar = [];
  for (let i = 0; i < value; i++) {
    const ramdom = Math.floor(Math.random() * 100);
    avatar.push(`https://avatars.dicebear.com/api/bottts/stefan${ramdom}.svg`);
  }
  return avatar;
};

const List = (props) => {

  const { clickHandler } = props;
  const [list, setList] = useState([]);

  const rightPage = () => {
    currentIndex++;
    pagination.push(generateAvatar(numberOfRobots));
    setList(pagination.at(currentIndex));
    console.log(pagination);
  };

  const leftPage = () => {
    currentIndex--;
    setList(pagination.at(currentIndex));
  };

  useEffect(() => {
    setList(pagination[currentIndex]);
  }, []);

  
  return (
    <div className="wrapper">
      <h2>List</h2>
      <ul>

        {list.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              clickHandler(item);
            }}
          >
            <img src={item} />
          </li>
        ))}

      </ul>
      <div className="pages">
        <button onClick={()=>leftPage()}>anterior</button>
        <button onClick={()=>rightPage()}>siguiente</button>
      </div>
      <input
        type="text"
        defaultValue={0}
        onChange={(e)=>{
            numberOfRobots = e.target.value;
            pagination[currentIndex] = generateAvatar(numberOfRobots);
            setList(pagination.at(currentIndex));
        }}
      />
    </div>
  );
};
export default List;
