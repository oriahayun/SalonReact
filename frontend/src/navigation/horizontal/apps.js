// ** Icons Import
import {
  Box,
  User,
  Circle,
  Shield,
  ShoppingCart
} from 'react-feather'

export default [
  {
    id: 'apps',
    title: 'Apps',
    icon: <Box />,
    children: [
      {
        id: 'eCommerce',
        title: 'eCommerce',
        icon: <ShoppingCart />,
        children: [
          {
            id: 'shop',
            title: 'Shop',
            icon: <Circle />,
            navLink: '/apps/ecommerce/shop'
          },
          {
            id: 'detail',
            title: 'Details',
            icon: <Circle />,
            navLink: '/apps/ecommerce/product-detail'
          },
          {
            id: 'wishList',
            title: 'Wish List',
            icon: <Circle />,
            navLink: '/apps/ecommerce/wishlist'
          },
          {
            id: 'checkout',
            title: 'Checkout',
            icon: <Circle />,
            navLink: '/apps/ecommerce/checkout'
          }
        ]
      },
      {
        id: 'users',
        title: 'User',
        icon: <User />,
        children: [
          {
            id: 'list',
            title: 'List',
            icon: <Circle />,
            navLink: '/apps/user/list'
          },
          {
            id: 'view',
            title: 'View',
            icon: <Circle />,
            navLink: '/apps/user/view'
          }
        ]
      }
    ]
  }
]
