import React from 'react';
import { IoIosHome } from 'react-icons/io';
import { FaRegCompass } from 'react-icons/fa';
const BottomNavbar = () => {
  return (
    <>
      {/* component */}
      <div>
        <section className="   py-3.5 fixed inset-x-0 bottom-0 z-10 px-3 bg-white shadow-base">
          <div id="tabs" className=" grid grid-cols-3">
            <a
              href="#"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-flex text-center pt-2 pb-1"
            >
              <IoIosHome className="text-[#6600CC]" size={24} />
            </a>
            <a
              href="#"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-flex text-center pt-2 pb-1"
            >
              <FaRegCompass className=" text-[#434342]" size={24} />
            </a>
            <a
              href="#"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-flex text-center pt-2 pb-1"
            >
              <svg
                width={26}
                height={25}
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="0.791992"
                  y="0.213257"
                  width="24.576"
                  height="24.576"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_329_314"
                      transform="scale(0.0104167)"
                    />
                  </pattern>
                  <image
                    id="image0_329_314"
                    width={96}
                    height={96}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFgUlEQVR4nO2dS4gdRRSGS0VRjK8xvjcufSxn4TiO1O3/r9tzBWM2ji58IJI4PkIQXZvxsQwoRpMo4lpd+gQRMYgiboxiTBR8g4oaTZjMGM0oLYepYAhzb7fdfbuq75wPDgyBnjl1TvepOlWnToxRFEVRFEVRFEVRFEVRlBIAuITkvSTfALAPwAKARQDfAXiV5APW2gvVuDUjRiW5k+QSyWyQAPiL5HO9Xu+8uvVYlQC4DsDBPMOv4Ij9zrnp0Pq3GgCzAP7+v8Y/RpaSJLkt9Dja/OZXMX7m5QhJF3o8rYv5ZcLOgHD0o7X27NDjag1+ws1qlidCj6tNS83c1U6Jr2AhTdOx0OOLHr/OzzPmpwDWWWvXiMjPJPcM4avJhiBHAPxC8kOSzzjnbup2u6ebWCD5ep7xJycnzzj+Ofm3FjkhO04OAdjW7XbPN6EB8EWOstf3ezZJkhsiMGZWQeZJPjQzM3OKCYVXoq+SEnL6Pdvr9c6MwIhZDfJusEw+zwErhZ8RdEAG4Gvn3OUhHPB5jmLrBjy7PrThWLMTrLVro5qEZaJd6Svwb/9noY3G+p2wa3x8/OSolqHiBJlwxRF+9bN+FI3P/5zwaOsTMZKHYkjEZM0vsR3AJgC7CzrgT2vtpY0pCWDHEN6ix01kzM3NnQhgA8nDBfTf0ZhiAC4geaBG4//gnDvLRIpzbqqAE+YbzZjlMKWu7WjnHE3kOOc2FniRbmxUKZJ3VT2QIXmLaQESjkh+nDOenY0rJl9CmXAkR5IAuqZFkNycM6YPgigmcwKA7f50K3fFAODZxhOYGgBwRc7YfjYhmZ6evgjA3QBeA7DX7yIukvyW5MsA7o9iR7EkPqcZ+HKV/d1KAYrsZRX5PcqQQpA6YMhICFUHhF2GfqIOCITkPDkT8OKgsxClAgCuLbAV8UKVv6H034ybLbgZ16qkMlqstWuSJLnSZ725Md8bf5eJcSAkb5asV2psfK1NbqbMlgmAfzqdzlUmFiTTJfmUZMGhjcNm5BETA1IrA2DLKjJ8RvJNmSdiWKKdC+CdCAySNSUy3kE1UI0h56ckv1llxn/RWntqFG8+yS9XkeEPSkJmYkBqYVZR2PmV5MPywplY8BPuKL7lCwC+AvAeya1JkqRRhJsVqiLmCw7oI6mxkbkiqjr7NuPX+XnGl/T9TmPMCaH1HSl8hpu31v+j0+lcE1rXkUS2Fwq8/fLmK8PA7+0MjPlRZIejir+8NsgB94XWcaTxa+K+DkjT9LLQOo40vttJXwdEsT8yyuRNwG12gF1uwfCg9DYC8L3vdSSJ2T7pgeScu8c5d3HUDghyca0icuMRwPN5X7eXJbkLIMmoCUGBzHeTaREkewB+K7FtcSBIv6MCDtjdlmUogDuqlNf7Z5vdHZXaF19wO0ixDSZy3HJZfeW7buKExr8EOZDIUeywXOsxkZKm6RjJn6oa/9hw1OicIHGzgFLihI0xhiMA22o0/tEvYXujg5B+CQWVk2s9m6XWJobt6DRNx2RpWbcDpORG7kc0NhCSV0tNzBAGkoWWsv2O5HKKaRIAj42i8SdL9juSBK5RB8zMzJwE4K3QRmO9UrrfkWTMJtABzdsRGC6rQyr2O5o3IZBDawAvhTYea5CK/Y7COOAoAG6ts4UBA0iVfkdBQlCfMsUtvho6a6HsKdvvqPFJeBATExOn+XR/K8n3fa3NQluckJTod9T4MrSNpKOSiLUZAE8OwQFPhx5Xa5iamjqn5s2439vcgiEIUvNZ05UpOSHTC3plIHl7xTOBpTacfUSNW+78tb9M2JGvKLT+I4G1dq38x0LSbqbIakcmXI35w2s8JQ05XpEeR/7oVXoe7fU9kGZ1qakoiqIoiqIoiqIoiqKYkvwLn18Z6BKvfbQAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default BottomNavbar;
