import React, { useState } from 'react'
import { Formik, Form, Field, useFormikContext } from 'formik';
/* import * as Yup from "yup"; */
import './deliveryAdress.scss'
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

//если нужна сложная валидация
/* let Schema = Yup.object().shape({
  street: Yup.string().min(1,'asd')
    ,
   house: Yup.string()
   .required('Нужно заполнить для оформления доставки   дом'),

}); */


interface Values {
  street: string;
  house: string;
}
const AutoSubmitToken = () => {
  // Grab values and submitForm from context
  const { values, submitForm } =useFormikContext<Values>();
const needSubmitDelivery= useTypedSelector((state)=>state.needSubmitDelivery)
const{needSubmitAction}=useActions()
  React.useEffect(() => {
    if (values.street.length > 1&&values.house.length > 1) {
      needSubmitAction(true)
    }
    needSubmitDelivery&&submitForm();
    //@ts-ignore
  }, [values, submitForm,needSubmitDelivery]);
  return null;
};

export default function DeliveryAdress() {

  const{addAddress}=useActions()
   const [streetActive, setStreetActive] = useState(false)
   const [houseActive, setHouseActive] = useState(false)

   let activeStreetToolTip=  streetActive?'delivery-tooltip-active':''
   let activeHouseToolTip=  houseActive?'delivery-tooltip-active':''

return (

    <div>
  
    <Formik
 /*      validationSchema={Schema} */
      initialValues={{
         street: '',
         house: '',
     }}
      validate={values => {
        const errors:any = {
         
          };
        if (values.house.length < 1) {
          setHouseActive(true)
          errors.house = 'Нужно заполнить для оформления доставки';
        }
      if (values.street.length < 1) {
          setStreetActive(true)
          errors.street = 'Нужно заполнить для оформления доставки';
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        addAddress(`Улица-${values.house}, дом-${values.street}`)
     
      }}
    >
      {({ errors, touched }) => (
      <Form className="flex delivery-form">
        <div className='delivery-form-items column'>
          <div className="">
          <label>Улица</label>
          <Field placeholder="Остоженка" className='field' name="street" type="text" />
          </div>
          {errors.street && touched.street ?
           (<div className={`delivery-tooltip ${activeStreetToolTip}`}>{errors.street}</div> ):null
            }
        </div>
        <div className='delivery-form-items column  '>
          <div >
          <label>Дом</label>
            <Field placeholder="Остоженка" className='field' name="house" type="text" />
          </div>
          {errors.house && touched.house ?
           (<div className={`delivery-tooltip ${activeHouseToolTip}`}>{errors.house}</div> )
            : null}
        </div>
        <AutoSubmitToken />
      </Form>)}
    </Formik>
  
  </div>
  )
}