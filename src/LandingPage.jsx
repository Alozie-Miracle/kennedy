import { Helmet } from 'react-helmet-async';
const LandingPage = () => {
  return (

    <div className='bg-[#18181b] text-white text-xs' style={{ fontFamily: "Poppins"}}>
        <Helmet>
        <title>Learning React Helmet!</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
        </Helmet>
        <div className='w-ful p-2 '>
            <div className='flex items-center justify-between max-w-[80%] mx-auto w-full sticky top-0 z-50 bg-[#18181b] py-5'>
                <h2>Kennedy</h2>
                <div className='flex gap-10 items-center'>
                    <p>Documentation</p>
                    <p className='bg-[#06b6d4] py-2 px-10'>Sign up</p>
                </div>
            </div>
            <div className='max-w-5xl mx-auto h-full flex flex-col items-center justify-center gap-5 '>
                <h1 className='text-5xl' style={{ fontFamily: "Poppins"}}>Landing template for <span className='text-[#06b6d4]'>startups</span></h1>
                <p className='text-lg'>Our landing page template works on all devices, so you only have</p>
                <p className='text-lg'>to set it up onces, and get beautifull
                    results forever.
                </p>
                <div className='flex gap-5 text-xs'>
                    <button className='px-5 py-2 bg-[#06b6d4]'>
                        GET STARTED
                    </button>
                    <button className='px-5 py-2 bg-[#27272a]'>
                        VIEW ON GITHUB
                    </button>
                </div>
                <img src="https://img.freepik.com/free-photo/business-colleagues-watching-content-laptop_74855-1142.jpg?w=740&t=st=1697600234~exp=1697600834~hmac=2ac909afd4683cc7cabe56c2e1d25e422fe2cc3a02d7023bee119c84bd56a6b1" alt="" />
            </div>
        </div>
    </div>
  )}

export default LandingPage