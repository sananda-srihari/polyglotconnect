import React, {useState} from 'react';
import styled from "styled-components";
import Course from "./Course";
import {TAMIL, ENGLISH, TELUGU, MALAYALAM, HINDI, KANNADA} from "../utils/constants";
import courses from '../utils/data';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TAMIL);
  const tabHandler = (category) => {
    setActiveTab(category);
  }

  return (
    <TabsWrapper>
      <div className='tabs'>
        <ul className='flex flex-wrap'>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === TAMIL}`} onClick = {() => tabHandler(TAMIL)}>TAMIL</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === ENGLISH}`} onClick = {() => tabHandler(ENGLISH)}>ENGLISH</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === TELUGU}`} onClick = {() => tabHandler(TELUGU)}>TELUGU</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === MALAYALAM}`} onClick = {() => tabHandler(MALAYALAM)}>MALAYALAM</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === HINDI}`} onClick = {() => tabHandler(HINDI)}>HINDI</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === KANNADA}`} onClick = {() => tabHandler(KANNADA)}>KANNADA</button>
          </li>
        </ul>

        <div className='tabs-body'>
          {
            courses.filter(course => course.category === activeTab).map((course) => (
              <Course key = {course.id} {...course} />
            ))
          }
        </div>
      </div>
    </TabsWrapper>
    
  )
}

const TabsWrapper = styled.div`
  .tabs{
    margin-top: 16px;
    .tabs-head-item button{
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover{
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }

    .tabs-body{
      margin-top: 32px;
    }

    @media screen and (min-width: 600px){
      .tabs-body{
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px){
      .tabs-body{
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px){
      .tabs-body{
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default Tabs