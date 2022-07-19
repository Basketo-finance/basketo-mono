import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const timeFrames = { '1D': 1, '1W': 7, '1M': 30, '1Y': 365 };

const Graph = ({ data, setDays, }) => {
  const theme = useTheme();
  const aspect = useMediaQuery(theme.breakpoints.up('sm')) ? 2.25 : 1.25;
  const [timeFrame, setTimeFrame] = useState(Object.keys(timeFrames)[0]);

  const handleTimeFrame = (event, newTimeFrame) => {
    if (newTimeFrame) {
      setTimeFrame(newTimeFrame);
    }
  };

  const timeFrameBtns = Object.keys(timeFrames).map((timeFrame) => (
    <ToggleButton
      key={timeFrame}
      value={timeFrame}
      color="primary"
      sx={{
        p: '0.2rem 0.4rem',
        fontWeight: 'bold',
      }}
    >
      {timeFrame}
    </ToggleButton>
  ));

  useEffect(() => {
    setDays(timeFrames[timeFrame]);
  }, [setDays, timeFrame]);


  return (
    <>
      <ToggleButtonGroup
        size="small"
        value={timeFrame}
        exclusive
        onChange={handleTimeFrame}
        sx={{
          display: 'flex',
          mb: '1rem',
          justifyContent: 'end',
        }}
      >
        {timeFrameBtns}
      </ToggleButtonGroup>

      <ResponsiveContainer width="100%" height="auto" aspect={aspect}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            left: -36,
          }}
          style={{
            fontSize: 'clamp(0.75rem, 0.6rem + 1vw, 1rem)',
          }}
        >
          <XAxis dataKey="timeStamp" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="point"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Graph;
