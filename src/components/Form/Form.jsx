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
        <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="email"  >Email:</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} className={style.input} />
        {errors.email && <p className={style.error}>{errors.email}</p>}
        <hr />
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" value={userData.password} onChange={handleChange} className={style.input} />
        {errors.password && <p className={style.error}>{errors.password}</p>}
      
        <button className={style.button}>Submit</button>
      </form>
    )
}

export default Form;