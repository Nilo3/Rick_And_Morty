import { useState } from "react";
import validation from "../Validation/Validation";
import style from "../Form/Form.module.css"

const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }


    return(
        <div className={style.loginbox}>
        <div className={style.box}>
        <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor="email"  >Email:</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} className={style.input}  />
        {errors.email && <p className={style.error}>{errors.email}</p>}
       
        <label className={style.label} htmlFor="password">Password:</label>
        <input type="text" name="password" value={userData.password} onChange={handleChange} className={style.input} />
        {errors.password && <p className={style.error}>{errors.password}</p>}
        <div className="image">
            
        </div>
      
        <button className={style.button}>Log In</button>
      </form>
      </div>
      </div>
    )
}


export default Form;