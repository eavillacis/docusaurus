import React from "react"
import ReactJson from 'react-json-view'
import axios from 'axios';
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"


const Form = styled.form`
  margin-bottom: 20px;
`

const BodyWrapper = styled.div`
  margin-bottom: 20px;
`

const ResponseWrapper = styled.div`
  margin-top: 20px;
`

export default class IndexPage extends React.Component {
  state = {
    userCode : "396",
    appKey: "1656d700707ad9a77f737e5df3db088a",
    response: {
      test: "test1",
      test2: "test2",
    }
  }

  handleUserCodeChange = (e) => {
    this.setState({userCode: e.target.value})
  }

  handleAppKeyChange = (e) => {
    this.setState({appKey: e.target.value})
  }

  handleTryItClick = (e) => {
    e.preventDefault()

    const {userCode, appKey} = this.state
    console.log("hey try it")
    console.log("userCode", userCode)
    console.log("appKey", appKey)

    axios.post('https://api-box-test.skypostal.com/wcf-services/service-geographic.svc/geographic/geographic-get-countries', { userCode, appKey})
      .then(res => {
        console.log(res);
        console.log(res.data);
    })
  }

  render(){
    const {userCode, appKey, response} = this.state
    return(
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
             Description here!!!
            </div>
            <div className="col-xs-6">
              <Form>
                  <span>User Code</span>
                  <br></br>
                  <input type="text" value={userCode} onChange={this.handleUserCodeChange}></input>
                  <br></br>
                  <span>App Key</span>
                  <br></br>
                  <input type="text" value={appKey} onChange={this.handleAppKeyChange}></input>
                  <br></br>
              </Form>
              <BodyWrapper>
                <ReactJson name='body' enableClipboard={false} src={{
                  userCode,
                  appKey
                }} />
              </BodyWrapper>
              
              <button type="submit" onClick={this.handleTryItClick}>try it!</button>
              <ResponseWrapper>
                <ReactJson name='response' enableClipboard={false} src={response} theme="monokai"/>
              </ResponseWrapper>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}




