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
    user_code : 396,
    app_key: "1656d700707ad9a77f737e5df3db088a",
    response: {
      test: "test1",
      test2: "test2",
    }
  }

  handleUserCodeChange = (e) => {
    this.setState({user_code: e.target.value})
  }

  handleAppKeyChange = (e) => {
    this.setState({app_key: e.target.value})
  }

  handleTryItClick = (e) => {
    e.preventDefault()

    const {user_code, app_key} = this.state

    axios.post('https://api-box-test.skypostal.com/wcf-services/service-geographic.svc/geographic/geographic-get-countries', { user_code, app_key })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({response: res.data})
    })
  }

  render(){
    const {user_code, app_key, response} = this.state
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
                  <input type="text" value={user_code} onChange={this.handleUserCodeChange}></input>
                  <br></br>
                  <span>App Key</span>
                  <br></br>
                  <input type="text" value={app_key} onChange={this.handleAppKeyChange}></input>
                  <br></br>
              </Form>
              <BodyWrapper>
                <ReactJson name='body' enableClipboard={false} src={{
                  user_code,
                  app_key
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
