import { ReactNode, useContext, useState } from 'react'
import Head from 'next/head'
import classNames from 'classnames'
import { toTitleCase } from '../utils'
import { useRouter } from 'next/dist/client/router'
import Panel from './Panel'
import { SearchContext, StoryContext } from '../pages/_app'

export default function App({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const path = router.pathname.slice(1)
  const { selectedStoryId, isPanelOpen } = useContext(StoryContext)
  const { query, setQuery } = useContext(SearchContext)
  return (
    <>
      <Head>
        <title>
           News{' '}
          {router.pathname !== '/'
            ? ` | ${toTitleCase(router.pathname.slice(1))}`
            : ''}
        </title>
      </Head>
      <div className='min-h-screen bg-white'>
        <nav className='bg-white border-b border-gray-200'>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='flex items-center flex-shrink-0'>
                  <a
                    href='/'
                    className='cursor-pointer'
                    // onClick={() => router.push('/')}
                  >
                    <img
                      className='block w-auto h-8 lg:hidden'
                      src='https://brisbanesnews.com.au/wp-content/uploads/2020/01/syd-150x150.png'
                      alt='sydneys news'
                    />
                    <img
                      className='hidden w-auto h-8 lg:block'
                      src='https://brisbanesnews.com.au/wp-content/uploads/2020/01/syd-150x150.png'
                      alt='sydneys news'
                    />
                  </a>
                </div>
                <div className='hidden space-x-8 sm:-my-px sm:ml-6 sm:flex'>
                  <a
                    href='/new'
                    className={classNames(
                      `cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 text-sm 
                        font-medium leading-5 transition duration-150 ease-in-out`,
                      router.pathname === '/new'
                        ? `border-orange-500  text-gray-900 focus:outline-none 
                          focus:border-orange-700`
                        : `border-transparent text-gray-500 hover:text-gray-700
                          hover:border-gray-300 focus:outline-none focus:text-gray-700
                         focus:border-gray-300`
                    )}
                    // onClick={() => router.push('/new')}
                  >
                    New
                    <span className='sm:hidden md:inline'>&nbsp;Stories</span>
                  </a>

                  <a
                    href='/ask'
                    className={classNames(
                      `cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 text-sm 
                        font-medium leading-5 transition duration-150 ease-in-out`,
                      router.pathname === '/ask'
                        ? `border-orange-500  text-gray-900 focus:outline-none 
                          focus:border-orange-700`
                        : `border-transparent text-gray-500 hover:text-gray-700
                          hover:border-gray-300 focus:outline-none focus:text-gray-700
                         focus:border-gray-300`
                    )}
                    // onClick={() => router.push('/ask')}
                  >
                    Ask
                    <span className='hidden md:inline'>&nbsp;Stories</span>
                  </a>

                  <a
                    href='/show'
                    className={classNames(
                      `cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 text-sm 
                        font-medium leading-5 transition duration-150 ease-in-out`,
                      router.pathname === '/show'
                        ? `border-orange-500  text-gray-900 focus:outline-none 
                          focus:border-orange-700`
                        : `border-transparent text-gray-500 hover:text-gray-700
                          hover:border-gray-300 focus:outline-none focus:text-gray-700
                         focus:border-gray-300`
                    )}
                    // onClick={() => router.push('/show')}
                  >
                    Show
                    <span className='hidden md:inline'>&nbsp;Stories</span>
                  </a>

                  <a
                    href='/jobs'
                    className={classNames(
                      `cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 text-sm 
                        font-medium leading-5 transition duration-150 ease-in-out`,
                      router.pathname === '/jobs'
                        ? `border-orange-500  text-gray-900 focus:outline-none 
                          focus:border-orange-700`
                        : `border-transparent text-gray-500 hover:text-gray-700
                          hover:border-gray-300 focus:outline-none focus:text-gray-700
                         focus:border-gray-300`
                    )}
                    // onClick={() => router.push('/jobs')}
                  >
                    Jobs
                    <span className='hidden md:inline'>&nbsp;Stories</span>
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end'>
                <div className='w-full max-w-lg lg:max-w-xs'>
                  <label htmlFor='search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <svg
                        className='w-5 h-5 text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <input
                      id='search'
                      className='block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:border-orange-300 focus:shadow-outline-orange sm:text-sm'
                      placeholder='Search'
                      type='search'
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='flex items-center -mr-2 sm:hidden'>
                <button
                  className='inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    className={classNames(
                      'h-6 w-6',
                      isOpen ? 'hidden' : 'block'
                    )}
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                  <svg
                    className={classNames(
                      'h-6 w-6',
                      isOpen ? 'block' : 'hidden'
                    )}
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            className={classNames(
              'relative z-10 bg-white sm:hidden',
              isOpen ? 'block' : 'hidden'
            )}
          >
            <div className='pt-2 pb-3 space-y-1'>
              <a
                href='/new'
                className={classNames(
                  `cursor-pointer block pl-3 pr-4 py-2 border-l-4 transition duration-150 ease-in-out`,
                  router.pathname === '/new'
                    ? `border-orange-500 text-base 
                    font-medium text-orange-700 bg-orange-50 focus:outline-none 
                    focus:text-orange-800 focus:bg-orange-100 
                    focus:border-orange-700 `
                    : `border-transparent text-base font-medium text-gray-600 
                      hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 
                      focus:outline-none focus:text-gray-800 focus:bg-gray-50 
                      focus:border-gray-300 `
                )}
                // onClick={() => router.push('/new')}
              >
                New Stories
              </a>

              <a
                href='/ask'
                className={classNames(
                  `cursor-pointer block pl-3 pr-4 py-2 border-l-4 transition duration-150 ease-in-out`,
                  router.pathname === '/ask'
                    ? `border-orange-500 text-base 
                    font-medium text-orange-700 bg-orange-50 focus:outline-none 
                    focus:text-orange-800 focus:bg-orange-100 
                    focus:border-orange-700 `
                    : `border-transparent text-base font-medium text-gray-600 
                      hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 
                      focus:outline-none focus:text-gray-800 focus:bg-gray-50 
                      focus:border-gray-300 `
                )}
                // onClick={() => router.push('/ask')}
              >
                Ask Stories
              </a>

              <a
                href='/show'
                className={classNames(
                  `cursor-pointer block pl-3 pr-4 py-2 border-l-4 transition duration-150 ease-in-out`,
                  router.pathname === '/show'
                    ? `border-orange-500 text-base 
                    font-medium text-orange-700 bg-orange-50 focus:outline-none 
                    focus:text-orange-800 focus:bg-orange-100 
                    focus:border-orange-700 `
                    : `border-transparent text-base font-medium text-gray-600 
                      hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 
                      focus:outline-none focus:text-gray-800 focus:bg-gray-50 
                      focus:border-gray-300 `
                )}
                // onClick={() => router.push('/show')}
              >
                Show Stories
              </a>

              <a
                href='/jobs'
                className={classNames(
                  `cursor-pointer block pl-3 pr-4 py-2 border-l-4 transition duration-150 ease-in-out`,
                  router.pathname === '/jobs'
                    ? `border-orange-500 text-base 
                    font-medium text-orange-700 bg-orange-50 focus:outline-none 
                    focus:text-orange-800 focus:bg-orange-100 
                    focus:border-orange-700 `
                    : `border-transparent text-base font-medium text-gray-600 
                      hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 
                      focus:outline-none focus:text-gray-800 focus:bg-gray-50 
                      focus:border-gray-300 `
                )}
                // onClick={() => router.push('/jobs')}
              >
                Jobs Stories
              </a>
            </div>
          </div>
        </nav>
        <div className='py-10'>
          <header>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <h1 className='text-3xl font-bold leading-tight text-gray-900'>
                {toTitleCase(path || 'Top')} Stories
              </h1>
            </div>
          </header>
          <main>
            <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='px-4 pb-8 sm:px-0'>
                <div className='rounded-lg h-96'>{children}</div>
              </div>
            </div>
          </main>
        </div>
        {selectedStoryId !== 0 && isPanelOpen && <Panel />}
      </div>

      <footer className='fixed bottom-0 z-10 w-screen bg-white border-t'>
        <div className='max-w-screen-xl px-4 py-4 mx-auto sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='flex justify-center space-x-6 md:order-2'>
      <a
              href='https://www1.com.au'
              className='relative text-gray-400 hover:text-gray-500'
              target='_blank'
              style={{ bottom: '0.19rem' }}
            >
  
            <a
              href='https://www1.com.au'
              className='text-gray-400 hover:text-gray-500'
              target='_blank'
            >
      
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                />
              </svg>
            </a>
  
            <a
              href='https://twitter.com/simondodson'
              className='text-gray-400 hover:text-gray-500'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <span className='sr-only'>Twitter</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
              </svg>
            </a>
        
        
          </div>
          <div className='mt-2 md:mt-0 md:order-1'>
            <p className='text-base leading-6 prose text-center text-gray-400'>
              &copy; 2020 Made with 🧡 by{'sydneysnews'}
              <a href='http://goodpizza.com.au'> goodpizza.com.au</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
