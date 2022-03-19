import React from "react";
import "../checkout-info/style.css";

export default function CheckoutInfo() {
	return (
		<div className="col-2">
			{/* container start */}
			<div class="container">
				{/* whole column begin */}
				<div class="row">
					{/* Only column begin */}
					<div class="col">
						{/* Header */}

						<div className="login-prompt mb-3">
							<p>
								Already have an account?{" "}
								<a href="/login">
									<u>Log in</u>
								</a>{" "}
								for a faster checkout
							</p>
						</div>
						{/* buttons */}
						<p className="mt-4">DELIVERY METHOD</p>
						<div className="d-flex justify-content-center">
							<input type="button" value="DELIVER" className="deliver-method deliver" />
							<input type="button" value="PICKUP" className="deliver-method pickup" />
						</div>
					</div>
					{/* only column end */}
				</div>
				{/* ^ whole column end */}
				{/* FORM COlumn start */}
				<div class="container">
					<div class="row row mt-5">
						{/* first name */}
						<div class="col padding-left">
							<input
								type="text"
								className="form-control"
								placeholder="First name*"
								aria-label="First name"
							/>
						</div>
						{/* last name */}
						<div className="col">
							<input
								type="text"
								className="form-control"
								placeholder="Last name*"
								aria-label="Last name"
							/>
						</div>
					</div>
					{/* Address row pt.1*/}
					<div className="row mt-3">
						{/* Address */}
						<div className="col-9 padding-left">
							<input
								type="text"
								className="form-control"
								placeholder="Address*"
								aria-label="Address"
							/>
						</div>
						{/* APT */}
						<div className="col">
							<input
								type="text"
								className="form-control"
								placeholder="Apt, suite, etc."
								aria-label="Apt"
							/>
						</div>
					</div>
					{/* Address row pt.2  */}
					<div className="row mt-3">
						{/* City */}
						<div className="col-5 padding-left">
							<input
								className="form-control"
								type="text"
								placeholder="Jacksonville"
								aria-label="Jacksonville"
								disabled
							/>
						</div>
						{/* state */}
						<div className="col">
							<input
								className="form-control"
								type="text"
								placeholder="Florida"
								aria-label="Florida"
								disabled
							/>
						</div>
						{/* zip code */}
						<div className="col">
							<input
								type="text"
								className="form-control"
								placeholder="Zip Code*"
								aria-label="Zip Code"
							/>
						</div>
					</div>
					{/* Email/Phone */}
					<div className="row mt-3">
						{/* email */}
						<div className="col-8 padding-left">
							<input
								type="text"
								className="form-control"
								placeholder="Email*"
								aria-label="Email"
							/>
						</div>
						{/* phone */}
						<div className="col">
							<input
								type="text"
								className="form-control"
								placeholder="Phone Number*"
								aria-label="Phone Number"
							/>
						</div>
					</div>
					{/* Payment */}
					<div class="row mt-5">
						<div className="col d-flex justify-content-center">
							<input
								type="button"
								value="CONTINUE TO PAYMENT"
								className="cont-btn"
							/>
						</div>
					</div>
				</div>
				{/* form column end */}
			</div>
			{/* ^ containder end */}
		</div>
	);
}
