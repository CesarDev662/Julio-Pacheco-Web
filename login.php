<?php
$data = json_decode(file_get_contents("php://input"), true);
$usuario = $data["usuario"];
$clave = $data["clave"];

$archivo = "usuarios.json";
if (!file_exists($archivo)) {
  echo "❌ No hay usuarios registrados";
  exit;
}

$usuarios = json_decode(file_get_contents($archivo), true);

// Buscar usuario y verificar contraseña
foreach ($usuarios as $u) {
  if ($u["usuario"] === $usuario && password_verify($clave, $u["clave"])) {
    echo "✅ Bienvenido, $usuario";
    exit;
  }
}

echo "❌ Usuario o contraseña incorrecta";
?>