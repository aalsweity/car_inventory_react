import Background from '../assets/Car_showroom.jpeg'

function About() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
      <div className='flex h-screen'>
            <h2 className='p-5 text-black'>Car Showroom by Anas Al-Sweity</h2>
        </div>
    </div>
  )
}

export default About