import { Triangle } from "react-loader-spinner";

const LoadingSpinner = () => {
	return (
		<div className="py-8">
			<Triangle
				height="150"
				width="150"
				color="#673ab7"
				ariaLabel="triangle-loading"
				wrapperStyle={{}}
				visible={true}
			/>
		</div>
	);
};

export default LoadingSpinner;
