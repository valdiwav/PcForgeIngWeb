const main=document.querySelector('main')
async function getData(){
    const res = await fetch("hardwareimg.json")
    const photos = await res.json()
    photos.forEach(element => {

        const container=document.createElement('div')
        container.className="container"

        const card=document.createElement('div')
        card.className="img-hw"

        const img = document.createElement('img')
        img.src="css/imgLog/graficas-portada.webp"

        const titulo = document.createElement('p')
        titulo.textContent = "Tarjeta grafica"

        const desc = document.createElement('div')
        desc.className="descripcion"

        const descripcion = document.createElement('p')
        descripcion.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae id vero reprehenderit fugit, est obcaecati atque nesciunt recusandae, cupiditate corrupti voluptatum sit laboriosam in delectus qui aut, neque consectetur modi."


        container.append(card,titulo,desc)
        card.append(img)
        desc.append(descripcion)
        
    });
}

getData()
