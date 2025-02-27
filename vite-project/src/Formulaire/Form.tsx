import PhoneInput, { getCountries, getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Image from "./Image/IMG-20250222-WA0001.jpg";
import { useState } from "react";
import { E164Number } from "libphonenumber-js";
export default function Form() {
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>(
    undefined
  );
  const getCountryAbbreviation = (country: string) => {
    const countryNames: { [key: string] : string} = {
      'US': 'USA',
      'CA': 'CAN',
      'GB': 'GBR',
      'CF': 'CAR',
    };
    return countryNames[country] || country;
  };
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center p-6 relative">
      
      <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-1/2 flex-shrink-0 relative">
          <img src={Image} alt="Brand" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 top-0 left-0 p-6 bg-auto bg-opacity-50 w-full">
            <div className="flex space-x-4 text-white">
              <span className="font-bold">United UI</span>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
              <a href="#" className="hover:text-blue-500">
                Work
              </a>
              <a href="#" className="hover:text-blue-500">
                Blog
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-6 flex flex-col bg-gray-50 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">
            Let's level up your brand, together
          </h2>
          <form className="flex-grow">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your name :
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name : "
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email :
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="you@company.com"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone number :
              </label>
              <PhoneInput
                international
                defaultCountry="US"
                value={phoneNumber}
                onChange={setPhoneNumber}
                placeholder="Entre phone number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-300"
                countrySelectProps={{unicodeFlages: true}}
                inputComponent={({...rest}) =>(
                  <input {...rest} className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />

                )}
                countrySelectComponent={({value, onchange, ...rest}) =>(
                  <select {...rest} value={value} onChange={onchange} className="py-2 px-3 text-gray-700 border-r border-gray-300 focus:outline-none">
                    <option value="">🌎</option>
                    {getCountries().map((country) => (
                      <option key={country} value={country}>
                        {getCountryAbbreviation(country)} + {getCountryCallingCode(country)}
                      </option>
                    ))}
                  </select>

                )}
              ></PhoneInput>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                How can we help ?
              </label>
              <textarea
                className="shadow appearance-none border rounder w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadox-outline-none"
                name=""
                id="project" placeholder="Tell us a little about this project."
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Services :
              </label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Website design</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Ux design</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">User research</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Content creation</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Strategy et consulting</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Other</span>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
