import { useMemo, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import get from 'lodash/get'

const Home = () => {
  const [toursData, setTourData] = useState([])
  console.log(toursData)
  const getAllTours = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://127.0.0.1:3002/api/v1/tours',
      })

      const toursData = get(res, 'data.data.data') || []
      setTourData(toursData)
    } catch (err) {
      toast.error(err.message)
    }
  }

  useMemo(() => {
    getAllTours()
  }, [])
  return <div>home</div>
}

export default Home
