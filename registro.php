<?php
$data = json_decode(file_get_contents("php://input"), true);
$usuario = $data["usuario"];
$correo = $data["correo"];
$clave = password_hash($data["clave"], PASSWORD_DEFAULT);

// Leer usuarios actuales
$archivo = "usuarios.json";
$usuarios = file_exists($archivo) ? json_decode(file_get_contents($archivo), true) : [];

// Verificar si el usuario o correo ya existen
foreach ($usuarios as $u) {
  if ($u["usuario"] === $usuario || $u["correo"] === $correo) {
    echo "❌ Usuario o correo ya registrados";
    exit;
  }
}

// Agregar nuevo usuario
$usuarios[] = ["usuario" => $usuario, "correo" => $correo, "clave" => $clave];
file_put_contents($archivo, json_encode($usuarios, JSON_PRETTY_PRINT));
echo "✅ Registro exitoso";
?>