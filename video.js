import { useEffect, useState } from 'react';

export default function VideoComponent( { account, videoId } ){
    const [ html, setHtml ] = useState('');

    useEffect( ()=>{
        if( account && videoId ) { 
            setHtml(
                `
                <video-js 
                    data-account="${account}" 
                    data-player="default" 
                    data-embed="default" 
                    controls="" 
                    data-video-id="${videoId}" 
                    data-playlist-id="" 
                    data-application-id="" 
                    autoplay="true"
                    width="640" 
                    height="360">
                </video-js>
                `
            );

            const
                src = `https://players.brightcove.net/${account}/default_default/index.min.js`,
                s = document.createElement( 'script' );
            s.setAttribute( 'src', src );
            document.body.appendChild( s );
        }

        return ()=>{
            
        }
    },[account,videoId]);

    return (
        <>
            { html && ( <div dangerouslySetInnerHTML={ {__html: html} }></div> ) }
            <iframe src="https://players.brightcove.net/1432358930001/default_default/index.html?videoId=6269609549001&autoPlay"
                allowfullscreen=""
                allow="encrypted-media"
                autoplay="true"
                width="640" 
                height="360">
            </iframe>
        </>
    )
}
