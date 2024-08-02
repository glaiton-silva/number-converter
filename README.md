
# Number Converter

Este é um sistema simples de conversão de números que permite converter números romanos para arábicos e vice-versa. O sistema utiliza CodeIgniter no backend e Vue.js no frontend para proporcionar uma experiência interativa e agradável.

## Funcionalidades

- Conversão de números romanos para arábicos.
- Conversão de números arábicos para romanos.
- Validação de entradas para garantir que os números estejam no formato correto.
- Interface intuitiva com transições suaves e feedback visual.
- Suporte a dispositivos móveis com layout responsivo.

## Requisitos

- PHP >= 7.2
- Composer
- Servidor web (Apache, Nginx, etc.)

## Como Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/glaiton-silva/number-converter.git
    cd number-converter
    ```

2. Instale as dependências do Composer:
    ```bash
    composer install
    ```

3. Inicie o servidor de desenvolvimento do CodeIgniter:
    ```bash
    php spark serve
    ```

4. Abra seu navegador e acesse:
    ```
    http://localhost:8080
    ```

## Estrutura do Projeto

- `app/Controllers/ConversionController.php`: Controlador que lida com as conversões de números.
- `app/Views/conversion_view.php`: View principal que contém o layout da aplicação.
- `public/css/styles.css`: Arquivo CSS para estilização.
- `public/js/app.js`: Lógica Vue.js para interação no frontend.
- `public/js/gradient.js`: Script JavaScript para a animação de gradiente de fundo.

## Licença

Este projeto está licenciado sob a Licença MIT.

## Sobre

Este projeto foi desenvolvido como um exemplo simples de como combinar CodeIgniter e Vue.js para criar uma aplicação interativa. Ele oferece uma interface intuitiva para a conversão de números e inclui algumas funcionalidades adicionais, como a validação de entradas e animações de fundo.

Sinta-se à vontade para clonar o repositório, explorar o código e adaptar conforme suas necessidades!
