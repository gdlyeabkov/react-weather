import React from "react";
import Info from "./components/info";
import Weather from "./components/Weather";
import Form from "./components/form";
const API_KEY="8ced8d3f02f94ff154bc4ddb60fa72a9";
class App extends React.Component{
 state={
	temp: undefined, 
	city: undefined,
	country: undefined,
	sunrise: undefined,
	sunset: undefined,
	error: undefined
}
gettingWeather= async (e)=>{
	e.preventDefault();
	const city= e.target.elements.city.value;
	if(city){
	const api_url= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
	const data= await api_url.json();
	const sunset= data.sys.sunset;
	const date=new Date();
	date.setTime(sunset);
	const sunset_date=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	this.setState({
		temp:data.main.temp,
		city: data.name,
	country: data.sys.country,
	pressure:data.main.pressure,
	sunset: sunset_date,
	error: undefined
	});
	}else{
		this.setState({
		temp:undefined,
		city: undefined,
	country: undefined,
	pressure:undefined,
	sunset:undefined,
	error: "введите название города"
	});
	}
}

render(){
	return(
<div>
<Info/>
<Form weatherMethod={this.gettingWeather}/>
<Weather
temp={this.state.temp}
city={this.state.city}
sunset={this.state.sunset}
pressure={this.state.pressure}
country={this.state.country}
error={this.state.error}
/>
</div>
		);
		}
}
export default App;