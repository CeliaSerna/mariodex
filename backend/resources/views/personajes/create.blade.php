<!-- resources/views/personajes/create.blade.php -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Personaje</title>
</head>

<body>
    <h1>Crear nuevo Personaje</h1>
    <!-- Bloque para mostrar errores de validación -->
    @if ($errors->any())
        <div style="color: red;">
            <p>Por favor, corrige los siguientes errores:</p>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <!-- Formulario de Registro -->
    <form action="{{ route('personajes.store') }}" method="POST">
        @csrf <!-- Token de seguridad obligatorio -->

        <div>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value="{{ old('nombre') }}">
        </div>

        <div>
            <label for="tipo">Tipo:</label>
            <input type="text" id="tipo" name="tipo" value="{{ old('tipo') }}">
        </div>

        <div>
            <label for="poder">Poder:</label>
            <input type="number" id="poder" name="poder" value="{{ old('poder') }}">
        </div>

        <div>
            <label for="mundo">Mundo:</label>
            <input type="text" id="mundo" name="mundo" value="{{ old('mundo') }}">
        </div>
        <br>
        <button type="submit">Guardar Personaje</button>
    </form>

</body>
</html>