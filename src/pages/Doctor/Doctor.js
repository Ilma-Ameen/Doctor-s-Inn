import DoctorCard from '../Doctor/DoctorCard';
import { doctors } from './../../assests/data/doctor'

const Doctor = () => {
  return (
    <>
    { /* Search Section */ }
      <section className='bg-[#fff9ea]'>
        <div className="container text-center">
          <h2 className="heading">
            Find A Doctor
          </h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input 
              type="search" 
              placeholder='Search Doctor'
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>
      { /* Doctors Section */ }
      <section>
        <div className="container">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '> 
              {doctors.map (doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
          </div>
        </div>
      </section>
    </>
    )
}

export default Doctor;