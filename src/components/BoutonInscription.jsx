import React from "react";
import { useNavigate } from "react-router-dom";

export function BoutonInscription() {
    const navigate = useNavigate();

    return(
        <>
            <button onClick={() => {navigate("/inscription")}}>S'inscrire</button>
        </>
    )
}