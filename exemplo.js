$(document).ready(function() {

    /*validação telefone */

    $('#telefone').mask('+00 (00) 00000-0000')

    /* validação nome */

    $('#nome').mask('Z', {
        translation: {
            'Z': { pattern: /[A-Za-zÀ-ÖØ-öø-ÿ ]/, recursive: true }
        }
    });
})