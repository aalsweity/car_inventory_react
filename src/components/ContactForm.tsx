
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseCarBrand, chooseCarModel, chooseCarTransmission, chooseCarYear } from "../redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[];
  onClose: () => void;
}

const ContactForm = ( props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    event.preventDefault()
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseCarBrand(data.car_brand));
      dispatch(chooseCarModel(data.car_model));
      dispatch(chooseCarTransmission(data.car_transmission));
      dispatch(chooseCarYear(data.car_year));
      //dispatch(chooseCarCondition(data.car_condition));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="car_brand">Car Brand</label>
          <Input {...register('car_brand')} name='car_brand' placeholder="Car Brand" />
        </div>
        <div>
          <label htmlFor="car_model">Car Model</label>
          <Input {...register('car_model')} name='car_model' placeholder="Car Model" />
        </div>
        <div>
          <label htmlFor="car_transmission">Car Transmission</label>
          <Input {...register('car_transmission')} name='car_transmission' placeholder="Car Transmission" />
        </div>
        <div>
          <label htmlFor="car_year">Car Year</label>
          <Input {...register('car_year')} name='car_year' placeholder="Car Year" />
        </div>
        {/* <div>
          <label htmlFor="car_condition">Car Condition</label>
          <Input {...register('car_condition')} name='car_condition' placeholder="Car Condition" />
        </div> */}
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm