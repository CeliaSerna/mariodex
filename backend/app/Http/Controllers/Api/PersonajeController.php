<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Personaje;

class PersonajeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $personajes = Personaje::all();
        return response()->json($personajes);
    }

    public function create()
    {
        return view('personajes.create');
    }

    /**
     * Valida los datos recibidos, guarda en la base de datos y mensaje de confirmación
     */
    public function store(Request $request)
    {
        // Requisitos de validación
        $validatedData = $request->validate([
            'nombre' => 'required|string|min:3',
            'tipo'   => 'required|string',
            'poder'  => 'required|integer|min:1',
            'mundo'  => 'required|string',
        ]);
        // Si llegamos aquí es que se han pasado las validaciones
        $personaje = Personaje::create($validatedData);
        return response()->json([
            'mensaje'   => '¡Personaje creado exitosamente!',
            'personaje' => $personaje
            ], 201);
    }

    public function destroy($id)
    {
        $personaje = Personaje::find($id);
        if (!$personaje) {
            return response()->json(['message' => 'No encontrado'], 404);
        }
        $personaje->delete();
        return response()->json(['message' => 'Personaje eliminado correctamente']);
    }
}
