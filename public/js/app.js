/**
 * Criação de uma nova instância Vue para a aplicação.
 */
new Vue({
    // Elemento HTML alvo da aplicação Vue
    el: '#app',

    // Dados da aplicação
    data: {
        // Valor de entrada do usuário
        inputValue: '',

        // Resultado da conversão
        result: null,

        // Indicador se a conversão é de Romano para Arábico
        isRomanToArabic: true,

        // Indicador de carregamento
        loading: false,

        // Timeout para a conversão
        timeout: null,

        // Mensagem de erro
        errorMessage: ''
    },

    // Métodos da aplicação
    methods: {
        /**
         * Método acionado quando há entrada de dados no input.
         * Define um timeout para a conversão e limpa o resultado anterior.
         */
        onInput() {
            clearTimeout(this.timeout);
            this.result = null;
            this.errorMessage = '';
            this.loading = true;

            // Define um timeout de 1 segundo antes de executar a conversão
            this.timeout = setTimeout(this.convert, 1000);
        },

        /**
         * Método para converter o valor de entrada.
         * Realiza uma chamada de API para o servidor para obter a conversão.
         */
        convert() {
            // Verifica se o valor de entrada está vazio
            if (!this.inputValue) {
                this.result = null;
                this.loading = false;
                return;
            }

            // Verifica a validade da entrada antes de enviar
            if (this.isRomanToArabic && !/^[IVXLCDM]+$/i.test(this.inputValue)) {
                this.errorMessage = 'Entrada inválida para número romano';
                this.loading = false;
                return;
            }

            if (!this.isRomanToArabic && !/^\d+$/.test(this.inputValue)) {
                this.errorMessage = 'Entrada inválida para número arábico';
                this.loading = false;
                return;
            }

            // Define a URL e os dados de acordo com o tipo de conversão
            let url = this.isRomanToArabic ? '/convertToArabic' : '/convertToRoman';
            let data = this.isRomanToArabic ? { roman: this.inputValue } : { arabic: this.inputValue };

            // Faz uma chamada POST para o servidor para realizar a conversão
            axios.post(url, data)
                .then(response => {
                    if (response.data.error) {
                        this.errorMessage = response.data.error;
                    } else {
                        this.result = response.data.result;
                    }
                })
                .catch(error => {
                    console.error(error);
                    this.errorMessage = 'Erro na conversão';
                })
                .finally(() => {
                    this.loading = false;
                });
        },

        /**
         * Método para alternar o tipo de conversão.
         * Troca os valores de entrada e resultado.
         */
        toggleConversion() {
            this.isRomanToArabic = !this.isRomanToArabic;
            const previousInput = this.inputValue;
            this.inputValue = this.result || '';
            this.result = previousInput;
            this.errorMessage = '';
            clearTimeout(this.timeout);
            this.loading = false;
        }
    }
});
