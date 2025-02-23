import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { paymentOnline } from '../API/payment'
import { useFormik } from 'formik'

export default function Payment({ cartId }) {

  let { mutate, data } = useMutation({ mutationFn: paymentOnline })

  function handlePayment(values) {
    const shippingAddress = {
      details: values.details,
      city: values.city,
      phone: values.phone
    }

    mutate({ cartId, shippingAddress })
  }

  if (data?.data?.status === 'success') {
    window.location.href = data?.data?.session?.url;
  }
  let formik = useFormik({
    initialValues: {
      details: '',
      city: '',
      phone: ''
    },
    onSubmit: handlePayment
  })

  return (
    <div>
      <h2 className='my-4 text-2xl font-bold'>Payment</h2>

      <form onSubmit={formik.handleSubmit}>
        <input type="text" name="details" value={formik.values.details} onChange={formik.handleChange} id='details' />
        <br />
        <input type="text" name="city" value={formik.values.city} onChange={formik.handleChange} id='city' />
        <br />
        <input type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange} id='phone' />
        <br />
        <button type="submit" className='p-4 bg-green-700'>Submit</button>
      </form>

    </div>
  )
}
