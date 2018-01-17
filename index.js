import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
/*import axios from 'axios-master'; */
import UserInfoSec from 'components/UserInfoSec';
import UserInfoSecJson from 'json/upgradingUserInfo.json';
import customdata from '../../../assets/content/recommended-devices.json';
//import thunk from 'redux-thunk';
const UserInfo = styled.div`
	background-color: #096fec;
`;

//const store = createStore(reducer, applyMiddleware(thunk));
const data=require('../../../assets/content/recommended-devices.json');


export class DeviceRecPage extends React.PureComponent {

    state = {
       posts:[],
       payload:data.payload,
       test:["react","boiler","plate"]
    }
    
    getData()
    {
        var image=data.payload[0].imageUrlHiRes;
        var brand=data.payload[0].model;
        //alert(this.state.payload);
        console.log(this.state.payload);
       // alert("Hello from getData");
    }

    componentDidMount() {
       
        this.setState({ posts : UserInfoSecJson.payload });  

        this.getData();
        


      /*  return <UserInfoSec data={posts} />;
          
          this.setState({ posts : UserInfoSecJson });  */
      }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    
        var names = ['Jake', 'Jon', 'Thruster'];
        var renderPayload=this.state.payload;
        // return (
        //     <ul>
        //         {renderPayload.map(function(index){
        //             return <li>{this.state.payload}</li>;
        //           })}
        //     </ul>
        // )
        // let person;
        // return(<div>{this.state.test.map(
        //     (person)=>{
        //         return(
        //     <div><hr/>{person}</div>
        // );
        // }
        // )}</div>);
        //let person=null;
    return (
           
           <div>{this.state.payload.map((item,index)=>
            {
                var brand=item.brand;
                var model=item.model;
                var starRatings=item.starRatings;
                var phoneImage=item.imageUrlHiRes;
               // var brandsel=['Apple','Samsung'];
                if (brand === 'Apple')
                {
                return(
             <div className="recommended-device span6 mH300 ng-scope">
             <div className="row span12 device-grid">
                 <div className="span5 device-img"><img alt="Samsung Gear S2" src={phoneImage}/></div>
                 <div className="span7 device-desc-grid">
                     <div className="ribbon-div ribbon purple-white-ribbon">
                         <div className="sub-ribbon">
                             <div>ONLINE DEAL</div>
                         </div>
                     </div>
                     <div className="span12 block">
                        <h4 className="device-make">{brand}</h4>
                    </div>
                    <div className="span12">
                        <h1 className="device-model"> {model}</h1>
                    </div>
                    <div className="span12 starRatingContainer">
                        <div className="starRating">
                            <div className="starBlock">
                                <div className="numOfStars"></div>
                            </div><span className="final-rating">{starRatings}</span></div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="span12">
                        <h4 className="default-price-label">Starting at</h4>
                    </div>
                    <div className="span12">
                        <h3 className="default-price-block"><span className="default-price">$349.99</span>
                        </h3>
                    </div>
                    <div className="span12 p-small shortLegalContainer">
                        <div>Retail price. Requires qualified service.</div><a href="">See price details</a></div>
                </div>
                
        </div>
        </div>
       
           )
        }
        //else{}
        })
        
        }</div>);
    
    

//     return (
//         <div>
//      <div className="upUserInfoContainer ng-scope">
// 	 <UserInfo>
//      <UserInfoSec upgradingUserDescription={this.state.posts.deviceModel} upgradingDeviceDetailsDescription={this.state.posts.ctn} />
// 	 </UserInfo>
// 	 </div>
// 	 <div className="container device-container">
//      <div className="row recommended-device-row">
//         <div className="recommended-device span6 mH300">
//             <div className="row span12 device-grid light-theme">
//                 <div className="span5 device-desc-grid mL20 no-pad">
//                     <div className="span12 block">
//                         <h4 className="device-make">{this.state.payload[0].brand}</h4>
//                     </div>
//                     <div className="span12">
//                         <h1 className="device-model"> {this.state.payload[0].model}</h1>
//                     </div>
//                     <div className="span12 starRatingContainer">
//                         <div className="starRating">
//                             <div className="starBlock">
//                                 <div className="numOfStars"></div>
//                             </div><span className="final-rating">{this.state.payload[0].starRatings}</span></div>
//                     </div>
//                     <div className="clearfix"></div>
//                     <div className="span12">
//                         <h4 className="default-price-label">Starting at</h4>
//                     </div>
//                     <div className="span12">
//                         <h3 className="default-price-block"><span className="default-price">$349.99</span>
//                         </h3>
//                     </div>
//                     <div className="span12 p-small shortLegalContainer">
//                         <div>Retail price. Requires qualified service.</div><a href="">See price details</a></div>
//                 </div>
//                 <div className="span6 hero-device-img"><img alt="Samsung Gear S3 classic"  src={this.state.payload[0].imageUrlHiRes}/></div>
//             </div>
//         </div>
//         <div className="recommended-device span6 mH300 ng-scope">
//             <div className="row span12 device-grid">
//                 <div className="span5 device-img"><img alt="Samsung Gear S2" src={this.state.payload[3].imageUrlHiRes}/></div>
//                 <div className="span7 device-desc-grid">
//                     <div className="ribbon-div ribbon purple-white-ribbon">
//                         <div className="sub-ribbon">
//                             <div>ONLINE DEAL</div>
//                         </div>
//                     </div>
//                     <div className="span12 block">
//                         <h4 className="device-make">{this.state.payload[1].brand}</h4>
//                     </div>
//                     <div className="span12">
//                         <h1 className="device-model">{this.state.payload[1].model}</h1>
//                     </div>
//                     <div className="span12 starRatingContainer ng-scope">
//                         <div className="starRating">
//                             <div className="starBlock">
//                                 <div className="numOfStars" ></div>
//                             </div><span className="final-rating">4.4</span></div>
//                     </div>
//                     <div className="clearfix"></div>
//                     <div className="span12">
//                         <h4 className="default-price-label">Starting at</h4>
//                     </div>
//                     <div className="span12">
//                         <h3 className="default-price-block"><span className="default-price">$299.99</span>
//                         </h3>
//                     </div>
//                     <div className="span12 p-small shortLegalContainer">
//                         <div>Retail price. Requires qualified service.</div><a href="">See price details</a></div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
//     );
  }
}

export default compose()(DeviceRecPage);
