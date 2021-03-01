Vue.component('card-mobile', {
    props: ['link', 'name', 'role'],
    template: `
    <figure class="bg-white dark:bg-gray-600 shadow-lg rounded-xl md:rounded-md p-0 overflow-hidden flex flex-row justify-center items-center m-2">
        <img class="rounded-none h-24 w-24" v-bind:src="link" alt="">
        <figcaption class="p-4">
            <h3 class="font-semibold text-gray-700 dark:text-gray-200 mb-1 w-36">{{ name }}</h3>
            <span class="rounded-full bg-blue-50 dark:bg-blue-200 text-sm py-1 px-2 font-semibold text-blue-700 dark:text-blue-900">{{ role }}</span>
        </figcaption>
    </figure>
    `
});

Vue.component('card-member', {
    props: ['link', 'name', 'role'],
    template: `
    <div class="bg-white dark:bg-gray-600 shadow-lg rounded-md p-5 flex flex-col justify-evenly items-center m-2">
        <img class="rounded-full border-2 border-gray-200" v-bind:src="link" alt="">
        <h3 class="font-semibold text-gray-700 dark:text-gray-200">{{ name }}</h3>
        <span class="rounded-full bg-blue-50 dark:bg-blue-200 text-sm py-1 px-2 font-semibold text-blue-700 dark:text-blue-900">{{ role }}</span>
    </div>
    `
});

Vue.component('card-sponsor', {
    props: ['link', 'brand', 'description', 'address'],
    template: `
    <figure class="bg-white dark:bg-gray-600 shadow-xl rounded-xl p-0  my-4 mx-2 overflow-hidden flex flex-row justify-center items-center max-w-2xl relative sm:static group">
        <img class="rounded-none h-80 sm:h-48 sm:w-48" v-bind:src="link" alt="">
        <figcaption class="p-4 h-full absolute bg-white dark:bg-gray-600 sm:static hidden group-hover:flex sm:flex flex-col justify-around">
            <h3 class="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-1">{{ brand }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-2">{{ description }}</p>
            <span class="text-blue-500 dark:text-blue-300 text-sm"><ion-icon name="location-outline"></ion-icon> {{ address }}</span>
        </figcaption>
    </figure>
    `
});

var app = new Vue({
    el: '#app',
    data: {
        cardSponsor: [
            {
                imageSrc : "https://i.pinimg.com/originals/fd/d6/04/fdd6047d9c360bd20fd44cf5897ff84b.jpg",
                brand : "Coke",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                address : "Rua Nova de Santa Cruz Nº99"
            },
        ],
        cardMembers: [
            {
                imageSrc : "img/avatar_Francisco_Teofilo.webp",
                name : "Francisco Teófilo",
                role : "Secretário"
            },
            {
                imageSrc : "img/avatar_Pedro_Gomes.webp",
                name : "Pedro Gomes",
                role : "Tesoureiro"
            },
            {
                imageSrc : "img/avatar_Joel_Pinto.webp",
                name : "Joel Pinto",
                role : "Presidente"
            },
            {
                imageSrc : "img/avatar_Margarida_Araujo.webp",
                name : "Margarida Araújo",
                role : "Vice-Presidente"
            },
            {
                imageSrc : "img/avatar_Henrique_Faria.webp",
                name : "Henrique Faria",
                role : "Vogal"
            },
            {
                imageSrc : "img/avatar_David_Machado.webp",
                name : "David Machado",
                role : "D. Pedagógico"
            },
            {
                imageSrc : "img/avatar_Bruno_Machado.webp",
                name : "Bruno Machado",
                role : "Pedagógico"
            },
            {
                imageSrc : "img/avatar_Tomas_Campinho.webp",
                name : "Tomás Campinho",
                role : "Pedagógico"
            },
            {
                imageSrc : "img/avatar_Miguel_Freitas.webp",
                name : "Miguel Freitas",
                role : "D. Dev."
            },
            {
                imageSrc : "img/avatar_Joao_Guedes.webp",
                name : "João Guedes",
                role : "Dev."
            },
            {
                imageSrc : "img/avatar_Rui_Torres.webp",
                name : "Rui Torres",
                role : "D. Recreativo"
            },
            {
                imageSrc : "img/avatar_Tiago_Carrico.webp",
                name : "Tiago Carriço",
                role : "Recreativo"
            },
            {
                imageSrc : "img/avatar_Goncalo_Braga.webp",
                name : "Gonçalo Braga",
                role : "Recreativo"
            },
            {
                imageSrc : "img/avatar_Afonso_Aarao.webp",
                name : "Afonso Aarão",
                role : "D. Design"
            },
            {
                imageSrc : "img/avatar_Joao_Freitas.webp",
                name : "João Freitas",
                role : "Design"
            },
            {
                imageSrc : "img/avatar_Ines_Martins.webp",
                name : "Inês Martins",
                role : "Design"
            },
            {
                imageSrc : "img/avatar_Diogo_Rodrigues.webp",
                name : "Diogo Rodrigues",
                role : "Design"
            },
            {
                imageSrc : "img/avatar_Pedro_Fernandes.webp",
                name : "Pedro Fernandes",
                role : "D. Comunicação"
            },
            {
                imageSrc : "img/avatar_Ines_Presa.webp",
                name : "Inês Presa",
                role : "Comunicação"
            },
            {
                imageSrc : "img/avatar_Ana_Silva.webp",
                name : "Ana Silva",
                role : "Comunicação"
            },
            {
                imageSrc : "img/avatar_Beatriz_Oliveira.webp",
                name : "Beatriz Oliveira",
                role : "Comunicação"
            },
        ]
    }
});