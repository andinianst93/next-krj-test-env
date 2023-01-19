 <div className='cursor-pointer'>
        {MainContent.map((c, index) => {
          const { image, title, desc, category, authorImg, authorName } = c
          return (
            <div>
              <div className='"relative overflow-hidden transition-all bg-gray-100 rounded-md  hover:scale-105"'>
                <Link href='#'>
                  <img src={image} alt={title} className='max-w-xl' />
                </Link>
              </div>
              <div className='flex gap-3'>
                <Link href='#'>
                  <span className='inline-block mt-5 text-xs font-medium uppercase'>
                    {category}
                  </span>
                </Link>
              </div>
              <h2 className='mt-2 text-lg font-semibold'>
                <Link href='#'>
                  <span>{title}</span>
                </Link>
              </h2>
              <div className='hidden'>
                <p className='mt-2 text-sm text-gray-500 line-clamp-3'>
                  <Link href='#'> {desc}</Link>
                </p>
              </div>

              <div className='flex items-center mt-3 space-x-3 text-gray-500'>
                <div className='flex items-center gap-3'>
                  <div className='relative flex-shrink-0 w-5 h-5'>
                    <img
                      src={authorImg}
                      alt={authorName}
                      className='object-cover w-[30px] rounded-full'
                    />
                  </div>
                  <span className='text-sm'>{authorName}</span>
                </div>
                <span className='text-xs text-gray-300 dark:text-gray-600'>
                  &bull;
                </span>
                <p className='text-sm'>24 January 2022</p>
              </div>
            </div>
          )
        })}
      </div>

<div className='mx-auto max-w-screen-md text-center mb-8 md:mb-12'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-slate-900'>
            Recent Post
          </h2>
          <p className='mb-5 font-light text-slate-500 sm:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eius incidunt aliquam animi in iure?
          </p>
        </div>

 <div className='mx-auto'>
                  <button
                    type='button'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0'
                  >
                    Free Download
                  </button>
                </div>
