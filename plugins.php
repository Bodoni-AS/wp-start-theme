<?php

namespace Bodoni\Core;

/*
any -> plugins som skal være med både i dev og i prod
development -> plugins som bare skal være med i dev
production -> plugins som bare skal være med i production

Eksempel:
Installer Yost og en privat plugin i any:
'any' => [
    ['wordpress-seo'] => ['wordpress-seo'],
    ['min-plugin] => ['https://noenoe/min-plugin.zip'],
]

*/

$plugins = [
    'any' => [],
    'development' => [],
    'production' => []
];
