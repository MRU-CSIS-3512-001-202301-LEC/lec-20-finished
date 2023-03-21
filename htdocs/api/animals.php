<?php

header('Content-Type: application/json');

echo json_encode([
    [
        "animal" => "bear",
        "sound" => "roar!"
    ],
    [
        "animal" => "beaver",
        "sound" => "gnaw gnaw"
    ]
]);
