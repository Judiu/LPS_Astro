export const Barra = () => {
    return (
        <nav
            class="sticky top-0 z-10 block w-full max-h-20 max-w-full px-4 py-2 text-white bg-black border rounded-none shadow-md h-max border-white/0 bg-opacity-60 backdrop-blur-xl backdrop-saturate-200 lg:px-8 lg:py-1">
            <div class="flex items-center justify-around text-blue-gray-900">
                <a href="#"
                    class="mr-4 block cursor-pointer py-1.5 font-sans text-2xl font-medium leading-relaxed text-inherit antialiased">
                    LPS Ingenieria Estructural
                </a>
                <div class="flex items-center gap-4 px-0 py-6">
                    <div class="hidden mr-4 lg:block ">
                        <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
                            <li>
                                <a href="#"
                                    class="group relative rounded px-12 py-3 text-lg font-medium text-white hover:text-red-600 focus:outline-none focus:ring active:bg-red-600 active:text-white">
                                    <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-red-600 transition-all duration-200 group-hover:w-full"></span>
                                    <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-red-600 transition-all duration-200 group-hover:h-full"></span>
                                    <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-red-600 transition-all duration-200 group-hover:w-full"></span>
                                    <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-red-600 transition-all duration-200 group-hover:h-full"></span>
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="group relative rounded px-12 py-3 text-lg font-medium text-white hover:text-red-500 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                                    <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-red-500 transition-all duration-200 group-hover:w-full"></span>
                                    <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-red-500 transition-all duration-200 group-hover:h-full"></span>
                                    <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-red-500 transition-all duration-200 group-hover:w-full"></span>
                                    <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-red-500 transition-all duration-200 group-hover:h-full"></span>
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="group relative rounded px-12 py-3 text-lg font-medium text-white hover:text-red-500 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                                    <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-red-500 transition-all duration-200 group-hover:w-full"></span>
                                    <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-red-500 transition-all duration-200 group-hover:h-full"></span>
                                    <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-red-500 transition-all duration-200 group-hover:w-full"></span>
                                    <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-red-500 transition-all duration-200 group-hover:h-full"></span>
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="group relative rounded px-12 py-3 text-lg font-medium text-white hover:text-red-500 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                                    <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-red-500 transition-all duration-200 group-hover:w-full"></span>
                                    <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-red-500 transition-all duration-200 group-hover:h-full"></span>
                                    <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-red-500 transition-all duration-200 group-hover:w-full"></span>
                                    <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-red-500 transition-all duration-200 group-hover:h-full"></span>
                                    Contactanos
                                </a>
                            </li>
                        </ul>
                    </div>                    
                </div>
            </div>
        </nav>
    )
};
