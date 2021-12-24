import axios from 'axios';
import React, { useState,useEffect } from 'react';

const first = () => { 
  const [userDetail,setUserDetail] = useState();
  const [userInfo,setUserInfo] = useState();


     const getAllDetails = () =>{
    axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
        .then(response => {
        console.log(response);
        if(response.status == 200){
          setUserDetail(response.data);
        }
       
     });
   };
  

  useEffect(() => getAllDetails(), []);
  useEffect(() => {
    console.log(userDetail);
    if(!userInfo && userDetail)
    {
      setUserInfo(userDetail.results[0]);
    }
  }, [userDetail]);

  const onClickGetInfo = (key) => {
    if(userDetail?.results[key]){
      setUserInfo(userDetail.results[key]);
    }
    
  };
  useEffect(() => {
    console.log(userInfo);
    
  }, [userInfo]);

  return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <a className="navbar-brand px-5" href=" ">Your Challenge</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto px-5">
              <li className="nav-item active">
                <a className="nav-link" href= " ">Product <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">Download</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">Pricing</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container card1 my-5">
          <div className="card">
            <div className="row mx-auto ">
              <div className="col-sm-2  mx-auto" style={{height:'100%', width:'100%'}}>
                <img className="card-img" style={{width: '100%', height: '100%'}} src={userInfo?.picture?.large} alt=" " />
              </div>
              <div className="col-sm-10 mx-auto">
                <div className="card-body">
                    <h2 className="card-title text-danger font-weight-bold"><u>{userInfo?.name?.title} {userInfo?.name?.first} {userInfo?.name?.last}</u></h2>
                    <p className="card-text pt-3" style={{color: 'black'}}><span className="font-weight-bold" 
                    style={{color: '#A259FF'}}>{userInfo?.location?.street?.number}</span>, {userInfo?.location?.street?.name},  {userInfo?.location?.city}
                    ,  {userInfo?.location?.state},<b> {userInfo?.location?.country}</b>, {userInfo?.location?.postcode}
                      {userInfo?.location?.timezone?.offset} {userInfo?.location?.timezone?.description} 
                      </p>
                    <span style={{color: '#5e5b5bf0'}}>{userInfo?.gender}</span>
                  </div>     
              </div>
            </div>
          </div>
        </div>
        <div className="container section">
          <div className="row my-3">
           
             {userDetail && userDetail?.results?.map((info, index) => (
                   <div className="col-sm-3" key={index} style={{padding:'15px'}}>
                   <div  style={{textDecoration: 'none'}}  onClick={() => onClickGetInfo(index)}>
                     <div className="card ">
                       <div className="card-body">
                         <p className="card-text">{info.gender}</p>
                         <h5 className="card-title">{info.name.title} {info.name.first} {info.name.last}</h5>
                         <p className="card-text text-danger">{info.email}</p>
                       </div>
                     </div>
                   </div>
                 </div>
     
             ))};
          </div>
        </div>
        </div>
    )
}

export default first;
