<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$dbase = "voz_segura";

$conecta = new mysqli($servidor, $usuario, $senha, $dbase);
if ($conecta->connect_error) {
    # code...
    die("Erro na conexão! verifique seu servidor: " . $conecta->connect_error);
}

echo "Conexão estabelecida!";
