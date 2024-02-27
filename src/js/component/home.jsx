import React, { useState } from "react";

const Home = () => {
	const [style, setStyle] = useState("redglow");
	const autoCycle = () => {
		if (style == "yellowglow"){
			setStyle("redglow")
		}else if(style == "redglow"){
			setStyle("greenglow")
		}else if(style == "greenglow"){
			setStyle("yellowglow")
		}
	}
	setTimeout(autoCycle, 1000)
	return (
		<div className="container-fluid">
			<div className="d-flex justify-content-center">
				<div className="trafficlight-body">
					<div className={style == "redglow" ? "glow": ""} id="firstlight" onClick={() => {
						console.log("Clicked on red")
						if (style !== "redglow") setStyle("redglow");
					}}>

					</div>
					<div className={style == "yellowglow" ? "glow": ""} id="secondlight" onClick={() => {
					console.log("clicked on yellow")
					if (style !== "yellowglow") setStyle("yellowglow");
					}}>
					</div>
					<div className={style == "greenglow" ? "glow": ""} id="thirdlight" onClick={() => {
					console.log("clicked on green")
						if (style !== "greenglow") setStyle("greenglow");
					}}>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center">
					<button className="btn btn-primary btn-lg" onClick={() => {
						if (style == "yellowglow"){
							setStyle("redglow")
						}else if(style == "redglow"){
							setStyle("greenglow")
						}else if(style == "greenglow"){
							setStyle("yellowglow")
						}
					}}>Cycle Lights</button>
			</div>
		</div>
	);
};

export default Home;
