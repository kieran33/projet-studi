import React from "react";
import { useNavigate } from "react-router-dom";
/*import { useState } from "react";*/
import { useRef } from "react";


export function PageInscription(){
    const navigate = useNavigate();

    const regimeInputRef = useRef();
    const nomInputRef = useRef();
    const prenomInputRef = useRef();
    const emailInputRef = useRef();
    const telInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const selectedRegime = regimeInputRef.current.value;
        const enteredName = nomInputRef.current.value;
        const enteredLastName = prenomInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredTel = telInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        console.log(selectedRegime);
        console.log(enteredName);
        console.log(enteredLastName);
        console.log(enteredEmail);
        console.log(enteredTel);
        console.log(enteredPassword);

        //vider les champs

        regimeInputRef.current.value = "";
        nomInputRef.current.value = "";
        prenomInputRef.current.value = "";
        emailInputRef.current.value = "";
        telInputRef.current.value = "";
        passwordInputRef.current.value = "";
    }

   /* const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if(nom.length === 0){
            alert('Le champs nom est vide');
        }
        else if(prenom.length === 0){
            alert('Le champs prénom est vide');
        }
        else if(email.length === 0){
            alert('Le champs email est vide');
        }
        else if(tel.length === 0){
            alert('Le champs téléphone est vide');
        }
        else if(password.length === 0){
            alert('Le champs mot de passe est vide');
        }
        else{
            alert('success');
        }
    }*/
    
    return(
        <>
            <form id="formulaireInscription" method="post" action="formulaireInscription.php" onSubmit={submitHandler}>
                <legend>Inscription</legend>

                <label htmlFor="typeregime"></label>
                <select name="typeregime" id="typeregime" ref={regimeInputRef}>
                    <option value="">--Choisissez un type de régime--</option>
                    <option value="sans_lactose">Sans lactose</option>
                    <option value="vegetarien">Végétarien</option>
                    <option value="sans_sel">Sans sel</option>
                </select>

                <input type="text" name="nom" id="nom" placeholder="Votre nom..." ref={nomInputRef} /*value={nom} onChange={(e) => setNom(e.target.value)}*/></input>
                <label htmlFor="nom"></label>

                <input type="text" name="prenom" id="prenom" placeholder="Votre prenom..." ref={prenomInputRef} /*value={prenom} onChange={(e) => setPrenom(e.target.value)}*/></input>
                <label htmlFor="prenom"></label>

                <input type="email" name="email" id="email" placeholder="Votre email..." ref={emailInputRef} /*value={email} onChange={(e) => setEmail(e.target.value)}*/></input>
                <label htmlFor="email"></label>

                <input type="tel" name="phone" id="phone" placeholder="Votre numéro de téléphone..." ref={telInputRef} /*value={tel} onChange={(e) => setTel(e.target.value)}*/></input>
                <label htmlFor="phone"></label>

                <input type="password" name="password" id="password" placeholder="Votre mot de passe..." ref={passwordInputRef} /*value={password} onChange={(e) => setPassword(e.target.value)}*/></input>
                <label htmlFor="password"></label>

                <button type="submit" name="submit" value="Register" id="submit" onClick={() => {navigate('/accueil')}} /*onClick={submitHandler}*/ >Je m'inscris</button>
            </form>
        </>
    )
}

/*
export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('le nom a été soumis : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom :
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Envoyer"/>
            </form>
        )
    }
}*/