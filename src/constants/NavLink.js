import react from 'react'
import {
  FaPager,
  FaLaptopCode,
  FaLink,
  FaWordpress,
  FaReact,
  FaHtml5,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTiktok,
  FaGoogle,
  FaPhotoVideo,
  FaEdit,
} from 'react-icons/fa'

const subLinks = [
  {
    name: 'SEO',
    submenu: true,
    sublinks: [
      {
        Head: 'SEO',
        sublink: [
          { name: 'Technical', link: '/technical-seo', icon: <FaLaptopCode /> },
          { name: 'On Page', link: '/on-page-seo', icon: <FaPager /> },
          { name: 'Off Page', link: '/off-page-seo', icon: <FaLink /> },
        ],
      },
    ],
  },
  {
    name: 'Content',
    submenu: true,
    sublinks: [
      {
        Head: 'Content',
        sublink: [
          {
            name: 'Content Marketing',
            link: '/content-marketing',
            icon: <FaEdit />,
          },
          {
            name: 'Video Marketing',
            link: '/video-marketing',
            icon: <FaPhotoVideo />,
          },
        ],
      },
    ],
  },
  {
    name: 'Digital Ads',
    submenu: true,
    sublinks: [
      {
        Head: 'Digital Ads',
        sublink: [
          {
            name: 'Facebook',
            link: '/facebook-ads',
            icon: <FaFacebookSquare />,
          },
          {
            name: 'Instagram',
            link: '/instagram-ads',
            icon: <FaInstagramSquare />,
          },
          { name: 'TikTok', link: '/tiktok-ads', icon: <FaTiktok /> },
          { name: 'Google', link: '/google-ads', icon: <FaGoogle /> },
        ],
      },
    ],
  },
  {
    name: 'Website',
    submenu: true,
    sublinks: [
      {
        Head: 'Website',
        sublink: [
          { name: 'Wordpress', link: '/wordpress', icon: <FaWordpress /> },
          { name: 'Frameworks', link: '/frameworks', icon: <FaReact /> },
          { name: 'HTML & CSS', link: '/html-css', icon: <FaHtml5 /> },
        ],
      },
    ],
  },
]

export default subLinks
