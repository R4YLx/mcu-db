import { Triangle } from "react-loader-spinner";

const LoadingSpinner = () => {
	return (
		<>
			<Triangle
				height="80"
				width="80"
				color="#673ab7"
				ariaLabel="triangle-loading"
				wrapperStyle={{}}
				visible={true}
			/>
		</>
	);
};

export default LoadingSpinner;
