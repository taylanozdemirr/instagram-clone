import { useEffect, useRef, useState } from "react";

export default function Input({ label, type = "text", ...props }) {
	const inputRef = useRef();
	const [show, setShow] = useState(false);
	const [inputType, setType] = useState(type);

	useEffect(() => {
		if (show) {
			setType("text");
			inputRef.current.focus();
		} else if (type === "password") {
			setType("password");
			inputRef.current.focus();
		}
	}, [show]);
	return (
		<label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
			<input
				ref={inputRef}
				type={inputType}
				required={true}
				className=" w-full h-[38px]  px-2 outline-none valid:pt-[10px] text-xs peer"
				{...props}
			/>
			<small className="absolute top-1/2 left-[9px] cursor-text poninter-events-none text-xs text-gray-500 transition-all -translate-y-1/2 peer-valid:text-[10px] peer-valid:top-2">
				{label}
			</small>
			{type === "password" && props?.value && (
				<button
					type="button"
					onClick={() => setShow((show) => !show)}
					className="h-full flex items-center text-xs font-semibold pr-2"
				>
					{show ? "Hide" : "Show"}
				</button>
			)}
		</label>
	);
}
