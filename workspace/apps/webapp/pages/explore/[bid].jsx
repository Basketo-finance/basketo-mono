import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Graph from '../../Components/Common/Graph';
import basketsData from '../../Components/Explore/basketsData';
import { Paper } from '@mui/material';

const Basket = () => {

	const router = useRouter();
	const { bid } = router.query;
	const basket = basketsData.find(basket => basket.symbol === bid);

	const [graphData, setGraphData] = useState(null);

	useEffect(() => {

		const basketData = [
			{ name: 'bitcoin', ratio: 25, noOfDays: 7 },
			{ name: 'ethereum', ratio: 65, noOfDays: 7 },
			{ name: 'near', ratio: 10, noOfDays: 7 }
		];

		fetch('https://basketo-api.herokuapp.com/api/graph_data', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'post',
			body: JSON.stringify({ basketData })
		})
		.then(res => res.json())
		.then(graphData => setGraphData(graphData));
	}, []);

	return (

		<Paper variant='window' >
			<Navbar />
            <div style={{ paddingTop: '70px' }}>
				<Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
					<Link href="/explore">
						<a>
							<Typography
								variant="subtitle2"
								component="span"
								fontWeight="bold"
								sx={{ color: '#777' }}
							>
								&lt;&nbsp;&nbsp;Back to Explorer
							</Typography>
						</a>
					</Link>

					{ basket && (

						<>
							<Box
								display="flex"
								alignItems="center"
								justifyContent="space-between"
								sx={{ mt: 4, mb: 4 }}
							>
								<Box
									display="flex"
									alignItems="center"
									sx={{ '> *': { mr: 2 } }}
								>
									<Avatar
										src={ basket.image }
										alt={ basket.symbol + ' logo' }
										sx={{ width: 48, height: 48 }}
									/>

									<Typography
										variant="h3"
										sx={{ fontSize: '2rem', fontWeight: 'bold' }}
									>
										{ basket.name }
									</Typography>
								</Box>

								<Button
									variant="contained"
									size="large"
									disabled
									// sx={{ width: { xs: '100%', sm: 'auto' } }}
								>
									Invest
								</Button>
							</Box>

							<Box sx={{ mb: 2 }}>
								{/* <Typography variant="h5">
									Graph
								</Typography>

								<Divider sx={{ mt: 1, mb: 1 }} /> */}

								<Graph data={ graphData } />
							</Box>

							<Box sx={{ mb: 2 }}>
								<Grid
									container
									justifyContent="space-between"
								>
									<Grid item>
										<Typography
											variant="h6"
											sx={{
												fontSize: '0.9rem',
												fontWeight: 'bold',
												color: '#777'
											}}
										>
											Token
										</Typography>
									</Grid>

									<Grid item>
										<Typography
											variant="h6"
											sx={{
												fontSize: '0.9rem',
												fontWeight: 'bold',
												color: '#777'
											}}
										>
											Weight { "(%)" }
										</Typography>
									</Grid>
								</Grid>

								<Divider sx={{ mt: 1, mb: 1.5 }} />

								{ basket.coins.map(coin => (

									<Grid
										container
										justifyContent="space-between"
										key={ coin.name }
									>
										<Grid
											item
											display="flex"
											alignItems="center"
											sx={{ mb: 2 }}
										>
											<Avatar
												src={ coin.image }
												alt={ coin.name + ' logo' }
												sx={{ mr: 2.5, width: 28, height: 28 }}
											/>

											<Typography
												variant="h6"
												sx={{
													fontSize: '1rem',
													fontWeight: 'bold',
													textTransform: 'capitalize'
												}}
											>
												{ coin.name }
											</Typography>
										</Grid>

										<Grid item>
											<Typography
												variant="h6"
												sx={{
													fontSize: '1rem',
													fontWeight: 'bold',
													textTransform: 'capitalize'
												}}
											>
												{ coin.weight }%
											</Typography>
										</Grid>
									</Grid>
								)) }
							</Box>

							<Box>
								<Typography variant="h5">
									About
								</Typography>

								<Divider sx={{ mt: 1, mb: 1 }} />

								<Typography>
									{ basket.description }
								</Typography>
							</Box>
						</>
					)}
				</Container>
                <Footer />
            </div>
		</Paper>
	);
};

export default Basket;