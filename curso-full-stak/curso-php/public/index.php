<?php
$number1 = 20;
$number2 = 10;
$isAdmin = false;

$resultado = $number1 > $number2 && $isAdmin;

if($resultado){
    echo 'Verdadeiro';
}else{
    echo 'Falso';
}
?>