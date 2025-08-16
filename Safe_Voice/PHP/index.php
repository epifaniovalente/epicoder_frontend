<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login adimin</title>
    <link rel="stylesheet" href="../CSS/login-admin.css">
    <script src="../JS/scriptCode.js"></script>
</head>

<body>
    <header>
        <div id="logo">
            <h3>Voz Segura</h3>
        </div>
        <div class="cabeca">
            <h1>Denúncia Anônima Escolar</h1>
            <p>Sua voz importa. Sua identidade é protegida</p>
        </div>
    </header>
    <?php
    include_once 'conexao.php';
    $email = $_GET["email"] ?? " ";
    $nome = $_GET["nome"] ?? " ";


    ?>
    <div id="logo">Voz Segura</div>
    <div class="login-container">
        <h1>Área Administrativa</h1>
        <span id="mensagem-erro">* email ou senha incorreta! verifque seus dados. *</span>
        <form action="<?= $_SERVER['PHP_SELF'] ?>" method="POST">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required autocomplete="off" <?= $email ?>>

            <label for="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required autocomplete="off" <?= $nome ?>>

            <div class="sugestao">
                <input type="checkbox" name="conectado" id="conectado">
                <label for="conectado">Manter conectado</label>
            </div>
            <a href="#" id="esqueceu">esqueceu sua senha?</a>
            <div class="botoes">

                <button type="submit">Log In</button>
            </div>
    </div>

    </form>
    </div>
</body>

</html>