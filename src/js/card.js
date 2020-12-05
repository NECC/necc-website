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
        <figcaption class="p-4 h-full absolute bg-gray-600 sm:static hidden group-hover:flex sm:flex flex-col justify-around">
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
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Francisco Teófilo",
                role : "Secretário"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Pedro Gomes",
                role : "Tesoureiro"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Joel Pinto",
                role : "Presidente"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Margarida Araújo",
                role : "Vice-Presidente"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Henrique Faria",
                role : "Vogal"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "David Machado",
                role : "D. Pedagógico"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Bruno Machado",
                role : "Pedagógico"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Tomás Campinho",
                role : "Pedagógico"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Miguel Freitas",
                role : "D. Dev."    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "João Guedes",
                role : "Dev."    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Rui Torres",
                role : "D. Recreativo"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Tiago Carriço",
                role : "Recreativo"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Gonçalo Braga",
                role : "Recreativo"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Afonso Aarão",
                role : "D. Design"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "João Freitas",
                role : "Design"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Inês Martins",
                role : "Design"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Diogo Rodrigues",
                role : "Design"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Pedro Fernandes",
                role : "D. Comunicação"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Ines Presa",
                role : "Comunicação"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Ana Silva",
                role : "Comunicação"    
            },
            {
                imageSrc : "https://secure.gravatar.com/avatar/fe55f92a1e32aa37fe85a45870a5488c?s=96&d=blank&r=g",
                name : "Beatriz Oliveira",
                role : "Comunicação"
            },
        ]
    }
});