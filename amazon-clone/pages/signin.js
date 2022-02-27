
import { getProviders, signIn } from "next-auth/react"
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {FaGoogle} from 'react-icons/fa'
import  Image  from 'next/image';
import smile from '../public/smile.png'




export default function SignIn({ providers }) {


  const {data:session, status} = useSession()

    const router = useRouter()

    //console.log(session, status)

    useEffect(() =>{
        if(session){
          
            router.push('/')
        }
    }, [session])






  return (
    <>
      {Object.values(providers).map((provider) => (
        <div className="grid h-[30rem] items-center justify-center">
          <div key={provider.name} className='flex flex-col justify-center items-center gap-6 border p-6'>
            <h3 className='text-center font-bold text-3xl'>Sign in</h3>
            <div className="flex items-center border  ">
              <div className="p-3">
                <FaGoogle className="text-xl"/>
              </div>
              <button onClick={() => signIn(provider.id)} className='bg-blue-500 text-white p-3'>
                Sign in with {provider.name}
              </button>
            </div>
              <Image src={smile} objectFit='contain' width={200} height={100}/>
          </div>
        </div>
      ))}
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/