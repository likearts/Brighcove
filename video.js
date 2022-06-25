import { useEffect, useState, useCallback } from 'react';
import Helmet from 'react-helmet';

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
            
            /*
            <script defer src="https://players.brightcove.net/${account}/default_default/index.min.js"></script>
            const
                src = `https://players.brightcove.net/${account}/default_default/index.min.js`,
                s = document.createElement( 'script' );
            s.setAttribute( 'src', src );
            document.body.appendChild( s );
            */
        }

        return ()=>{
            
        }
    },[account,videoId]);

    const handleScriptInject=useCallback((tag)=>{
        console.log('tag',tag);
    },[]);

    return (
        <>
            { html && ( 
                <>
                    <div dangerouslySetInnerHTML={ {__html: html} }></div> 
                    <Helmet
                        script={[{ src: `https://players.brightcove.net/${account}/default_default/index.min.js` }]}
                        // Helmet doesn't support `onload` in script objects so we have to hack in our own
                        onChangeClientState={(newState, addedTags) => handleScriptInject(addedTags)}
                        />
                </>
            ) }
{/*             
            <iframe src={`https://players.brightcove.net/${account}/default_default/index.html?videoId=${videoId}&autoPlay`}
                allowfullscreen=""
                allow="encrypted-media"
                autoplay="true"
                width="640" 
                height="360">
            </iframe> */}

        </>
    )
}
