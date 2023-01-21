 <li className='p-4 relative'>
      <button className='relative w-[100%] py-[10px] px-[20px] text-white text-lg rounded md:bg-transparent md:p-0 md:flex md:items-center md:justify-between '>
        {page} <FaAngleDown className='pl-2' />
      </button>
      <div className='absolute w-max text-sm rounded-lg shadow-md border-gray-700  bg-gray-700'>
        <div className='p-4 pb-0 md:pb-4 text-white'>
          <ul className='space-y-4'>
            <li className='flex flex-col'>
              {links.map((item, index) => {
                const { url, label } = item
                if (item.page === page) {
                  return (
                    <Link href={url} key={index} className='capitalize py-2'>
                      {label}
                    </Link>
                  )
                }
              })}
            </li>
          </ul>
        </div>
      </div>
    </li>

 <li className='p-4 relative'>
      <button className='relative w-[100%] py-[10px] px-[20px] text-white text-lg rounded md:bg-transparent md:p-0 md:flex md:items-center md:justify-between '>
        <FaAngleDown className='pl-2' />
      </button>
      <div className='absolute w-max text-sm rounded-lg shadow-md border-gray-700  bg-gray-700 invisible group-hover:md:visible hover:md:visible'>
        <div className='p-4 pb-0 md:pb-4 text-white'>
          <ul className='space-y-4'>
            <li className='flex flex-col'></li>
          </ul>
        </div>
      </div>
    </li>
