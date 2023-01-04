import canvasCloth from '../img/ass-img/canvasCloth.png'
import batmanTicket from '../img/ass-img/ticket.png'
import calculator from '../img/ass-img/calc.png'
import particle from '../img/ass-img/particle.png'
const Gallery = () => {
  return (
      <div name='pet' className='bg-[#32507d] flex justify-center flex-col'>
          <h2 className='text flex justify-center items-center'>Pet projects</h2>
          <p className='text flex justify-center items-center'>React TailwindCss Axios Node JS JavaScript Canvas</p>
          <div className="max-w-sm:mx-10 max-w-[1000px] mx-auto pb-8 sm:flex items-center">
              <div className='max-sm:flex p-4 mr-5'>
                  <div className="cloth">
                      <a href="https://wessard.github.io/canvas-cloth/">
                          <img className='h-[200px] sm:h-[150px] cloth' src={canvasCloth} alt="" />
                      </a>
                  </div>
                  <div>
                      <a href="https://wessard.github.io/particle-canvas/">
                          <img className='particle sm:h-[150px]' src={particle} alt="" />
                      </a>
                  </div>
              </div>
              <div className='sm:flex p-4'>
              <a href="https://wessard.github.io/Ticket/">
                  <img className='h-[200px] sm:h-[150px] ticket sm:pr-4' src={batmanTicket} alt="" />
              </a>
                  <a href="https://wessard.github.io/calc/">
                      <img className='calc sm:h-[150px] sm:pl-4' src={calculator} alt="" />
                  </a>
              </div>

          </div>
      </div>
      
  )
}

export default Gallery