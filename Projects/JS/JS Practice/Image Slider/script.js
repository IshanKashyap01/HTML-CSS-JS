const images = [
   'https://composeclick.com/wp-content/uploads/2018/05/nature-1.jpg',
   'https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg',
   'https://www.mickeyshannon.com/images/landscape-photography.jpg',
   'https://cdn.expertphotography.com/wp-content/uploads/2024/09/Nature-Photographers-Marc-Adamus-3.jpg',
   'https://akshitphotography.com/wp-content/uploads/2021/08/Nature-Photography-105.jpg'
]
/**
 * Represents an img HTML element
 */
class Image
{
   #image
   constructor(link)
   {
      this.#image = document.createElement('img')
      this.#image.setAttribute('id', 'carouselImage')
      this.#image.setAttribute('src', link)
   }
   setSource(link)
   {
      this.#image.setAttribute('src', link)
   }
   get image()
   {
      return this.#image
   }
}

/**
 * Represents a Carousel that cycles through a set of images
 */
class Carousel
{
   #index
   #image
   #links
   constructor(links)
   {
      this.#links = links
      this.#index = 0
      this.#image = new Image(links[0])
   }
   next()
   {
      this.#index = (this.#index + 1) % images.length
      this.#update()
   }
   previous()
   {
      if(this.#index == 0)
      {
         this.#index = images.length - 1
      }
      else
      {
         this.#index = Math.abs((this.#index - 1) % images.length)
      }
      this.#update()
   }
   get image()
   {
      return this.#image.image
   }
   #update()
   {
      this.#image.setSource(this.#links[this.#index])
   }
}

const carousel = new Carousel(images)

const figure = document.querySelector('figure')
figure.append(carousel.image)

document.querySelector('#prevButton').addEventListener('click', () => carousel.previous())
document.querySelector('#nextButton').addEventListener('click', () => carousel.next())
