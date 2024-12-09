import React from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

const Header = styled.h1`
  font-family: "Single Day", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 47px;
  color: #72DB73;
  `

const Text = styled.p`
  font-family: "Outfit", sans-serif;
  font-weight: 200;
  font-style: bold;
  font-size: 18px;
  color: #FFFFFF;
  margin-bottom: 0.8rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 418px;
  padding: 1rem;
`

const Input = styled.input`
  background-color: #292929;
  outline: none;
  width: 100%;
  height: 50px;
  margin-bottom: 1rem;
  padding: 1rem;
  border: none;
  color: #FFFFFF;
  `

const CheckBox = styled.div`
    display: flex;
    margin-bottom: 1rem;
    cursor: pointer;
    position: relative;
`


const CheckBoxTerm = styled.span`

  font-family: "Outfit", sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 12px;
  color: #FFFFFF;
  margin-left: 1rem;
`

const Button = styled.button`
  background-color: #72DB73;
  outline: none;
  width: 100%;
  height: 50px;
  border-radius: 28px;
  color: #FFFFFF;
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  font-style: bold;
  font-size: 25px;
  cursor: pointer;

`
const Terms = styled.p`
  font-family: "DM Sans", sans-serif;
  color: #7C7C7C;
  font-size: 12px;
  margin-top: 1rem;
  margin-bottom: 0;
  text-align: justify;

  span {
    color: #72DB73;
    font-weight: bold;
    text-decoration: underline;
  }
`

const Login = () => {
  return (
    <LoginContainer>
        <Header>Super App</Header>
        <Text>Create your new account</Text>

        <Form >
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder='Username' />
            <Input type="text" placeholder='Email' />
            <Input type="mobile" placeholder='Mobile' />

            <CheckBox>
                <input type="checkbox" />
                <CheckBoxTerm className="check_box">
                    Share my registration data with Superapp
                </CheckBoxTerm>
            </CheckBox>
            

            <Button type="submit">SIGN UP</Button>

            <Terms>
            By clicking on Sign up. you agree to Superapp
            <span> Terms and Conditions of Use</span>
            </Terms>
            <Terms>
                To learn more about how Superapp collects, uses, shares and protects
                your personal data please head Superapp <span>Privacy Policy</span>
            </Terms>
        </Form>
    </LoginContainer>
  )
}

export default Login