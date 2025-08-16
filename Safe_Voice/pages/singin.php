<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../CSS/forms.css">
    <title>Cadastro Safe-Voice</title>
</head>

<body>
    <main id="container" class="container-fluid">
        <section class="">
            <form action="" method="post" class="p-2 shadow" autocomplete="off">
                <div class="header-form">
                     <div class="logo">
                        <img src="../midias/logo3_safevoice.png" alt="logo">
                    </div>
                    <h2 class="h2 text-center text-info-emphasis">Cadastro</h2>
                </div>

                <div class="form-container">
                    <div class="form-box first-box">
                        <input type="text" name="name" id="name" placeholder="First nanme" class="form-control">
                        <input type="text" name="surname" id="surname" placeholder="surname" class="form-control">
                    </div>
                    <span class="error" id="error_name">error!</span>
                </div>

                <div class="form-container">
                    <div class="form-box second-box">
                        <input type="text" name="course" id="course" placeholder="course" class="form-control">
                        <input type="text" name="classroom" id="classroom" placeholder="classroom" class="form-control">
                    </div>
                    <span class="error" id="error_course">error!</span>
                </div>

                <div class="form-container">
                    <div class="form-box">
                        <input type="email" name="email" id="email" placeholder="your email" class="form-control">
                    </div>
                    <span class="error" id="error_email">error!</span>
                </div>

                <div class="form-container">
                    <div class="form-box fourth-box">
                        <input type="password" name="password" id="password" placeholder="your password" class="form-control">
                        <input type="password" name="password2" id="password2" placeholder="confirm" class="form-control">
                    </div>
                    <span class="error" id="error_password">error!</span>
                </div>

                <div class="form-box fiveth-box">
                    <label for="notification" class="form-check-label">notificar-me</label>
                    <input type="checkbox" name="notification" id="notification" class="form-check">
                </div>
                <button type="submit" class="btn btn-primary mb-2 mt-2 w-100">Realizar cadastro</button>
                <p class="text-center">Já tem uma conta? <a href="#">login</a></p>
            </form>
        </section>
    </main>
</body>

</html>