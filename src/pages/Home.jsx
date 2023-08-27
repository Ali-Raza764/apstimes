import { Blog } from "../components"

const Home = () => {
  return (
    <div className='w-full px-20 sm:p-5'>
      <div className="text-center text-4xl font-semibold mt-5 tracking-tight">Welcome to the APS Times</div>
      <p className="w-full font-semibold text-left text-xl">New posts</p>
      <div className="flex flex-wrap items-center justify-center">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  )
}

export default Home