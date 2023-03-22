<?php

header('Content-Type: application/json');

sleep(1);

echo json_encode([
    [
        "city" => "Calgary",
        "weather" => "all over the place"
    ],
    [
        "city" => "Nagasaki",
        "weather" => "hot and humid"
    ]

]);
