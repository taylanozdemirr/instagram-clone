import userEvent from "@testing-library/user-event";
import { useEffect, useRef, useState } from "react";
import Input from "components/Input";
import { FaFacebook } from "react-icons/fa";

function App() {
	const ref = useRef();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const enable = username && password;

	useEffect(() => {
		let images = ref.current.querySelectorAll("img"),
			total = images.length,
			current = 0;
		const imageSlider = () => {
			if (current > 0) {
				images[current - 1].classList.add("opacity-0");
			} else {
				images[total - 1].classList.add("opacity-0");
			}
			images[current].classList.remove("opacity-0");
			if (current === total - 1) {
				current = 0;
			} else {
				current += 1;
			}
		};
		imageSlider();
		let interval = setInterval(imageSlider, 3000);
		return () => {
			clearInterval(interval);
		};
	}, [ref]);

	return (
		<div className="h-full w-full flex items-center gap-x-8 justify-center">
			<div className="w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
				<div
					className="w-[250px] h-[538px] absolute top-[27px] left-[113px]"
					ref={ref}
				>
					<img
						className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
						src="../img/screenshot1-2x.png"
						alt=""
					/>
					<img
						className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
						src="../img/screenshot2-2x.png"
						alt=""
					/>
					<img
						className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
						src="../img/screenshot3-2x.png"
						alt=""
					/>
					<img
						className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
						src="../img/screenshot4-2x.png"
						alt=""
					/>
				</div>
			</div>
			<div className="w-[350px] grid gap-y-3">
				<div className="bg-white border p-[40px] pt-10 pb-2">
					<a href="#" className="flex justify-center mb-8">
						<img className="h-[51px]" src="../img/instagram-logo.png" alt="" />
					</a>

					<form className="grid gap-y-1.5">
						<Input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							label="Phone number, username or email"
						/>
						<Input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							label="Password"
						/>

						<button
							type="submit"
							disabled={!enable}
							className="h-[30px] rounded text-white text-sm font-medium bg-brand disabled:opacity-50 mt-2"
						>
							Log In
						</button>
						<div className="flex items-center mt-2">
							<div className="h-px bg-gray-300 flex-1 "></div>
							<span className="px-4 text-[13px] font-semibold text-gray-500">
								OR
							</span>
							<div className="h-px bg-gray-300 flex-1 "></div>
						</div>
						<a
							href="#"
							className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook mt-4"
						>
							<FaFacebook size={16} />
							Log in with Facebook
						</a>
						<a
							href="#"
							className="text-xs flex items-center justify-center text-link my-3"
						>
							Forgot password?
						</a>
					</form>
				</div>
				<div className="bg-white border p-4 text-sm text-center">
					Don't have an account?{" "}
					<a href="#" className="font-semibold text-brand">
						Sign up
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
