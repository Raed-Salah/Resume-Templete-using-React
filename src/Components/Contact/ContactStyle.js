import styled from "styled-components"

export const ContactSection = styled.div`
    text-align: center;
    margin: auto;
`
export const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 30px
`
export const ContactForm = styled.form`
    width: 70%;
    margin: auto;
`
export const FormInput = styled.div`
    width: 100%;
`

export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
`

export const TextInput = styled(Input)`
    float: left;
    width: 49%;
    
`
export const EmailInput = styled(Input)`
    float: right;
    width: 49%;
`
export const SubInput = styled(Input)`
    width: 100%;
`
export const TextArea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc
`
export const SubmitInput = styled(Input)`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
`

/* .ContactSection{
    text-align: center;
    margin: auto;
}

.title {
    font-size: 60px;
    margin-bottom: 30px
}

form {
    width: 70%;
    margin: auto;
}

form input {
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
}

form .form-input input {
    width: 49%;
}

form input[type=text]{
    float: left;
}

form input[type=email]{
    float: right;
}

form input.sub {
    width: 100%;
}

form textarea {
    width: 100%;
    outline: 0;
    background: #ccc
}

form input[type=submit] {
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
} */