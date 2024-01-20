export const Portada = () =>{
    return(
        
<div className="w-full relative">
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
    <video className="absolute -bottom-48 blur-3xl -z-40" src="/video.mp4" autoPlay loop muted></video>
</div>
    )
}