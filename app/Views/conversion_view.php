<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversor de Números</title>
    <link rel="stylesheet" href="/css/styles.css">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
    <div id="app" class="container">
        <h1>Conversor de Números</h1>
        <div class="row">
            <div class="col">
                <label>{{ isRomanToArabic ? 'Número Romano' : 'Número Arábico' }}</label>
                <input v-model="inputValue" @input="onInput" placeholder="Digite um número">
            </div>
            <div class="arrow">
                <button :disabled="loading" @click="toggleConversion">
                    <span v-if="loading" class="loader"></span>
                    <span v-else>&#8646;</span>
                </button>
            </div>
            <div class="col">
                <label>{{ isRomanToArabic ? 'Número Arábico' : 'Número Romano' }}</label>
                <input :value="result" :placeholder="isRomanToArabic ? 'Resultado Arábico' : 'Resultado Romano'" disabled>
            </div>
        </div>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
    <script src="/js/app.js"></script>
    <script src="/js/gradient.js"></script>
</body>
</html>
