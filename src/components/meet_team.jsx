import React from "react";
import { useState } from "react"

export const Meet_team = () => {
    return (
        <div class="flex items-center justify-center min-h-screen backdrop-blur-sm ">
            <div class="flex flex-col">
                <div class="flex flex-col">
                    <div class="container max-w-7xl px-4">
                        <div class="flex flex-wrap justify-center text-center mb-24">
                            <div class="w-full lg:w-6/12 px-4">
                                <h1 class="text-black text-4xl font-bold mb-8">
                                    Bienvenido a LPS Ingenieria
                                </h1>
                                <p class="text-black text-lg font-light">
                                Somos una empresa ubicada en la ciudad de mosquera que presta sus servicios de Ingenieria Civil, arquitectura, patologias y reconocimientos estructurales, ensayos no destructivos, licencias de construccion, ferroscan, ensayos destructivos. 
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-wrap text-white bg-black py-4 rounded-2xl">
                            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                <div class="flex flex-col">
                                    <a href="#" class="mx-auto">
                                        <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                            src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"/>
                                    </a>
                                    <div class="text-center mt-6">
                                        <h1 class="text-xl font-bold mb-1">
                                            Tranter Jaskulski
                                        </h1>
                                        <div class="font-light mb-2">
                                            Founder & Specialist
                                        </div>
                                        <div class="flex items-center justify-center hover:opacity-100
                                transition-opacity duration-300">
                                            <a href="#" class="bg-white flex rounded-full hover:bg-red-500 h-10 w-10">
                                                <i class="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                            </a>
                                            <a href="#" class="bg-white flex rounded-full hover:bg-black h-10 w-10">
                                                <i class="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                                            </a>
                                            <a href="#" class="bg-white flex rounded-full hover:bg-orange-500 h-10 w-10">
                                                <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                <div class="flex flex-col">
                                    <a href="#" class="mx-auto">
                                        <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                            src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80"/>
                                    </a>
                                    <div class="text-center mt-6">
                                        <h1 class="text-xl font-bold mb-1">
                                            Denice Jagna
                                        </h1>
                                        <div class="font-light mb-2">
                                            Tired & M. Specialist
                                        </div>
                                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                            <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                            </a>
                                            <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                                <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                            </a>
                                            <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                                <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                <div class="flex flex-col">
                                    <a href="#" class="mx-auto">
                                        <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                            src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"/>
                                    </a>
                                    <div class="text-center mt-6">
                                        <h1 class="text-xl font-bold mb-1">
                                            Kenji Milton
                                        </h1>
                                        <div class="font-light mb-2">
                                            Team Memeber
                                        </div>
                                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                            <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                            </a>
                                            <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                                <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                            </a>
                                            <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                                <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                <div class="flex flex-col">
                                    <a href="#" class="mx-auto">
                                        <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                            src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"/>
                                    </a>
                                    <div class="text-center mt-6">
                                        <h1 class="text-xl font-bold mb-1">
                                            Doesn't matter
                                        </h1>
                                        <div class="font-light mb-2">
                                            Will be fired
                                        </div>
                                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                            <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                            </a>
                                            <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                                <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                            </a>
                                            <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                                <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}