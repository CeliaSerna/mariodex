<?php

namespace Database\Factories;

use App\Models\Personaje;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Personaje>
 */
class PersonajeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nombre' => $this->faker->name(), // Nombre aleatorio
            'tipo'   => $this->faker->randomElement(['Héroe', 'Villano', 'Aliado','Jefe']),
            'poder'  => $this->faker->numberBetween(1, 100), // Número del 1 al 100
            'mundo'  => $this->faker->word(),
        ];
    }
}
