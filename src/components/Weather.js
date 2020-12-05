import React from "react";
const Weather= props =>(
<div>
{props.city &&
	<div>
<p>местоположение: {props.city}, {props.country}</p>
<p>температура: {props.temp}</p>
<p>давление: {props.pressure}</p>
<p>заход солнца: {props.sunset}</p>
</div>}
<p>ошибка {props.error}</p>
</div>
		);

export default Weather;