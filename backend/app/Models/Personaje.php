<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Personaje extends Model
{
    use HasFactory;
    
    protected $table = 'personajes'; // Asociado a la tabla personajes
    
    protected $fillable = [ 
        'nombre',
        'tipo',
        'poder',
        'mundo'
    ];
}
