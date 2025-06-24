using System;
using System.Data;

class Program
{
    private static Dictionary<string,string> usuarios = new Dictionary<string, string>
    {
        {"admin","qwerty"},
        {"beto","pxndx"},
        {"testing","prueba"},
        {"usuario","pass"}
    };
    static void Main(string[] args)
    {
        Console.WriteLine("Este es el programa oficial de Hola Mundo");
        Console.WriteLine("Tienes que iniciar sesión");

        string usuarioCorrecto = "Admin";
        string passCorrecta = "qwerty";

        Console.WriteLine("Escribe tu usuario:");
        string? usuarioIngresado = Console.ReadLine();
        Console.WriteLine("Escribe tu password:");
        string? passIngresada = Console.ReadLine();

        if (string.IsNullOrEmpty(usuarioIngresado) || string.IsNullOrEmpty(passIngresada))
        {
            Console.WriteLine("Usuario o contraseña no pueden estar vacíos.");
            return;
        }

        if (usuarioIngresado == usuarioCorrecto && passIngresada == passCorrecta)
        {            
            Console.WriteLine("Has ingresado con éxito");
            for (int i = 1; i <= 50;i++){
                Console.WriteLine("Hola bienvenido");
            }
        }
        else
        {
            Console.WriteLine("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        }
    }
}
