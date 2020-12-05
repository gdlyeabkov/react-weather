import React from "react";
const Form= props =>
(<form onSubmit={props.weatherMethod}>
<input name="city" placeholder="город"/>
<button>получить погоду</button>
</form>
		);

export default Form;