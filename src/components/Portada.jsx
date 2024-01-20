export const Portada = () =>{
    return(
        
<div className="w-full relative bg-white">
    <img
        className="absolute top-10 w-[1000px] left-0 right-0 m-auto"
        alt="Logo LPS Ingenieria Estructural"
        src="logo.png"
    />
    <video 
        className="w-full h-screen object-cover object-top" 
        src="/video.mp4" 
        autoPlay 
        loop 
        muted
    ></video>
    
</div>
    )
}