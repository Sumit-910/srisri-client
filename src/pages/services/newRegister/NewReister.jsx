import './newr.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const NewReister = () => {

  const navigate = useNavigate();
  const userCollection = collection(db, "users");

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email:"",
    phone:"",
    state: "",
    dist: "",
    aadhar: ""
  })

  const handleonChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const signup = async (e) => {
    e.preventDefault();

    try {

      await addDoc(userCollection, user);
      window.alert("Registration Successfull!");
      navigate('/');

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="registerPage">
        <div className="headingr"><Link to='/' >Home</Link></div>
        <div className="mainreg">
          <div className="loginform">
            <div className="loginhead">New Registration</div>
            <form className="login">
              <div className="inputfield">
                Firstname
                <input type="text" name='firstname' placeholder='Enter Firstname' value={user.firstname} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="inputfield">
                Lastname
                <input type="text" name='lastname' placeholder='Enter lastname' value={user.lastname} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="inputfield">
                Email Address
                <input type="email" name='email' placeholder='Enter Email Address' value={user.email} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="inputfield">
                Mobile Number
                <input type="number" name='phone' placeholder='Enter Mobile Number' value={user.phone} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="inputfield">
                State
                <input type="text" name='state' placeholder='Enter State' value={user.state} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="inputfield">
                District
                <input type="text" name='dist' placeholder='Enter district' value={user.dist} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="inputfield">
                Aadhar
                <input type="text" name='aadhar' placeholder='Enter Aadhar number' value={user.aadhar} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="row">
                <div className="col-xs-12">
                    <button type="submit" className="btn btn-block btn-primary" onClick={signup} >Register</button>
                </div>
            </div>
            </form>
 
            {/* <fieldset data-ng-if="typ=='N'">
                <div class="row">
                    <div class="col-xs-12" data-ng-class="{'has-error': form_submitted &amp;&amp; preg.applnType.$invalid, 'has-success': form_submitted &amp;&amp; preg.applnType.$valid}">
                        <label class="reg m-cir" for="applnType" data-ng-bind="trans.LBL_I_AM_A">I am a</label>
                        <select class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched" id="applnType" name="applnType" data-ng-model="plogin.applnType" autofocus="" required="" data-ng-change="resetApplType()" fdprocessedid="qaphv">
                            <option value="">Select</option>
                             <option data-ng-repeat="ty in regTypes" value="APLRG" data-ng-bind="ty.n" data-ng-selected="(nrtpurl || disPan) &amp;&amp; ty.c== plogin.applnType ">Taxpayer</option> <option data-ng-repeat="ty in regTypes" value="APLTD" data-ng-bind="ty.n" data-ng-selected="(nrtpurl || disPan) &amp;&amp; ty.c== plogin.applnType ">Tax Deductor</option> <option data-ng-repeat="ty in regTypes" value="APLTC" data-ng-bind="ty.n" data-ng-selected="(nrtpurl || disPan) &amp;&amp; ty.c== plogin.applnType ">Tax Collector (e-Commerce)</option> <option data-ng-repeat="ty in regTypes" value="RTTR1" data-ng-bind="ty.n" data-ng-selected="(nrtpurl || disPan) &amp;&amp; ty.c== plogin.applnType ">GST Practitioner</option> <option data-ng-repeat="ty in regTypes" value="APLNR" data-ng-bind="ty.n" data-ng-selected="(nrtpurl || disPan) &amp;&amp; ty.c== plogin.applnType ">Non Resident Taxable Person</option> <option data-ng-repeat="ty in regTypes" value="APLUN" data-ng-bind="ty.n" data-ng-selected="(nrtpurl || disPan) &amp;&amp; ty.c== plogin.applnType ">United Nation Body </option> <option data-ng-repeat="ty in regTypes" value="APLEM" data-ng-bind="ty.n" data-ng-selected="(nrtpurl || disPan) &amp;&amp; ty.c== plogin.applnType ">Consulate or Embassy of Foreign Country </option> <option data-ng-repeat="ty in regTypes" value="APLOT" data-ng-bind="ty.n" data-ng-selected="(nrtpurl || disPan) &amp;&amp; ty.c== plogin.applnType ">Other Notified Person</option> <option data-ng-repeat="ty in regTypes" value="REGOI" data-ng-bind="ty.n" data-ng-selected="(nrtpurl || disPan) &amp;&amp; ty.c== plogin.applnType ">Non-Resident Online Services Provider</option> 
                        </select>
                         
                         
                    </div>
                </div>

                 <div class="row" data-ng-if="plogin.applnType != 'REGOI'">
                    <div class="col-xs-12" data-ng-class="{'has-error': form_submitted &amp;&amp; preg.applnState.$invalid, 'has-success': form_submitted &amp;&amp; preg.applnState.$valid}">
                        <label data-ng-class="plogin.applnType != 'REGOI' ? 'reg m-cir' : 'reg'" for="applnState" data-ng-bind="trans.LBL_STATE_UT" class="reg m-cir">State / UT</label>
                        <select class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" id="applnState" name="applnState" data-ng-model="plogin.stCd" autofocus="" data-ng-change="loadDistrict(plogin.stCd)" data-ng-required="plogin.applnType!='REGOI'" data-ng-disabled="plogin.applnType=='REGOI'" required="required" fdprocessedid="veg3j6">
                            <option value="">Select</option>
                             <option data-ng-repeat="ty in regStates" value="35" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Andaman and Nicobar Islands</option> <option data-ng-repeat="ty in regStates" value="37" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Andhra Pradesh</option> <option data-ng-repeat="ty in regStates" value="12" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Arunachal Pradesh</option> <option data-ng-repeat="ty in regStates" value="18" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Assam</option> <option data-ng-repeat="ty in regStates" value="10" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Bihar</option> <option data-ng-repeat="ty in regStates" value="04" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Chandigarh</option> <option data-ng-repeat="ty in regStates" value="22" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Chhattisgarh</option> <option data-ng-repeat="ty in regStates" value="26" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Dadra and Nagar Haveli and Daman and Diu</option> <option data-ng-repeat="ty in regStates" value="07" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Delhi</option> <option data-ng-repeat="ty in regStates" value="30" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Goa</option> <option data-ng-repeat="ty in regStates" value="24" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Gujarat</option> <option data-ng-repeat="ty in regStates" value="06" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Haryana</option> <option data-ng-repeat="ty in regStates" value="02" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Himachal Pradesh</option> <option data-ng-repeat="ty in regStates" value="01" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Jammu and Kashmir</option> <option data-ng-repeat="ty in regStates" value="20" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Jharkhand</option> <option data-ng-repeat="ty in regStates" value="29" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Karnataka</option> <option data-ng-repeat="ty in regStates" value="32" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Kerala</option> <option data-ng-repeat="ty in regStates" value="38" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Ladakh</option> <option data-ng-repeat="ty in regStates" value="31" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Lakshadweep</option> <option data-ng-repeat="ty in regStates" value="23" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Madhya Pradesh</option> <option data-ng-repeat="ty in regStates" value="27" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Maharashtra</option> <option data-ng-repeat="ty in regStates" value="14" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Manipur</option> <option data-ng-repeat="ty in regStates" value="17" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Meghalaya</option> <option data-ng-repeat="ty in regStates" value="15" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Mizoram</option> <option data-ng-repeat="ty in regStates" value="13" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Nagaland</option> <option data-ng-repeat="ty in regStates" value="21" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Odisha</option> <option data-ng-repeat="ty in regStates" value="97" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Other Territory</option> <option data-ng-repeat="ty in regStates" value="34" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Puducherry</option> <option data-ng-repeat="ty in regStates" value="03" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Punjab</option> <option data-ng-repeat="ty in regStates" value="08" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Rajasthan</option> <option data-ng-repeat="ty in regStates" value="11" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Sikkim</option> <option data-ng-repeat="ty in regStates" value="33" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Tamil Nadu</option> <option data-ng-repeat="ty in regStates" value="36" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Telangana</option> <option data-ng-repeat="ty in regStates" value="16" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Tripura</option> <option data-ng-repeat="ty in regStates" value="09" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Uttar Pradesh</option> <option data-ng-repeat="ty in regStates" value="05" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">Uttarakhand</option> <option data-ng-repeat="ty in regStates" value="19" data-ng-bind="ty.n" ng-disabled="plogin.applnType=='RTTR1' &amp;&amp; (ty.c==='97')">West Bengal</option>   
                        </select>
                         
                         
                         
						
						 
                    
					</div>
                </div> 

                 <div class="row" data-ng-if="plogin.applnType != 'REGOI' &amp;&amp; plogin.applnType != 'APLTC' &amp;&amp; plogin.applnType != 'APLTD' &amp;&amp; !(plogin.applnType == 'APLOT' || plogin.applnType == 'APLUN' || plogin.applnType == 'APLEM')">
                    <div class="col-xs-12" data-ng-class="{'has-error': form_submitted &amp;&amp; preg.applnDistr.$invalid, 
                                                  'has-success': form_submitted &amp;&amp; preg.applnDistr.$valid}">
                        <label class="reg" data-ng-class="{'m-cir':((plogin.stCd &amp;&amp; plogin.stCd != '97'))}" for="applnDistr" data-ng-bind="trans.LBL_DISTRICT">District</label>
                        <input type="text" name='district' placeholder='Enter District' />
                        
                         
                         
                    </div>
                </div> 
                  
                <div class="row">
                    <div class="col-xs-12" data-ng-class="{'has-error': form_submitted &amp;&amp; preg.lgnmbzpan.$invalid,
			'			has-success': form_submitted &amp;&amp; preg.lgnmbzpan.$valid}">
                <label for="bnm" class="reg m-cir">
                     <span data-ng-if="(plogin.applnType !== 'APLNR' &amp;&amp; plogin.applnType !== 'RTTR1' &amp;&amp; plogin.applnType !== 'REGOI' &amp;&amp; !((plogin.applnType == 'APLOT' || plogin.applnType == 'APLUN' || plogin.applnType == 'APLEM')))" data-ng-bind="(plogin.applnType !== 'APLTD' &amp;&amp; plogin.applnType !== 'APLTC') ? trans.LBL_NM_BIZ :
					((plogin.applnType=='APLTD')? trans.LBL_NM_TDS: trans.LBL_NM_TCS)">Legal Name of the Business</span> 
					 
					
                      <span class="help" data-ng-if="(plogin.applnType !== 'APLNR' &amp;&amp; plogin.applnType !== 'RTTR1' &amp;&amp; plogin.applnType !== 'REGOI' &amp;&amp; !(plogin.applnType == 'APLOT' || plogin.applnType == 'APLUN' || plogin.applnType == 'APLEM'))" data-ng-bind="(plogin.pt == 'T') ? trans.LBL_NM_BIZ_TAN_HLP : trans.LBL_NM_BIZ_PAN_HLP">(As mentioned in PAN)</span> 

                     
					 
                     
                     
                </label>
               
                 
                  <input type="text" id="bnm" name="lgnmbzpan" data-ng-change="setPristine('lgnmbzpan')" data-ng-if="(plogin.applnType !== 'APLNR' &amp;&amp; plogin.applnType !== 'RTTR1' &amp;&amp; plogin.applnType !== 'REGOI') &amp;&amp; !(plogin.applnType == 'APLOT' || plogin.applnType == 'APLUN' || plogin.applnType == 'APLEM')" placeholder="Enter Legal Name of Business" class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-maxlength" data-ng-model="plogin.lgBzName" data-ng-pattern="/^[a-zA-Z0-9\_&amp;'\-\.\/\,\}\]\[&quot;&quot;()?@!#%$~*;+= ]{1,99}$/" maxlength="99" autofocus="" required="" data-ng-disabled="disPan" fdprocessedid="sz9com"/> 
				 
                         
						 
                
                 
                 
                                 
            </div>
                </div>
                 <div class="row" data-ng-if="(plogin.applnType !== 'APLNR')">
					 
                     <div class="col-xs-12" data-ng-if="plogin.applnType !== 'REGOI' &amp;&amp; !(plogin.applnType === 'APLUN' || plogin.applnType === 'APLEM' || plogin.applnType === 'APLOT')">
                        <label class="reg m-cir" for="pan_card" data-ng-bind="(plogin.pt == 'T') ? trans.LBL_TAN_FF : trans.LBL_PAN_FF">Permanent Account Number (PAN)</label>
                        <div class="has-feedback" data-ng-class="{'has-error': form_submitted &amp;&amp; preg.pan_card.$invalid, 'has-success': form_submitted &amp;&amp; preg.pan_card.$valid}">
                            <input class="form-control upper-input ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-maxlength" id="pan_card" data-ng-model="plogin.id" name="pan_card" placeholder="Enter Permanent Account Number (PAN)" type="text" maxlength="10" data-ng-pattern="/^[a-zA-Z]{4}[0-9]{5}[a-zA-Z]{1}$/" data-capitalize="toUpperCase" data-ng-change="setPristine('pan_card')" required="" fdprocessedid="3t8xb9"/>
							
                        </div>
                         
                         
                         
                         
                    </div> 
                    
             
                    
                 
                      
                    
                </div> 
				<div class="row" data-ng-if="plogin.applnType == 'REGOI'">
				
				  <div class="col-xs-12" data-ng-class="{'has-error': form_submitted && preg.tin_num.$invalid,
                                        'has-success': form_submitted && preg.tin_num.$valid}">
                        <label class="reg m-cir" for="tin_num"> TIN Number</label>
						<input class="form-control upper-input" id="tin_num" data-ng-model="plogin.tin" name="tin_num" placeholder="{{trans.HLP_PAN}}" type="text" maxlength="10" data-ng-pattern="validations.formats.tin" data-ng-disabled="disPan" data-capitalize="" required data-ng-change="setPristine('tin_num')"/>
                        <p class="err" data-ng-if="form_submitted && preg.tin_num.$error.required" data-ng-bind="trans.ERR_PAN_AUTH_REQ"></p>
                        <p class="err" data-ng-if="form_submitted && preg.tin_num.$error.pattern" data-ng-bind="trans.ERR_INV_CHAR"></p>
                        <span class="err" data-ng-if="errors.message" data-ng-bind="errors.message"></span>

                    </div>
				</div>
			
                 

                <div class="row">
                    <div class="col-xs-12" data-ng-class="{'has-error': form_submitted &amp;&amp; preg.email.$invalid,
                                        'has-success': form_submitted &amp;&amp; preg.email.$valid}">
                        <label class="reg m-cir" for="email"><span data-ng-bind="(plogin.applnType !== 'APLNR' &amp;&amp; plogin.applnType !== 'REGOI' &amp;&amp; plogin.applnType !== 'APLUN'
											&amp;&amp; plogin.applnType !== 'APLEM' &amp;&amp; plogin.applnType !== 'APLOT' )? trans.LBL_E_ADDR : trans.LBL_E_ADDR_AUTH_SIG">Email Address</span></label>
                        <div class="input-group">
                            <span class="input-group-addon" id="ba2"><i class="fa fa-envelope"></i></span>
                            <input id="email" class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-maxlength" type="text" placeholder="Enter Email Address" name="email" data-ng-model="plogin.email" maxlength="254" data-ng-pattern="/^[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/" required="" data-ng-change="setPristine('email')" fdprocessedid="gx2ack"/>
                        </div>
                        <span class="err ng-hide" data-ng-show="form_submitted &amp;&amp; preg.email.$error.required" data-ng-bind="trans.ERR_EMAIL_REQ">Email Address is required</span>
                        <span class="err ng-hide" data-ng-show="form_submitted &amp;&amp; preg.email.$error.pattern" data-ng-bind="trans.ERR_VALID_EMAIL">Enter valid Email Address</span>
                        <span class="help-block"><i class="fa fa-info-circle"></i> <span data-ng-bind="trans.HLP_OTP_MAIL_HELP">OTP will be sent to this Email Address</span></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12" data-ng-class="{'has-error': form_submitted &amp;&amp; preg.mobile.$invalid, 
                                        'has-success': form_submitted &amp;&amp; preg.mobile.$valid}">
                        <label data-ng-class="plogin.applnType !== 'REGOI'? 'reg m-cir' : 'reg'" for="mobile" class="reg m-cir"><span data-ng-bind="(plogin.applnType !== 'APLNR' &amp;&amp; plogin.applnType !== 'REGOI' &amp;&amp; plogin.applnType !== 'APLUN'
											&amp;&amp; plogin.applnType !== 'APLEM' &amp;&amp; plogin.applnType !== 'APLOT')?trans.LBL_MOB_NO : trans.LBL_MOB_NO_AUTH_SIG">Mobile Number</span></label>
                        <div class="input-group">
                            <span class="input-group-addon" id="ba">+91</span>
                            <input id="mobile" name="mobile" data-ng-model="plogin.mbno" type="text" class="number form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-minlength ng-valid-maxlength" placeholder="Enter Mobile Number" aria-describedby="ba" maxlength="10" data-ng-pattern="/^[1-9]{1}[0-9]{9}$/" data-ng-minlength="10" data-ng-change="setPristine('mobile')" data-ng-required="plogin.applnType !== 'REGOI'" required="required" fdprocessedid="4nf9fa"/>
                        </div>
                         
                         
                        <span class="help-block"><i class="fa fa-info-circle"></i> <span data-ng-bind="trans.HLP_OTP_MOBILE_HELP">Separate OTP will be sent to this mobile number</span></span>
                    </div>
                </div>
				<div class="row">
                     
                     
				</div>
				 
                 
            </fieldset>  */}
           


          </div>
        </div>
      </div>
    </>
  )
}

export default NewReister
