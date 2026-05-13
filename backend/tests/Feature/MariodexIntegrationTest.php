<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Personaje;

class MariodexIntegrationTest extends TestCase
{

// vacía la base de datos de prueba antes de cada test
    use RefreshDatabase;

    public function test_example()
    {
        // Creamos datos de prueba en la BD
        \App\Models\Personaje::factory()->count(3)->create();

        // Llamamos al endpoint de la API
        $response = $this->getJson('/personajes'); 

        // Comprobamos que el estado es 200 OK
        $response->assertStatus(200);

        // Comprobamos que hay exactamente 3 elementos en el JSON
        $response->assertJsonCount(3);

    }
}
