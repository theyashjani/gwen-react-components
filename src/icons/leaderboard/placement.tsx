import React from "react"

interface Props extends React.SVGAttributes<SVGElement> {
	placement: 1 | 2 | 3
}

export const Placement = (props: Props): JSX.Element => {
	const colors = { 1: { fill: "#f4cc6b", stroke: "#d7b45f" }, 2: { fill: "#dcdcdc", stroke: "#c4c4c4" }, 3: { fill: "#eba77b", stroke: "#e08b53" } }
	const { fill, stroke } = colors[props.placement]
	const leafD = "M836.408 816.234c-30.371 38.085-37.318 136.34-.477 163.164 37.527-46.997 27.202-121.627.477-163.164z"
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit="1.5"
			clipRule="evenodd"
			viewBox="0 0 236 219"
		>
			<path
				fill={fill}
				stroke={stroke}
				strokeWidth="5.000044"
				d="M36.2403 19.4842C14.637 41.0875 2.5001 70.3882 2.5001 100.9403c0 63.5786 51.6179 115.195 115.1964 115.195s115.1963-51.6164 115.1963-115.195c0-30.552-12.1369-59.8528-33.7402-81.4561 21.6033 21.6033 33.7402 50.904 33.7402 81.4561 0 63.5786-51.6178 115.195-115.1963 115.195C54.118 216.1354 2.5 164.519 2.5 100.9404c0-30.552 12.137-59.8528 33.7402-81.4561z"
			/>
			<path fill={fill} stroke={stroke} strokeWidth="17.32" d={leafD} transform="matrix(-.05103 .1814 .13811 .03885 117.2652 -157.0527)" />
			<path fill={fill} stroke={stroke} strokeWidth="17.32" d={leafD} transform="matrix(.05103 .1814 -.13811 .03885 119.0812 -157.0527)" />
			<path fill={fill} stroke={stroke} strokeWidth="17.32" d={leafD} transform="matrix(-.18809 -.01159 -.00882 .1432 373.7872 -104.2273)" />
			<path fill={fill} stroke={stroke} strokeWidth="17.32" d={leafD} transform="matrix(.18809 -.01159 .00882 .1432 -137.4434 -104.2273)" />
			<path fill={fill} stroke={stroke} strokeWidth="15.02" d={leafD} transform="matrix(-.14828 .15883 .12092 .11289 204.7652 -223.5184)" />
			<path fill={fill} stroke={stroke} strokeWidth="15.02" d={leafD} transform="matrix(.14295 .16363 -.12458 .10884 39.3123 -223.897)" />
			<path fill={fill} stroke={stroke} strokeWidth="24.01" d={leafD} transform="matrix(-.1358 -.00546 -.00416 .1034 334.7517 -57.539)" />
			<path fill={fill} stroke={stroke} strokeWidth="24.01" d={leafD} transform="matrix(.1358 -.00546 .00416 .1034 -98.4065 -57.539)" />
			<path fill={fill} stroke={stroke} strokeWidth="24.01" d={leafD} transform="matrix(.00232 .1359 .10347 -.00176 112.3647 -69.432)" />
			<path fill={fill} stroke={stroke} strokeWidth="24.01" d={leafD} transform="matrix(-.00232 .1359 -.10347 -.00176 122.9978 -69.432)" />

			{props.placement === 1 && (
				<path
					fill="#f4cc6b"
					fillRule="nonzero"
					stroke="#d7b45f"
					strokeLinecap="butt"
					strokeMiterlimit="1.4142"
					strokeWidth="7.2531"
					d="M136.4772 174.7081V39.1655h-24.8346C108.9286 53.37 95.1433 64.441 75.299 64.65v19.4006h32.5867v90.6576h28.5916z"
				/>
			)}

			{props.placement === 2 && (
				<path
					fill="#dcdcdc"
					fillRule="nonzero"
					stroke="#c4c4c4"
					strokeLinecap="butt"
					strokeMiterlimit="1.4142"
					strokeWidth="5.676"
					d="M101.0544 91.9387c-.4915-1.7981-.8185-3.9243-.8185-5.886 0-9.975 5.5614-17.6603 16.8475-17.6603 10.6323 0 16.0302 6.868 16.0302 14.5533 0 7.3584-3.5986 12.9174-12.595 18.3142l-17.5014 10.4643c-18.9488 11.4462-24.8291 26.6522-24.9926 45.2683h78.4446v-19.4323h-50.8354c1.6358-4.0879 5.071-7.0314 9.16-9.648l20.4426-12.4271c13.0662-8.0123 20.579-19.1316 20.579-32.8664 0-18.472-14.5352-34.149-38.2404-34.149-24.6884 0-38.733 16.8202-38.733 35.4568 0 2.6166.4903 5.8871.8161 7.3584l21.3963.6538z"
				/>
			)}

			{props.placement === 3 && (
				<path
					fill="#eba77b"
					fillRule="nonzero"
					stroke="#e08b53"
					strokeLinecap="butt"
					strokeMiterlimit="1.4142"
					strokeWidth="5"
					d="M108.4563 115.555c2.017-.721 4.467-1.441 8.501-1.441 8.933 0 15.272 5.043 15.272 13.833 0 7.781-5.907 14.121-15.849 14.121-9.797 0-16.569-6.917-17.001-16.427l-19.134 3.747c1.151 15.701 14.386 29.7979 36.135 29.7979 22.611 0 35.847-14.817 35.847-30.951 0-17.141-12.948-27.928-27.058-28.503l24.181-20.1769V63.588h-66.084v17.118h40.895l-24.494 21.039 8.789 13.81z"
				/>
			)}
		</svg>
	)
}
