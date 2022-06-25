import { useCallback, useEffect, useState } from 'react';
import './App.css';
import VideoComponent from './components/video';

function App() {
	const [ play, setPlay ] = useState(false);
	/*
	useEffect( ()=>{
		(async()=>{
			//https://edge.api.brightcove.com/playback/v1/accounts/1432358930001/videos/6197188739001
			const res = await fetch('https://edge.api.brightcove.com/playback/v1/accounts/1432358930001/videos/6269609481001', {
				method: 'GET', // *GET, POST, PUT, DELETE, etc.
				mode: 'cors', // no-cors, *cors, same-origin
				cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
				credentials: 'same-origin', // include, *same-origin, omit
				headers: {
					'Content-Type': 'application/json',
					'accept': 'application/json;pk=BCpkADawqM0pWGkxINX_rxhvFJl64rVGMB4td8e-t5CbeohCL5DIDVPjDdHvB-zwiC9yrUsXdj7bdL6_58d0AbSVCbptavZ1xVKDEbxPLXAw3M8hdajCXIKTnaEFlJ3u5T1Y0P6v7Lt9oVOf',
					'origin': 'https://lg.com',
					'referer': 'https://lg.com',
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				redirect: 'follow', // manual, *follow, error
				referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, 
			});
			console.log( 'result', res.json() );
		})();
	},[]);
	*/

	const trigger=useCallback(()=>{
		setPlay( !play );
	},[setPlay]);

  return (
    <div className="App">
		<button onClick={trigger}>Play</button>
		{ 
		 play && (
			<VideoComponent 
			account={'1432358930001'} 
			videoId={'6197188739001'}/>
		 )}
		
    </div>
  );
}

export default App;
