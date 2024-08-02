<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->get('/', 'ConversionController::index');
$routes->post('convertToArabic', 'ConversionController::convertToArabic');
$routes->post('convertToRoman', 'ConversionController::convertToRoman');
