<!DOCTYPE html>
<html>
    <head>
        <title>Page de traitement</title>
        <meta charset="utf-8">
    </head>
    <body>
        <p>Dans le formulaire précédent, vous avez fourni les
        informations suivantes :</p>
        
        <?php
            echo 'Nom : '.$_POST["nom"].'<br>';
            echo 'Prénom : ' .$_POST["prenom"].'<br>';
            echo 'Email : ' .$_POST["email"].'<br>';
            echo 'Téléphone : ' .$_POST["phone"].'<br>';
            echo 'Mot de passe : ' .$_POST["password"].'<br>';
        ?>
    </body>
</html>
