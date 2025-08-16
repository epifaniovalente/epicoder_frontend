<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../CSS/forms.css">
    <title>Login Safe-Voice</title>
</head>

<body>
    <main id="container" class="container-fluid">
        <section class="">
            <form action="" method="post" class="p-2 shadow" autocomplete="off">
                <div class="header-form">
                    <div class="logo">
                        <img src="../midias/logo1_safevoice.png" alt="logo">
                    </div>
                    <!-- <h2 class="h2 text-center text-info-emphasis">Safe Voice</h2> -->
                    <h3 class="h3 text-center text-info">Log in</h3>
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
                    </div>
                    <span class="error" id="error_password">error!</span>
                </div>

                <div class="form-container last"> 
                <div class="form-box fiveth-box">
                    <label for="notification" class="form-check-label">lembrar-me</label>
                    <input type="checkbox" name="notification" id="notification" class="form-check">
                </div>
                <a href="#" class="">esqueci-me</a>
                </div>
                <button type="submit" class="btn btn-primary mb-2 mt-2 w-100">Realizar cadastro</button>
                <p class="text-center">Já tem uma conta? <a href="#">login</a></p>
            </form>
        </section>
    </main>
</body>

</html>