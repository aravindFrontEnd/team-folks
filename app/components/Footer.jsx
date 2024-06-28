
export default function Footer() {
  return (
    <>
    <div className="py-3 bg-gradient-to-r  from-lime-200 via-lime-500 to-lime-950 ">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
            <div className="xl:flex xl:items-center xl:justify-start">
                <img className="w-auto mx-auto h-12" src="./aravindG.png" alt="aravind Ganesh" />

                <p className="mt-5 text-lg text-slate xl:ml-6 xl:mt-0">© Copyright 2024 preevind</p>
            </div>

            <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
                <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

                <ul className="flex items-center justify-center space-x-8 xl:justify-end">
                    <li>
                        <a href="https://www.linkedin.com/in/aravind-g-frontend/" title="LinkedIN" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
                        </a>
                    </li>

                    <li>
                        <a href="mailto:aravinduni5@gmail.com" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
</svg>
                        </a>
                    </li>

                    <li>
                        <a href="https://aravind-g-portfolio.netlify.app/" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
             <img src='./portfolio.png' alt='portfolio'/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</>
  );
}